import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const { address, email, phone, socials } = siteContent.contact;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax reveal effect: content slides down from -50% to 0% as it enters the viewport
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <footer ref={containerRef} className="bg-mh-black text-mh-white overflow-hidden relative border-t border-white/10">
      <motion.div style={{ y }} className="w-full pt-32 flex flex-col justify-between relative z-10">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
               <Link to="/" className="flex flex-col items-start w-fit mb-4 group">
                 <svg viewBox="0 0 186 100" className="w-24 h-auto overflow-hidden text-mh-white group-hover:text-mh-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                   <path d="M 6,100 L 6,0 L 50,85 L 94,0 L 94,100" />
                   <path d="M 120,100 L 120,45 L 186,45" />
                   <path d="M 180,100 L 180,0" />
                 </svg>
                 <span className="font-sans text-[9px] tracking-[0.35em] uppercase mt-2 text-white/70 group-hover:text-mh-gold transition-colors pl-[0.35em] font-light">
                   DESIGN-BUILD
                 </span>
               </Link>
               <p className="text-white/50 text-sm max-w-[200px] leading-relaxed">Building Spaces That Define Tomorrow.</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-lg md:text-xl font-serif text-white hover:text-mh-gold transition-colors w-fit">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
               <p className="whitespace-pre-line leading-relaxed">{address}</p>
               <a href={`mailto:${email}`} className="hover:text-mh-gold transition-colors inline-block w-fit mt-2">{email}</a>
               <a href={`tel:${phone}`} className="hover:text-mh-gold transition-colors inline-block w-fit">{phone}</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Socials</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              {Object.entries(socials).map(([key, value]) => (
                <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-mh-gold transition-colors flex items-center gap-1 group w-fit">
                  {key} <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-6 items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8 md:mb-16">
          <p>&copy; {new Date().getFullYear()} MH Design. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      
      {/* Massive Brand Name at the very bottom */}
      <div className="w-full flex justify-center items-end leading-none pointer-events-none select-none overflow-hidden">
        <h1 className="text-[10vw] md:text-[12vw] font-sans font-bold text-white/5 whitespace-nowrap tracking-tighter translate-y-[20%]">
          MH DESIGN-BUILD
        </h1>
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
