import { Instagram } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <AnimatedSection animation="fade-right" delay={0}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="/Tiffs.png"
              alt="Tiff's Coffee Bar Logo"
              className="h-16 w-auto invert rounded-lg opacity-90"
            />
            <span className="text-xl font-serif font-bold">Tiff's Coffee Bar</span>
          </button>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <motion.a 
            href="https://www.instagram.com/tiffs_coffeebar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-block group"
            whileHover="hover"
            initial="initial"
          >
            {/* 3D Isometric Depth Layer */}
            <motion.div
              className="absolute inset-0 bg-gold rounded-full"
              variants={{
                initial: { x: 0, y: 0, opacity: 0 },
                hover: { x: 6, y: 6, opacity: 1 }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            
            {/* Main Button Surface */}
            <motion.div
              className="relative flex items-center gap-3 bg-coffee px-6 py-3 rounded-full border border-gold/30 text-cream z-10"
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: -4, y: -4, backgroundColor: "hsl(var(--coffee-light))" }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Instagram size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium text-lg">Follow us on Instagram</span>
            </motion.div>
          </motion.a>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={400}>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Tiff's Coffee Bar.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
};
