import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Coffee } from "lucide-react";
import { menuItems } from "@/data/content";
import { motion } from "framer-motion";

export const Menu = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [activeTab, setActiveTab] = useState("coffee");

  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 3000);
    };

    window.addEventListener("menuHighlight", handleHighlight);
    return () => window.removeEventListener("menuHighlight", handleHighlight);
  }, []);

  return (
    <section id="menu" className="py-12 md:py-24 bg-warm-beige/30 relative overflow-hidden">
      {/* Gooey Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-cozy font-bold text-coffee drop-shadow-sm tracking-wide">Menu</h2>
              <div className="relative mt-1">
                <Coffee className="text-coffee fill-cream/50 drop-shadow-md" size={40} strokeWidth={2} />
              </div>
            </div>
            <AnimatedText 
              text="Handcrafted with love" 
              className="text-lg font-cozy text-muted-foreground mt-2 italic"
              delay={500}
            />
          </div>
        </AnimatedSection>

        <div className={`max-w-4xl mx-auto bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-lg transition-all duration-1000 ${isHighlighted ? "ring-2 ring-gold shadow-[0_0_50px_rgba(212,175,55,0.3)] scale-105 bg-background/80" : ""}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="relative mb-8 bg-warm-beige/30 p-2 rounded-xl">
                {/* Background Layer with Gooey Filter */}
                <div className="absolute inset-0 p-2" style={{ filter: "url(#goo)" }}>
                   <div className="relative w-full h-full grid grid-cols-2 gap-2">
                      {/* This is a dummy element to maintain grid layout for the absolute pill */}
                      <div className="col-span-2 relative h-full">
                         {activeTab === "coffee" && (
                            <motion.div
                              layoutId="active-pill"
                              className="absolute left-0 top-0 bottom-0 w-1/2 bg-coffee rounded-lg shadow-md"
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                         )}
                         {activeTab === "specialty" && (
                            <motion.div
                              layoutId="active-pill"
                              className="absolute right-0 top-0 bottom-0 w-1/2 bg-gold rounded-lg shadow-md"
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                         )}
                      </div>
                   </div>
                </div>

                {/* Text Layer (Interactive) */}
                <div className="relative z-10 grid w-full grid-cols-2 gap-2" role="tablist" aria-label="Menu Categories">
                  <button
                    role="tab"
                    aria-selected={activeTab === "coffee"}
                    onClick={() => setActiveTab("coffee")}
                    className={`font-serif text-lg py-2 rounded-lg transition-colors duration-300 ${
                      activeTab === "coffee" ? "text-cream" : "text-coffee hover:bg-coffee/10"
                    }`}
                  >
                    Coffee
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === "specialty"}
                    onClick={() => setActiveTab("specialty")}
                    className={`font-serif text-lg py-2 rounded-lg transition-colors duration-300 ${
                      activeTab === "specialty" ? "text-coffee" : "text-coffee hover:bg-gold/10"
                    }`}
                  >
                    Specialty
                  </button>
                </div>
              </div>
            </AnimatedSection>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <AnimatedSection 
                      key={item.name} 
                      animation="fade-up"
                      delay={index * 100}
                      className="w-full"
                    >
                      <motion.div 
                        className="group flex justify-between items-start text-sm p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10 cursor-default"
                        whileHover="hover"
                        initial="initial"
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.02 }
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-baseline justify-between">
                            <span className="font-medium text-foreground text-base group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <motion.span 
                              className="font-semibold text-primary inline-block origin-right drop-shadow-sm"
                              variants={{
                                hover: { 
                                  y: -2,
                                  scale: 1.05,
                                  color: "hsl(38, 70%, 55%)",
                                  textShadow: "0 0 8px rgba(212, 175, 55, 0.4)"
                                }
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              {item.price}
                            </motion.span>
                          </div>
                          <p className="text-muted-foreground text-xs mt-1 italic group-hover:text-muted-foreground/80 transition-colors">{item.description}</p>
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
