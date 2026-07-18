import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';

const Footer = () => {
  const { address, email, phone, socials } = siteContent.contact;

  return (
    <footer className="bg-mh-black text-mh-white pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-[0.1em] mb-4 uppercase">MH DESIGN</h2>
            <p className="text-white/60 max-w-xs">Building Spaces That Define Tomorrow</p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest text-mh-gold mb-6">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-white/70 hover:text-mh-gold transition-colors">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-mh-gold transition-colors">About</Link>
              <Link to="/projects" className="text-white/70 hover:text-mh-gold transition-colors">Projects</Link>
              <Link to="/contact" className="text-white/70 hover:text-mh-gold transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest text-mh-gold mb-6">Contact</h4>
            <p className="text-white/70 mb-4 whitespace-pre-line leading-relaxed">{address}</p>
            <a href={`mailto:${email}`} className="block text-white/70 hover:text-mh-gold transition-colors mb-2">{email}</a>
            <a href={`tel:${phone}`} className="block text-white/70 hover:text-mh-gold transition-colors">{phone}</a>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest text-mh-gold mb-6">Follow Us</h4>
            <div className="flex flex-col gap-4">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-mh-gold transition-colors inline-block">Instagram</a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-mh-gold transition-colors inline-block">LinkedIn</a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-mh-gold transition-colors inline-block">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} MH Design & Build. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
