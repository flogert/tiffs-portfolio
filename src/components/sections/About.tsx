import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";
import profile from "@/assets/profile.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import { motion } from "framer-motion";

export const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <img
                src={profile}
                alt="Tiff's Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Staggered Column Reveal */}
            <div className="absolute inset-0 z-20 grid grid-cols-10">
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
                viewport={{ once: true }}
                className="bg-gold w-full relative rounded-b-xl"
              />
            </div>
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
