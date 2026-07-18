import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ text, speed = 40, className = "" }) {
  // We duplicate the text to create a seamless infinite loop
  const content = text;
  
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap bg-mh-black text-mh-white py-6 md:py-10 select-none ${className}`}>
      <motion.div
        className="flex whitespace-nowrap text-3xl md:text-5xl font-sans font-bold tracking-tight uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <span className="pr-12 md:pr-24">{content}</span>
        <span className="pr-12 md:pr-24">{content}</span>
        <span className="pr-12 md:pr-24">{content}</span>
        <span className="pr-12 md:pr-24">{content}</span>
      </motion.div>
    </div>
  );
}
