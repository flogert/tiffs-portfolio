import { useState, useRef, TouchEvent } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (diff > threshold) {
      nextImage();
    } else if (diff < -threshold) {
      prevImage();
    }
  };

  return (
    <section id="gallery" className="py-10 md:py-24 bg-warm-beige">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-5xl font-cozy font-bold text-primary text-center mb-8 md:mb-12 tracking-wide">
            Our Space
          </h2>
        </AnimatedSection>

        {/* Mobile & Tablet Carousel - Swipable */}
        <div className="lg:hidden">
          <div 
            className="relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-2xl cursor-pointer shadow-xl active:scale-[0.98] transition-transform">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    loading="lazy"
                    className="w-full h-[300px] sm:h-[400px] object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0">
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white active:scale-95 p-2.5 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white active:scale-95 p-2.5 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-7"
                    : "bg-primary/30 w-2.5 active:bg-primary/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Swipe hint */}
          <p className="text-center text-sm text-muted-foreground mt-3">Swipe to browse</p>
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
              className={`${image.span ? "lg:col-span-2" : ""} ${
                index % 3 === 0 ? "md:row-span-1" : ""
              }`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-xl cursor-pointer group relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        image.span ? "h-[280px]" : "h-[280px]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </DialogContent>
              </Dialog>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
