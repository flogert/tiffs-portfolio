import { AnimatedSection } from "@/components/AnimatedSection";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-warm-beige">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-cozy font-bold text-primary mb-8 tracking-wide">
            Get in Touch
          </h2>
        </AnimatedSection> 

        <AnimatedSection animation="fade-up" delay={500} className="mt-16">
          <div className="max-w-2xl mx-auto bg-background/60 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-primary/10">
            <div className="bg-white/50 rounded-xl overflow-hidden">
              <div className="p-6 bg-primary/5 border-b border-primary/10">
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">Join Our Community</h4>
                <p className="text-muted-foreground text-sm">Tell us what you think or sign up for updates!</p>
              </div>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSch69qVFwZhIm4-NRIhLLVcozpx97Xde7wdlvPOg03-RgeXMQ/viewform?embedded=true" 
                width="100%" 
                height="800" 
                className="w-full h-[500px] md:h-[800px] border-none bg-transparent"
                title="Tiff's Coffee Bar Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
