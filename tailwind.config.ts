import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        coffee: "hsl(var(--coffee))",
        "coffee-light": "hsl(var(--coffee-light))",
        cream: "hsl(var(--cream))",
        "warm-beige": "hsl(var(--warm-beige))",
        gold: "hsl(var(--gold))",
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        cozy: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "steam": {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-20px) scale(1.5)",
            opacity: "0",
          },
        },
        "blur-in": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },
        "subtle-zoom": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        "bounce-left": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 20px 0 rgba(212, 175, 55, 0.7)",
          },
        },
        "fly-down": {
          "0%": {
            transform: "translateY(-10vh) translateX(-50%) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(110vh) translateX(50%) rotate(45deg)",
            opacity: "0",
          },
        },
        "guide-down": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(15vw, 50vh)",
            opacity: "0",
          },
        },
        "river-flow": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(82vw, 15vh) rotate(10deg)",
            opacity: "1",
          },
        },
        "morph-plane": {
          "0%, 40%": {
            opacity: "1",
            transform: "scale(1) rotate(45deg)",
          },
          "60%, 100%": {
            opacity: "0",
            transform: "scale(0.5) rotate(45deg)",
          },
        },
        "morph-mug": {
          "0%, 40%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "60%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blur-in": "blur-in 0.8s ease-out",
        "subtle-zoom": "subtle-zoom 20s ease-in-out infinite alternate",
        "bounce-left": "bounce-left 1s infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s infinite",
        "fly-down": "fly-down 1.5s ease-in forwards",
        "guide-down": "guide-down 2s ease-out forwards",
        "river-flow": "river-flow 2.5s ease-in-out forwards",
        "morph-plane": "morph-plane 5s ease-in-out forwards",
        "morph-mug": "morph-mug 5s ease-in-out forwards",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-down": "fade-down 0.6s ease-out",
        "fade-left": "fade-left 0.6s ease-out",
        "fade-right": "fade-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "steam": "steam 2s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
