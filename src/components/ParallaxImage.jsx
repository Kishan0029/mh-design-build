import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ParallaxImage = ({ src, alt, className, imageClassName }) => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Moves the image significantly to create a dramatic parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div 
      ref={ref} 
      className={cn("overflow-hidden relative group bg-black/5 select-none", className)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/5 animate-pulse" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable="false"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1.35 : 1.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y }}
        className={cn("w-full h-full object-cover pointer-events-none", imageClassName)}
      />
      
      {/* Watermark Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-[0.15] mix-blend-overlay">
        <div className="flex flex-col items-center justify-center scale-[2] md:scale-[3] opacity-60">
          <svg viewBox="0 0 186 100" className="w-20 h-auto overflow-hidden text-white" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
            <path d="M 6,100 L 6,0 L 50,85 L 94,0 L 94,100" />
            <path d="M 120,100 L 120,45 L 186,45" />
            <path d="M 180,100 L 180,0" />
          </svg>
          <span className="font-sans text-[9px] tracking-[0.35em] uppercase mt-1.5 font-light text-white pl-[0.35em]">
            DESIGN-BUILD
          </span>
        </div>
      </div>

      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};
