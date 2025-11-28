import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Generate random stars
  const stars = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  })), []);

  // Generate random nebula clouds
  const nebulas = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ["#1a1a2e", "#16213e", "#2d1b4e", "#1e1e2e"][i % 4],
    delay: Math.random() * 5,
  })), []);

  // Generate random planets
  const planets = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    size: Math.random() * 20 + 10,
    color: ["#E6B8B8", "#B8CBE6", "#E6D8B8", "#CDB8E6", "#B8E6C1", "#E2E8F0"][i % 6],
    delay: Math.random() * 2,
  })), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Nebula Background */}
          {nebulas.map((nebula) => (
            <motion.div
              key={nebula.id}
              className="absolute rounded-full blur-[100px] opacity-40 will-change-[transform,opacity]"
              style={{
                left: `${nebula.x}%`,
                top: `${nebula.y}%`,
                width: "40vw",
                height: "40vw",
                backgroundColor: nebula.color,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: nebula.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Planets */}
          {planets.map((planet) => (
            <motion.div
              key={planet.id}
              className="absolute rounded-full opacity-20"
              style={{
                left: `${planet.x}%`,
                top: `${planet.y}%`,
                width: planet.size,
                height: planet.size,
                background: `radial-gradient(circle at 30% 30%, ${planet.color}, transparent)`,
              }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: planet.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Stars Background */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}



          {/* Warm Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-[50px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative w-32 h-32 md:w-48 md:h-48 z-10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-gold overflow-visible"
            >
              {/* Steam */}
              <motion.path
                d="M6 1C6 1 7 2 7 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 0],
                  y: [0, -4, -8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
              <motion.path
                d="M10 1C10 1 11 2 11 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 0],
                  y: [0, -4, -8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              />
              <motion.path
                d="M14 1C14 1 15 2 15 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 0],
                  y: [0, -4, -8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />

              {/* Mug Body */}
              <motion.path
                d="M18 8h1a4 4 0 0 1 0 8h-1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              <defs>
                <clipPath id="mug-fill-clip">
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                </clipPath>
              </defs>

              {/* Coffee Fill Level */}
              <g clipPath="url(#mug-fill-clip)">
                <motion.rect
                  x="2"
                  width="16"
                  height="13"
                  className="fill-gold/20"
                  initial={{ y: 21 }}
                  animate={{ y: 8 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </g>
            </svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-2 z-10"
          >
            <h2 className="text-2xl font-serif text-gold font-bold tracking-widest">TIFF'S</h2>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.svg
                  key={i}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-gold"
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c-1 2-2 4-2 7s1 5 2 7c1-2 2-4 2-7s-1-5-2-7z" 
                  />
                </motion.svg>
              ))}
            </div>
            <motion.p 
              className="text-gold/60 text-sm font-light tracking-wider mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Brewing comfort...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
