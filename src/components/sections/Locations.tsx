import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import { locations } from "@/data/content";

export const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-16">
            Find Us
          </h2>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <AnimatedSection key={index} animation="fade-right" delay={index * 100}>
                <div className="bg-warm-beige rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                        {location.name}
                      </h3>
                      <p className="text-muted-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.city}, {location.postcode}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-left" className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.687852687852!2d-76.3088!3d40.1569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c624b0b0b0b0b1%3A0x0!2sLititz%20Public%20Library!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tiff's Coffee Bar Locations"
            ></iframe>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
