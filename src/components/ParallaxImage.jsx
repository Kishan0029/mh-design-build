import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ParallaxImage = ({ src, alt, className, imageClassName }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Moves the image from -10% to 10% of its height as we scroll past it
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative group", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }} // Scale up slightly to prevent edges showing during parallax
        className={cn("w-full h-full object-cover transition-transform duration-700 ease-out", imageClassName)}
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};
