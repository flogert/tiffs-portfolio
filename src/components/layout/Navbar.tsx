import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import tiffsLogo from "@/assets/Tiffs.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const navRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const updateIndicator = () => {
      if (activeSection && navRefs.current[activeSection]) {
        const el = navRefs.current[activeSection];
        if (el) {
          setIndicatorStyle({
            left: el.offsetLeft,
            width: el.offsetWidth,
            opacity: 1
          });
        }
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, hoveredTab]); // Added hoveredTab to dependency to ensure updates if layout changes

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["schedule", "menu", "gallery", "contact", "about"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is active (top is near viewport top or covering it)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
    const items = [
      { label: "Schedule", id: "schedule" },
      { label: "Menu", id: "menu" },
      { label: "Gallery", id: "gallery" },
      { label: "Contact", id: "contact" },
      { label: "About", id: "about" },
    ];

    return (
      <>
        {items.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            ref={!mobile ? (el) => (navRefs.current[item.id] = el) : null}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            onMouseEnter={() => !mobile && setHoveredTab(item.id)}
            onMouseLeave={() => !mobile && setHoveredTab(null)}
            className={`${
              mobile
                ? `text-2xl font-serif text-left py-4 border-b ${activeSection === item.id ? "text-primary font-bold border-primary" : "text-foreground border-border/50"}`
                : `${scrolled ? "text-primary" : "text-white"} font-medium transition-colors relative group px-4 py-2`
            }`}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {mobile ? (
              <span className="relative z-10">{item.label}</span>
            ) : (
              <motion.span
                className="inline-block group-hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </motion.span>
            )}
          </a>
        ))}
        <Button 
          onClick={() => scrollToSection("contact")}
          className={`${
            mobile 
              ? "w-full mt-6 text-lg py-6" 
              : ""
          } bg-gold hover:bg-gold/90 text-primary font-bold rounded-full animate-pulse-glow transition-all hover:scale-105`}
        >
          Event Bookings
        </Button>
      </>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out animate-fade-down ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5"
          >
            <img
              src={tiffsLogo}
              alt="Tiff's Coffee Bar Logo"
              className={`w-auto rounded-lg transition-all ml-12 duration-500 ease-in-out ${
                scrolled ? "h-16 md:h-24" : "h-24 md:h-32"
              } ${scrolled ? "" : "invert"}`}
            />
            <h1 className={`text-xl md:text-[1.72rem] font-serif font-bold transition-all duration-500 ease-in-out ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Tiff's Coffee Bar
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden min-[845px]:flex items-center gap-2 relative">
            {NavItems({})}
            <div
              className="absolute -bottom-2 h-0.5 bg-gold shadow-[0_0_10px_#d4af37] transition-all duration-500 ease-in-out pointer-events-none"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-gold filter drop-shadow-[0_0_2px_#d4af37]"></div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="min-[845px]:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={scrolled ? "text-primary" : "text-white"}>
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col mt-8">
                  {NavItems({ mobile: true })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
