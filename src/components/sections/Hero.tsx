import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";
import heroImage from "@/assets/hero-cafe.jpg";
import { ArrowLeft } from "lucide-react";

export const Hero = () => {
  const handleMenuClick = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to highlight menu
      window.dispatchEvent(new Event("menuHighlight"));
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Interactive Menu Highlight */}
      <div className="absolute left-[48px] top-[40%] z-20 animate-fade-right hidden lg:block">
        <button 
          onClick={handleMenuClick}
          className="group relative cursor-pointer"
          aria-label="View Menu"
        >
          <div className="relative w-[4.2rem] h-[4.2rem] rounded-full border-2 border-gold/60 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-black/20 transition-all duration-[1500ms] group-hover:scale-150 animate-pulse-glow">
            <span className="text-gold font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Menu</span>
          </div>
        </button>
      </div>

      <div className="absolute inset-0 bg-coffee/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatedSection animation="blur-in" delay={0}>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream bg-[length:200%_auto] animate-text-shimmer mb-6">
            TIFF'S COFFEE BAR
          </h1>
        </AnimatedSection>
        <div className="min-h-[3rem]">
          <AnimatedText
            text='"Where coffee sparks conversation and community feels like home"'
            className="text-lg md:text-2xl text-cream/90 font-light italic"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
