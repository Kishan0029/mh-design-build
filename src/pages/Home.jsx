import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import ProjectCard from '../components/ProjectCard';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home as HomeIcon } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Marquee from '../components/Marquee';
import ApproachSection from '../components/ApproachSection';

const Home = () => {
  const { home, projects } = siteContent;

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % home.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [home.testimonials.length]);

  return (
    <div className="bg-mh-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-mh-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={home.hero.videoPlaceholder} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
          <div className="absolute inset-0 bg-mh-black/40"></div>
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl px-4 mt-20">
          <FadeUp delay={0}>
            <span className="text-white/80 text-xs uppercase tracking-widest block mb-4">{home.hero.eyebrow}</span>
          </FadeUp>
          <TextReveal text={home.hero.headline} tag="h1" delay={2} className="text-4xl md:text-6xl lg:text-7xl justify-center font-serif leading-tight" />
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <FadeUp delay={8} className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-center whitespace-nowrap mr-[-0.2em]">Scroll</span>
            <div className="w-[1px] h-[60px] bg-white/30 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-white"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.77, 0, 0.175, 1] }}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="py-24 md:py-40 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <TextReveal text={home.intro.text} tag="h2" className="text-2xl md:text-4xl font-serif leading-relaxed justify-center" />
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="py-24 md:py-32 bg-mh-off-white px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <TextReveal text="Selected Works" tag="h2" className="text-4xl md:text-5xl font-serif" />
            <FadeUp delay={4}>
              <MagneticButton>
                <Button variant="outline" className="rounded-none uppercase tracking-[0.2em] text-xs px-10 py-7 hover:bg-mh-black hover:text-mh-white border-mh-black text-mh-black transition-colors duration-300" asChild>
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </MagneticButton>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.list.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Featured In Magazine Covers */}
      <section className="py-24 md:py-32 bg-mh-off-white px-4 border-t border-black/10">
        <div className="container mx-auto">
          <FadeUp className="flex flex-col items-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-mh-gold mb-2 block">Press</span>
            <TextReveal text="Featured In" tag="h2" className="text-3xl md:text-5xl font-serif text-center" />
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {home.featuredIn.map((mag, i) => {
              const content = (
                <div className="flex flex-col items-center justify-between h-full w-full bg-white p-8 md:p-12 border border-black/5 hover:border-black/10 transition-colors shadow-sm hover:shadow-md">
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full h-24 md:h-28 flex items-center justify-center relative mb-8">
                       <img src={mag.cover} alt={mag.name} className={`${mag.name === "Volume Zero" ? "max-w-[270px]" : "max-w-[400px]"} w-full h-full object-contain transition-all duration-500 group-hover:scale-105 transform ${mag.name === "The Architect's Diary" ? "translate-y-3" : ""}`} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <span className="font-serif text-xl tracking-widest uppercase text-center text-mh-black">{mag.name}</span>
                      {mag.description && (
                        <p className="text-sm text-mh-black/60 text-center leading-relaxed font-sans">
                          {mag.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {mag.link && (
                    <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-mh-gold group-hover:text-mh-black transition-colors font-semibold">
                      Read Feature <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              );

              return (
                <FadeUp key={i} delay={i + 1} className="flex flex-col group cursor-pointer w-full h-full">
                  {mag.link ? (
                    <a href={mag.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full w-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. About Teaser (Using unDraw SVG & Parallax) */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/3] relative">
            <ParallaxImage src={home.aboutTeaser.image} alt="Studio" className="w-full h-full absolute inset-0" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <FadeUp>
              <span className="text-sm uppercase tracking-widest text-mh-gold mb-4 block">The Studio</span>
            </FadeUp>
            <TextReveal text="Crafting Legacy" tag="h2" className="text-4xl md:text-5xl font-serif mb-6" />
            
            {/* Adding unDraw illustration for extra modern flair as requested */}
            <FadeUp delay={2} className="w-16 h-16 mb-8 text-mh-gold/50">
               <HomeIcon className="w-full h-full stroke-1" />
            </FadeUp>

            <FadeUp delay={4}>
              <p className="text-lg text-black/80 mb-8 leading-relaxed">{home.aboutTeaser.text}</p>
              <MagneticButton>
                <Button className="rounded-none uppercase tracking-[0.2em] text-xs px-10 py-7 bg-mh-black text-mh-white hover:bg-mh-gold transition-colors duration-300" asChild>
                  <Link to="/about">Know More</Link>
                </Button>
              </MagneticButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <ApproachSection />

      {/* 6. Stats Strip */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {home.stats.map((stat, index) => (
              <FadeUp key={index} delay={index * 2} className="flex flex-col items-center">
                <div className="font-serif text-5xl md:text-7xl text-mh-gold mb-2">{stat.value}</div>
                <div className="uppercase tracking-widest text-sm text-black/60">{stat.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials (Ultra Minimal Crossfade) */}
      <section className="py-32 md:py-48 bg-mh-off-white overflow-hidden relative border-y border-black/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeUp className="flex justify-center mb-16">
             <span className="text-xs uppercase tracking-[0.2em] text-mh-gold">Client Stories</span>
          </FadeUp>
          
          <div className="relative min-h-[250px] md:min-h-[200px] flex items-center justify-center">
             <AnimatePresence mode="wait">
                <motion.div 
                   key={activeTestimonial}
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -15 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="text-center flex flex-col items-center w-full absolute"
                >
                   <p className="font-serif text-2xl md:text-4xl leading-relaxed md:leading-tight mb-12 text-mh-black">
                     "{home.testimonials[activeTestimonial].quote}"
                   </p>
                   <strong className="block text-sm uppercase tracking-widest mb-2 font-medium">{home.testimonials[activeTestimonial].name}</strong>
                   <span className="text-[10px] text-black/50 uppercase tracking-[0.2em]">{home.testimonials[activeTestimonial].role}</span>
                </motion.div>
             </AnimatePresence>
          </div>

          <FadeUp delay={4} className="flex justify-center items-center gap-8 mt-16 md:mt-24">
             <button 
                onClick={() => setActiveTestimonial(prev => (prev === 0 ? home.testimonials.length - 1 : prev - 1))}
                className="text-[10px] uppercase tracking-[0.2em] text-mh-black/50 hover:text-mh-gold transition-colors"
             >
                Prev
             </button>
             <div className="flex gap-4">
                {home.testimonials.map((_, idx) => (
                   <button 
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === activeTestimonial ? 'bg-mh-gold scale-150' : 'bg-black/15 hover:bg-black/30'}`}
                   />
                ))}
             </div>
             <button 
                onClick={() => setActiveTestimonial(prev => (prev + 1) % home.testimonials.length)}
                className="text-[10px] uppercase tracking-[0.2em] text-mh-black/50 hover:text-mh-gold transition-colors"
             >
                Next
             </button>
          </FadeUp>
        </div>
      </section>

      {/* 8. Social Media Collage (Staggered Columns) */}
      <section className="py-24 md:py-40 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-start">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-4 md:gap-8 mt-12 md:mt-24">
              <FadeUp delay={1} className="relative aspect-[4/5] w-full">
                <ParallaxImage src={home.socialMedia.images[0]} alt="Social 1" className="w-full h-full absolute inset-0" />
              </FadeUp>
            </div>
            
            {/* Col 2 */}
            <div className="flex flex-col gap-4 md:gap-8">
              <FadeUp delay={2} className="relative aspect-[4/3] w-full">
                <ParallaxImage src={home.socialMedia.images[1]} alt="Social 2" className="w-full h-full absolute inset-0" />
              </FadeUp>
              <FadeUp delay={3} className="pt-4 md:pt-12 px-2">
                 <a href={siteContent.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-mh-gold uppercase tracking-[0.2em] text-xs hover:text-mh-black transition-colors">
                    Follow us on Instagram <ArrowRight size={14} />
                 </a>
              </FadeUp>
            </div>
            
            {/* Col 3 */}
            <div className="flex flex-col gap-4 md:gap-8">
              <FadeUp delay={4} className="pb-4 md:pb-12">
                 <h2 className="text-3xl md:text-5xl font-serif whitespace-pre-line leading-tight">{home.socialMedia.title}</h2>
              </FadeUp>
              <FadeUp delay={5} className="relative aspect-square w-full">
                <ParallaxImage src={home.socialMedia.images[2]} alt="Social 3" className="w-full h-full absolute inset-0" />
              </FadeUp>
            </div>
            
            {/* Col 4 */}
            <div className="flex flex-col gap-4 md:gap-8 mt-12 md:mt-32">
              <FadeUp delay={6} className="relative aspect-[4/3] w-full">
                <ParallaxImage src={home.socialMedia.images[3]} alt="Social 4" className="w-full h-full absolute inset-0" />
              </FadeUp>
              <FadeUp delay={7} className="relative aspect-[4/5] w-full">
                <ParallaxImage src={home.socialMedia.images[4]} alt="Social 5" className="w-full h-full absolute inset-0" />
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 Marquee */}
      <Marquee text="MH DESIGN • ARCHITECTURE • INTERIORS • REAL ESTATE • " speed={40} className="border-y border-white/10" />

      {/* 9. CTA */}
      <section className="py-24 md:py-40 bg-mh-white px-4 border-t border-black/10">
        <div className="container mx-auto flex flex-col items-center text-center gap-12">
          <TextReveal text={home.cta.text} tag="h2" className="text-4xl md:text-7xl font-serif justify-center leading-tight" />
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

export default Home;
