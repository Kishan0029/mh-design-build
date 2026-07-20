import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextReveal = ({ text, className, tag = "h2", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Split text into words, but preserve newlines by splitting by \n first
  const lines = text.split('\n');
  const words = [];
  lines.forEach((line, lineIndex) => {
    const lineWords = line.split(" ");
    lineWords.forEach((word) => words.push(word));
    if (lineIndex < lines.length - 1) {
      words.push("\n"); // Special token for newline
    }
  });
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        ease: "easeOut",
        duration: 0.8,
      },
    },
    hidden: {
      y: "120%",
      opacity: 0,
    },
  };

  const Tag = tag;

  return (
    <Tag ref={ref} className={cn("flex flex-wrap", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {words.map((word, index) => {
          if (word === "\n") {
            return <div key={`nl-${index}`} className="w-full h-4" />;
          }
          // Only render words that aren't empty strings (which can happen with multiple spaces/newlines)
          if (word === "") return null;
          
          return (
            <span key={index} className="overflow-hidden inline-block pb-[0.2em] -mb-[0.2em] mr-[0.25em]">
              <motion.span variants={child} className="inline-block">
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

export const FadeUp = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        type: "spring",
        damping: 30,
        stiffness: 100,
        delay: delay * 0.1 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
