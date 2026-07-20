import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { siteContent } from '../content';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full h-[80px] z-50 transition-colors duration-500 flex items-center border-b",
        isScrolled || !isHome 
          ? "bg-mh-white text-mh-black border-black/10" 
          : "bg-transparent text-mh-white border-white/10"
      )}
    >
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center w-full">
        
        {/* Left Nav (Desktop) */}
        <nav className="hidden md:flex gap-8 lg:gap-10 items-center justify-start">
          <Link to="/" className="text-sm uppercase tracking-widest font-medium hover:text-mh-gold transition-colors animated-underline">Home</Link>
          <Link to="/about" className="text-sm uppercase tracking-widest font-medium hover:text-mh-gold transition-colors animated-underline">About</Link>
          <Link to="/services" className="text-sm uppercase tracking-widest font-medium hover:text-mh-gold transition-colors animated-underline">Services</Link>
          <Link to="/projects" className="text-sm uppercase tracking-widest font-medium hover:text-mh-gold transition-colors animated-underline">Projects</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex justify-start md:justify-center">
          <Link to="/" className="flex flex-col items-center justify-center group">
            <img 
              src="/logo.png" 
              alt="MH Design-Build" 
              className={cn(
                "h-12 md:h-14 w-auto transition-all duration-500", 
                (!isScrolled && isHome) ? "invert brightness-0" : ""
              )}
            />
          </Link>
        </div>
        
        {/* Right Action (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-6">
          <a href={siteContent.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-mh-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <Link to="/contact" className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
            isScrolled || !isHome 
              ? "bg-mh-black text-mh-white hover:bg-mh-black/90" 
              : "border border-mh-white text-mh-white hover:bg-mh-white hover:text-mh-black",
            "rounded-none tracking-widest uppercase"
          )}>
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 w-full bg-mh-white flex flex-col items-center py-10 gap-6 border-b shadow-lg md:hidden text-mh-black"
          >
            <Link to="/" className="text-xl uppercase tracking-widest font-medium">Home</Link>
            <Link to="/about" className="text-xl uppercase tracking-widest font-medium">About</Link>
            <Link to="/services" className="text-xl uppercase tracking-widest font-medium">Services</Link>
            <Link to="/projects" className="text-xl uppercase tracking-widest font-medium">Projects</Link>
            <Button variant="default" className="rounded-none tracking-widest uppercase w-3/4 mt-4" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
