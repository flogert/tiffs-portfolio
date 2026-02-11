import { useState, useRef, TouchEvent, useCallback } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (diff > threshold) nextImage();
    else if (diff < -threshold) prevImage();
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-10 md:py-24 bg-warm-beige">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-primary text-center mb-8 md:mb-12 tracking-wide">
            Gallery
          </h2>
        </AnimatedSection>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden">
          <div 
            className="relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl bg-warm-beige">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                loading="lazy"
                className="w-full h-[300px] sm:h-[380px] object-contain transition-opacity duration-300"
              />
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md active:scale-90 transition-transform"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md active:scale-90 transition-transform"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/25 w-2 active:bg-primary/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Cozy Masonry Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-3 max-w-5xl mx-auto grid-flow-dense">
          {galleryImages.map((image, index) => {
            // 11 images → 4 wide (col-span-2) + 7 standard = 15 cells = 5 perfect rows
            const wideIndices = new Set([0, 3, 5, 8]);
            const isWide = wideIndices.has(index);

            return (
              <AnimatedSection
                key={index}
                animation="scale-in"
                delay={index * 70}
                className={isWide ? "col-span-2" : ""}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="overflow-hidden rounded-xl cursor-pointer group relative w-full block focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-5xl bg-black/95 border-none shadow-none p-2 sm:p-4">
            <div className="relative">
              <img
                src={galleryImages[lightboxIndex]?.src}
                alt={galleryImages[lightboxIndex]?.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightboxIndex ? "bg-white w-5" : "bg-white/40"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
