import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { Check, Plus } from 'lucide-react';

const Services = () => {
  const { services } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[80px] min-h-screen bg-mh-white">
      {/* 1. Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-mh-white overflow-hidden -mt-[80px]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={services.heroImage} 
            alt="MH Design Services" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-mh-black/50"></div>
        </div>
        <div className="container relative z-10 text-center px-4 mt-20">
          <TextReveal text="Our Services" tag="h1" className="text-4xl md:text-6xl font-serif justify-center" />
        </div>
      </section>

      {/* 2. Services Packages */}
      <section className="py-24 md:py-32 px-4 bg-mh-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Architecture Package */}
            <FadeUp delay={1} className="flex flex-col border border-black/10 hover:border-mh-gold/50 transition-colors duration-500 bg-mh-off-white group">
              <div className="h-[250px] overflow-hidden relative">
                <img src={services.packages[0].image} alt={services.packages[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif mb-4 text-mh-black">{services.packages[0].title}</h2>
                <p className="text-mh-black/70 mb-8 min-h-[60px] leading-relaxed">
                  {services.packages[0].description}
                </p>
                <div className="h-[1px] w-full bg-black/10 mb-8"></div>
                
                <h4 className="text-xs uppercase tracking-widest text-mh-gold mb-6 font-medium">Includes</h4>
                <ul className="flex flex-col gap-4 flex-grow mb-12">
                  {services.packages[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-mh-black/80">
                      <Check className="w-5 h-5 text-mh-gold shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="mt-auto">
                  <Button className="w-full rounded-none uppercase tracking-[0.2em] text-xs py-7 border border-mh-black bg-transparent text-mh-black hover:bg-mh-black hover:text-mh-white transition-all duration-300" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Interior Package */}
            <FadeUp delay={2} className="flex flex-col border border-black/10 hover:border-mh-gold/50 transition-colors duration-500 bg-mh-off-white group">
              <div className="h-[250px] overflow-hidden relative">
                <img src={services.packages[1].image} alt={services.packages[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif mb-4 text-mh-black">{services.packages[1].title}</h2>
                <p className="text-mh-black/70 mb-8 min-h-[60px] leading-relaxed">
                  {services.packages[1].description}
                </p>
                <div className="h-[1px] w-full bg-black/10 mb-8"></div>
                
                <h4 className="text-xs uppercase tracking-widest text-mh-gold mb-6 font-medium">Includes</h4>
                <ul className="flex flex-col gap-4 flex-grow mb-12">
                  {services.packages[1].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-mh-black/80">
                      <Check className="w-5 h-5 text-mh-gold shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="mt-auto">
                  <Button className="w-full rounded-none uppercase tracking-[0.2em] text-xs py-7 border border-mh-black bg-transparent text-mh-black hover:bg-mh-black hover:text-mh-white transition-all duration-300" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Design & Construction Package */}
            <FadeUp delay={3} className="flex flex-col border border-black/10 hover:border-mh-gold/50 transition-colors duration-500 bg-mh-black text-mh-white group shadow-2xl relative lg:-translate-y-4">
              <div className="absolute top-4 right-4 bg-mh-gold text-mh-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 font-medium z-10 shadow-lg">Most Popular</div>
              <div className="h-[250px] overflow-hidden relative">
                <img src={services.packages[2].image} alt={services.packages[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif mb-4">{services.packages[2].title}</h2>
                <p className="text-white/70 mb-8 min-h-[60px] leading-relaxed">
                  {services.packages[2].description}
                </p>
                <div className="h-[1px] w-full bg-white/10 mb-8"></div>
                
                <h4 className="text-xs uppercase tracking-widest text-mh-gold mb-6 font-medium flex items-center gap-2">
                  <span>Comprehensive Suite</span>
                  <Plus className="w-4 h-4" />
                </h4>
                <ul className="flex flex-col gap-4 flex-grow mb-12">
                  {services.packages[2].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/80">
                      <Check className="w-5 h-5 text-mh-gold shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="mt-auto">
                  <Button className="w-full rounded-none uppercase tracking-[0.2em] text-xs py-7 bg-mh-gold text-mh-black hover:bg-mh-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>
      
      {/* 3. CTA */}
      <section className="py-24 md:py-40 px-4 bg-mh-off-white border-t border-black/10">
        <div className="container mx-auto flex flex-col items-center text-center gap-12">
          <TextReveal text="Ready to build your dream space?" tag="h2" className="text-4xl md:text-5xl font-serif justify-center leading-tight" />
          <FadeUp delay={2}>
            <MagneticButton>
              <Button className="rounded-none uppercase tracking-[0.2em] text-sm px-12 py-8 bg-mh-black text-mh-white hover:bg-mh-gold transition-colors duration-300" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </MagneticButton>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Services;
