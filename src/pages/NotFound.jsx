import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextReveal, FadeUp } from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mh-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle Architectural Wireframe Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Glitching / Moving Lines */}
      <motion.div 
        className="absolute top-0 left-[20%] w-[1px] h-full bg-black/10 z-0"
        animate={{ x: [0, -10, 5, 0], opacity: [0.5, 1, 0.2, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-0 right-[30%] w-[1px] h-full bg-black/10 z-0"
        animate={{ x: [0, 15, -5, 0], opacity: [0.2, 0.8, 0.3, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 text-center px-4 flex flex-col items-center">
        <FadeUp>
           <span className="text-xs uppercase tracking-[0.3em] text-mh-black/40 mb-4 block">Error 404</span>
        </FadeUp>
        
        <TextReveal text="Uncharted" tag="h1" className="text-6xl md:text-9xl font-serif mb-2 justify-center leading-none text-mh-black" />
        <TextReveal text="Territory" tag="h1" delay={1} className="text-6xl md:text-9xl font-serif mb-12 justify-center leading-none text-mh-black" />
        
        <FadeUp delay={4}>
          <p className="text-lg text-mh-black/60 mb-12 max-w-md mx-auto leading-relaxed">
            The space you are looking for does not exist in our blueprints. It may have been demolished or moved.
          </p>
          <MagneticButton>
            <Button className="rounded-none uppercase tracking-[0.2em] text-xs px-12 py-8 bg-mh-black text-mh-white hover:bg-mh-gold transition-colors duration-300" asChild>
              <Link to="/">Return to Reality</Link>
            </Button>
          </MagneticButton>
        </FadeUp>
      </div>
    </div>
  );
};

export default NotFound;
