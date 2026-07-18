import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  // Use a function for initial state to avoid the flashing curtain bug on refresh
  const [isLoading, setIsLoading] = useState(() => {
    // For development review, we are ALWAYS showing the preloader. 
    // In production, we can uncomment the sessionStorage check.
    // return !sessionStorage.getItem('mh-design-loaded');
    return true;
  });

  useEffect(() => {
    if (!isLoading) return;

    // sessionStorage.setItem('mh-design-loaded', 'true');
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Give it enough time to draw the logo

    return () => clearTimeout(timer);
  }, [isLoading]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-mh-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* SVG Line Drawn Logo */}
          <div className="w-32 md:w-48 mb-8">
            <motion.svg 
              viewBox="0 0 186 100" 
              className="w-full h-auto overflow-hidden"
              initial="hidden"
              animate="visible"
            >
              <motion.path 
                d="M 6,100 L 6,0 L 50,85 L 94,0 L 94,100" 
                fill="none" 
                stroke="#F2EBE5" 
                strokeWidth="12" 
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                variants={pathVariants} 
              />
              <motion.path 
                d="M 120,100 L 120,45 L 186,45" 
                fill="none" 
                stroke="#F2EBE5" 
                strokeWidth="12" 
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                variants={pathVariants} 
              />
              <motion.path 
                d="M 180,100 L 180,0" 
                fill="none" 
                stroke="#F2EBE5" 
                strokeWidth="12" 
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                variants={pathVariants} 
              />
            </motion.svg>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
              className="text-mh-white font-sans text-xs md:text-sm tracking-[0.35em] uppercase pl-[0.35em] text-center font-light"
            >
              DESIGN-BUILD
            </motion.h1>
          </div>
          
          {/* Minimalist loading bar at bottom */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px]">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="w-full h-full bg-mh-white/20 origin-left relative"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.3, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 left-0 w-full h-full bg-mh-gold origin-left"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
