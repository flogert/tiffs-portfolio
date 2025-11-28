import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/data/content";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-12 md:py-24 bg-warm-beige">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-cozy font-bold text-primary text-center mb-16 tracking-wide">
            Our Space
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 150}
              className={image.span ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-2xl"
                    />
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
