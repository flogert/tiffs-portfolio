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
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hi! My name is Tiffani, and I own and operate Tiff's Coffee Bar. I am dedicated to serving thoughtfully crafted coffee drinks and proudly feature espresso from Whiffs, a local coffee company. I operate mostly in and around Lancaster, Pennsylvania and have traveled up to 45 miles for private events. Through a simple booking process, my hope in bringing Tiff's Coffee Bar to your upcoming event is that you and your guests will experience the warmth of hospitality and feel encouraged to connect with each other in a meaningful way over a cup of quality coffee. I'm honored by your support, and it truly is my pleasure to serve you!
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={800}>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform animate-pulse-glow"
              >
                Contact Us
              </Button>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
