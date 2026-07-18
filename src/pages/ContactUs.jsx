import React, { useEffect } from 'react';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  const { contact } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[80px] min-h-screen bg-mh-white pb-32">
      <div className="container mx-auto px-4">
        <header className="py-16 md:py-24 text-center">
          <TextReveal text="Let's Talk" tag="h1" className="text-5xl md:text-7xl font-serif justify-center" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Form Column */}
          <FadeUp delay={2} className="flex flex-col">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input type="text" id="name" placeholder=" " required className="w-full bg-transparent border-b border-black/20 py-2 text-mh-black focus:outline-none peer" />
                <label htmlFor="name" className="absolute top-2 left-0 text-black/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-mh-black peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:text-mh-black">Name</label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-mh-gold scale-x-0 origin-left transition-transform duration-400 peer-focus:scale-x-100"></div>
              </div>
              
              <div className="relative group">
                <input type="email" id="email" placeholder=" " required className="w-full bg-transparent border-b border-black/20 py-2 text-mh-black focus:outline-none peer" />
                <label htmlFor="email" className="absolute top-2 left-0 text-black/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-mh-black peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:text-mh-black">Email</label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-mh-gold scale-x-0 origin-left transition-transform duration-400 peer-focus:scale-x-100"></div>
              </div>
              
              <div className="relative group">
                <input type="tel" id="phone" placeholder=" " className="w-full bg-transparent border-b border-black/20 py-2 text-mh-black focus:outline-none peer" />
                <label htmlFor="phone" className="absolute top-2 left-0 text-black/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-mh-black peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:text-mh-black">Phone (Optional)</label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-mh-gold scale-x-0 origin-left transition-transform duration-400 peer-focus:scale-x-100"></div>
              </div>
              
              <div className="relative group">
                <textarea id="message" rows="4" placeholder=" " required className="w-full bg-transparent border-b border-black/20 py-2 text-mh-black focus:outline-none peer resize-y min-h-[100px]"></textarea>
                <label htmlFor="message" className="absolute top-2 left-0 text-black/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-mh-black peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:text-mh-black">Message</label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-mh-gold scale-x-0 origin-left transition-transform duration-400 peer-focus:scale-x-100"></div>
              </div>
              
              <Button type="submit" className="self-start mt-4 rounded-none uppercase tracking-[0.2em] text-xs px-10 py-7 bg-mh-black text-mh-white hover:bg-mh-gold transition-colors">Submit Request</Button>
            </form>
          </FadeUp>

          {/* Details Column */}
          <FadeUp delay={4} className="flex flex-col gap-12 bg-mh-off-white p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm uppercase tracking-widest text-mh-gold mb-2 block">Location</span>
              <p className="text-mh-black leading-relaxed whitespace-pre-line">{contact.address}</p>
            </div>

            <div className="relative z-10">
              <span className="text-sm uppercase tracking-widest text-mh-gold mb-2 block">Contact</span>
              <a href={`mailto:${contact.email}`} className="block text-lg text-mh-black hover:text-mh-gold transition-colors mb-1">{contact.email}</a>
              <a href={`tel:${contact.phone}`} className="block text-lg text-mh-black hover:text-mh-gold transition-colors">{contact.phone}</a>
            </div>

            <div className="relative z-10">
              <span className="text-sm uppercase tracking-widest text-mh-gold mb-4 block">Follow</span>
              <div className="flex gap-6">
                <a href={contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-lg text-mh-black hover:text-mh-gold transition-colors">Instagram</a>
                <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-mh-black hover:text-mh-gold transition-colors">LinkedIn</a>
                <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-lg text-mh-black hover:text-mh-gold transition-colors">Twitter</a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Google Maps Embed */}
        <FadeUp delay={6} className="mt-24 max-w-6xl mx-auto overflow-hidden">
          <div className="w-full h-[400px] grayscale-[0.8] contrast-125">
            <iframe 
              src="https://maps.google.com/maps?q=1250%20Avenue%20of%20the%20Americas,%20New%20York&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default ContactUs;
