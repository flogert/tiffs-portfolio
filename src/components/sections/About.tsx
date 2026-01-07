import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";
import profile from "@/assets/profile.jpg";

export const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={profile}
              alt="Tiff - Owner of Tiff's Coffee Bar in Lititz PA"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <AnimatedSection animation="fade-left" delay={200}>
            <AnimatedText 
              text="Meet Tiff" 
              el="h2"
              className="text-4xl md:text-5xl font-cozy font-bold text-primary mb-6 tracking-wide"
            />
            <AnimatedSection animation="blur-in" delay={400}>
              <p className="text-xl text-muted-foreground italic mb-8">
                "The magic of coffee isn't just in the bean, but in the conversations it inspires."
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about creating a warm, welcoming space where friends can catch up, ideas can brew, and community connections can flourish. My journey with coffee started with a simple love for the craft, but it grew into a desire to serve more than just a great cup. Every latte, cappuccino, and espresso is poured with love and a genuine wish to brighten your day.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={800}>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform animate-pulse-glow"
              >
                Get in Touch
              </Button>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
