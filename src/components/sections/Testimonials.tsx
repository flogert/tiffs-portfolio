import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection animation="fade-up" delay={index * 200} className="h-full">
                    <div className="p-1 h-full">
                      <Card className="bg-primary-foreground/10 border-none text-primary-foreground h-full">
                        <CardContent className="flex flex-col h-full items-center justify-center p-6 text-center">
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < testimonial.rating ? "fill-gold text-gold" : "text-primary-foreground/30"}
                              />
                            ))}
                          </div>
                          <p className="text-lg italic mb-6 flex-grow">"{testimonial.text}"</p>
                          <p className="font-serif font-bold">{testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary-foreground text-primary border-none hover:bg-primary-foreground/90" />
            <CarouselNext className="bg-primary-foreground text-primary border-none hover:bg-primary-foreground/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
