import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Offset the cursor by exactly -50% using CSS calc!
  // Framer motion translates this directly into: transform: translateX(calc(Xpx - 50%))
  const cursorX = useTransform(mouseX, (x) => `calc(${x}px - 50%)`);
  const cursorY = useTransform(mouseY, (y) => `calc(${y}px - 50%)`);

  useEffect(() => {
    // Only run on desktop/devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateCursorType = (clientX, clientY) => {
      const target = document.elementFromPoint(clientX, clientY);
      if (!target) return;
      
      const cursorAttr = target.closest('[data-cursor]');
      if (cursorAttr) {
        setCursorType(cursorAttr.getAttribute('data-cursor'));
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      updateCursorType(e.clientX, e.clientY);
    };

    let scrollTimeout;
    const handleScroll = () => {
      if (!isVisible) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateCursorType(mouseX.get(), mouseY.get());
      }, 100); // Only evaluate what is under the cursor 100ms after scrolling stops
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // Variants for different cursor states
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(255, 255, 255, 1)", // White with difference = Black on white bg, White on black bg
      mixBlendMode: "difference",
      border: "0px solid rgba(0,0,0,0)"
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "1px solid rgba(0,0,0,0.5)",
      mixBlendMode: "normal"
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid rgba(0,0,0,0)",
      mixBlendMode: "normal"
    },
    play: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(212, 175, 55, 1)", // gold
      border: "0px solid rgba(0,0,0,0)",
      mixBlendMode: "normal"
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center text-[10px] font-sans font-semibold uppercase tracking-[0.2em] shadow-sm overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        display: isVisible ? "flex" : "none"
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: (cursorType === 'view' || cursorType === 'play') ? 1 : 0 }}
        style={{ color: cursorType === 'play' ? '#FFFFFF' : '#000000' }}
      >
        {cursorType === 'view' ? 'View' : cursorType === 'play' ? 'Play' : ''}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
