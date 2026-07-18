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
    <div ref={ref} className={cn("overflow-hidden relative group bg-black/5", className)}>
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/5 animate-pulse" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1.35 : 1.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y }}
        className={cn("w-full h-full object-cover", imageClassName)}
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};
