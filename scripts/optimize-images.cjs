const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 900;
const JPEG_QUALITY = 80;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpeg', '.jpg', '.png'].includes(ext)) return;
  
  const name = path.basename(filePath);
  const stats = fs.statSync(filePath);
  const sizeKB = Math.round(stats.size / 1024);
  
  // Skip small files (under 300KB)
  if (sizeKB < 300) {
    console.log(`  SKIP ${name} (${sizeKB}KB - already small)`);
    return;
  }

  try {
    const image = sharp(fs.readFileSync(filePath));
    const metadata = await image.metadata();
    
    console.log(`  Processing ${name}: ${metadata.width}x${metadata.height} (${sizeKB}KB)`);
    
    const outputBuffer = await sharp(fs.readFileSync(filePath))
      .resize(MAX_WIDTH, MAX_HEIGHT, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();
    
    const newSizeKB = Math.round(outputBuffer.length / 1024);
    
    // Replace file - change extension to .jpeg if it was .png
    const newPath = filePath.replace(/\.(png|jpeg|jpg)$/i, '.jpeg');
    fs.writeFileSync(newPath, outputBuffer);
    
    // Remove old file if extension changed
    if (newPath !== filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    console.log(`  -> ${path.basename(newPath)}: ${newSizeKB}KB (saved ${Math.round((1 - newSizeKB/sizeKB) * 100)}%)`);
  } catch (err) {
    console.error(`  ERROR ${name}: ${err.message}`);
  }
}

async function main() {
  console.log('Optimizing images in', ASSETS_DIR);
  console.log('Max dimensions:', MAX_WIDTH, 'x', MAX_HEIGHT);
  console.log('JPEG quality:', JPEG_QUALITY);
  console.log('');
  
  const files = fs.readdirSync(ASSETS_DIR);
  
  for (const file of files) {
    await optimizeImage(path.join(ASSETS_DIR, file));
  }
  
  console.log('\nDone! Checking final sizes:');
  const finalFiles = fs.readdirSync(ASSETS_DIR);
  for (const file of finalFiles) {
    const stats = fs.statSync(path.join(ASSETS_DIR, file));
    console.log(`  ${file}: ${Math.round(stats.size / 1024)}KB`);
  }
}

main();
