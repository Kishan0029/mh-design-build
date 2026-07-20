import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import ApproachSection from '../components/ApproachSection';

const About = () => {
  const { about, home } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[80px] min-h-screen bg-mh-white">
      {/* 1. Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-mh-white overflow-hidden -mt-[80px]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={about.heroImage} 
            alt="About MH Design" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-mh-black/40"></div>
        </div>
        <div className="container relative z-10 text-center px-4 mt-20">
          <TextReveal text="About Us" tag="h1" className="text-4xl md:text-6xl font-serif justify-center" />
        </div>
      </section>

      {/* 2. Story */}
      <section className="py-24 md:py-40 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <span className="text-sm uppercase tracking-widest text-mh-gold mb-8 block">Our Story</span>
          </FadeUp>
          <TextReveal text={about.story} tag="h2" className="text-2xl md:text-4xl font-serif leading-relaxed justify-center" delay={2} />
        </div>
      </section>

      {/* 2.5 Founder Section */}
      <section className="py-24 md:py-32 px-4 border-t border-black/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-5/12">
              <FadeUp delay={1} className="relative aspect-[3/4] w-full overflow-hidden">
                <ParallaxImage src={about.founder.image} alt={about.founder.name} className="w-full h-full absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500" />
              </FadeUp>
            </div>
            <div className="w-full md:w-7/12 flex flex-col items-start">
              <FadeUp delay={2}>
                <span className="text-sm uppercase tracking-[0.2em] text-mh-gold mb-6 block">The Founder</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-4">{about.founder.name}</h2>
                <span className="text-sm uppercase tracking-widest text-mh-black/50 mb-8 block">{about.founder.role}</span>
                <p className="text-lg text-mh-black/80 leading-relaxed whitespace-pre-line">
                  {about.founder.bio}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 2.75 Leadership Section */}
      <section className="py-24 md:py-32 px-4 border-t border-black/10">
        <div className="container mx-auto">
          <FadeUp>
            <span className="text-sm uppercase tracking-widest text-mh-gold mb-12 block">Leadership</span>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.team.map((member, index) => (
              <FadeUp key={index} delay={index * 2} className="flex flex-col group cursor-pointer" data-cursor="view">
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6">
                  <ParallaxImage 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                  />
                  {/* Subtle overlay for better text contrast if we had any, but here just for premium feel */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <span className="text-xs uppercase tracking-widest text-mh-black/60">{member.role}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>



      {/* 4. Process */}
      <ApproachSection />


      {/* 5. CTA */}
      <section className="py-24 md:py-40 px-4 bg-mh-white">
        <div className="container mx-auto flex flex-col items-center text-center gap-12">
          <TextReveal text="Start a Conversation" tag="h2" className="text-4xl md:text-6xl font-serif justify-center leading-tight" />
          <FadeUp delay={4}>
            <MagneticButton>
              <Button className="rounded-none uppercase tracking-[0.2em] text-sm px-12 py-8 bg-mh-black text-mh-white hover:bg-mh-gold transition-colors duration-300" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </MagneticButton>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default About;
