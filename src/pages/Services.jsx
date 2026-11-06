import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import ApproachSection from '../components/ApproachSection';
import { Check, Sparkles } from 'lucide-react';

const Services = () => {
  const { services } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[80px] min-h-screen bg-mh-white">
      {/* 1. Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-mh-white overflow-hidden -mt-[80px]">
        <div className="absolute inset-0 z-0 bg-mh-black">
          <motion.img 
            src={services.heroImage} 
            alt="MH Design Services" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mh-black/70 via-mh-black/40 to-mh-black/50 pointer-events-none"></div>
        </div>
        <div className="container relative z-10 text-center px-4 mt-20">
          <TextReveal text="Our Services" tag="h1" className="text-4xl md:text-6xl font-serif justify-center" />
          <FadeUp delay={2}>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mt-4 font-light tracking-wide">
              Thoughtfully designed and precisely built — tailored guidance or full turnkey execution.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Services Packages */}
      <section className="py-24 md:py-36 px-4 bg-mh-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {services.packages.map((pkg, index) => {
              const isFeatured = pkg.isPopular;
              return (
                <FadeUp 
                  key={pkg.id || index} 
                  delay={index + 1} 
                  className={`flex flex-col border transition-all duration-500 rounded-sm overflow-hidden group shadow-sm hover:shadow-2xl ${
                    isFeatured 
                      ? 'border-mh-gold/50 bg-mh-black text-mh-white' 
                      : 'border-black/10 bg-mh-off-white text-mh-black hover:border-mh-gold/40'
                  }`}
                >
                  {/* Service Image Header */}
                  <div className="h-[280px] sm:h-[320px] overflow-hidden relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 transition-colors duration-500 ${
                      isFeatured ? 'bg-black/30 group-hover:bg-black/15' : 'bg-black/15 group-hover:bg-transparent'
                    }`}></div>

                    {/* Number Badge Top Left */}
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs uppercase tracking-widest px-3 py-1.5 backdrop-blur-md bg-black/60 text-mh-gold border border-mh-gold/30">
                      {pkg.number}
                    </div>

                    {/* Featured Badge Top Right */}
                    {pkg.badge && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-mh-gold text-mh-black text-[10px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 shadow-lg">
                        <Sparkles size={11} className="text-mh-black" />
                        {pkg.badge}
                      </div>
                    )}
                  </div>

                  {/* Service Details Body */}
                  <div className="p-8 sm:p-10 flex flex-col flex-grow">
                    <div className="mb-6">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-mh-gold font-medium block mb-2">
                        {pkg.subtitle}
                      </span>
                      <h2 className={`text-2xl sm:text-3xl font-serif tracking-tight ${isFeatured ? 'text-white' : 'text-mh-black'}`}>
                        {pkg.title}
                      </h2>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isFeatured ? 'text-white/70' : 'text-mh-black/70'}`}>
                      {pkg.description}
                    </p>

                    <div className={`h-[1px] w-full mb-8 ${isFeatured ? 'bg-white/10' : 'bg-black/10'}`}></div>

                    <h4 className="text-xs uppercase tracking-[0.2em] text-mh-gold mb-6 font-medium">
                      Scope & Inclusions
                    </h4>

                    <ul className="flex flex-col gap-4 flex-grow mb-12">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start gap-3.5 text-sm sm:text-[15px] ${isFeatured ? 'text-white/85' : 'text-mh-black/85'}`}>
                          <Check className="w-4 h-4 text-mh-gold shrink-0 mt-1 stroke-[2.5]" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <MagneticButton className="mt-auto">
                      <Button 
                        className={`w-full rounded-none uppercase tracking-[0.2em] text-xs py-7 transition-all duration-300 font-medium ${
                          isFeatured
                            ? 'bg-mh-gold text-mh-black hover:bg-mh-white hover:text-mh-black shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                            : 'border border-mh-black bg-transparent text-mh-black hover:bg-mh-black hover:text-mh-white'
                        }`} 
                        asChild
                      >
                        <Link to="/contact">Enquire About This Service</Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <ApproachSection />

      {/* 4. CTA */}
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
