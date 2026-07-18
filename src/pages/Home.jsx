import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import ProjectCard from '../components/ProjectCard';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, Home as HomeIcon, ArrowRight } from 'lucide-react';

const processIcons = [Search, PenTool, Hammer, HomeIcon];

const Home = () => {
  const { home, projects } = siteContent;

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
        
        <FadeUp delay={8} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-[60px] bg-white/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.77, 0, 0.175, 1] }}
            />
          </div>
        </FadeUp>
      </section>

      {/* 2. Intro Statement */}
      <section className="py-24 md:py-40 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <TextReveal text={home.intro.text} tag="h2" className="text-2xl md:text-4xl font-serif leading-relaxed justify-center" />
        </div>
      </section>

      {/* 2.5 Featured In Magazine Covers */}
      <section className="py-24 md:py-32 bg-mh-off-white px-4 border-t border-black/10">
        <div className="container mx-auto">
          <FadeUp className="flex flex-col items-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-mh-gold mb-2 block">Press</span>
            <TextReveal text="Featured In" tag="h2" className="text-3xl md:text-5xl font-serif text-center" />
          </FadeUp>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {home.featuredIn.map((mag, i) => (
              <FadeUp key={i} delay={i + 1} className="flex flex-col items-center gap-6 group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden relative">
                   <img src={mag.cover} alt={mag.name} className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105" />
                </div>
                <span className="font-serif text-base md:text-lg tracking-widest uppercase text-center">{mag.name}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="py-24 md:py-32 bg-mh-off-white px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <TextReveal text="Selected Works" tag="h2" className="text-4xl md:text-5xl font-serif" />
            <FadeUp delay={4}>
              <Button variant="outline" className="rounded-none uppercase tracking-[0.2em] text-xs px-8 py-6 hover:bg-mh-black hover:text-mh-white border-mh-black text-mh-black" asChild>
                <Link to="/projects">View All Projects</Link>
              </Button>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.list.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
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
              <Button className="rounded-none uppercase tracking-[0.2em] text-xs px-8 py-6 bg-mh-black text-mh-white hover:bg-mh-gold" asChild>
                <Link to="/about">Know More</Link>
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="py-24 md:py-32 bg-mh-black text-mh-white px-4">
        <div className="container mx-auto">
          <FadeUp>
            <span className="text-sm uppercase tracking-widest text-mh-gold mb-12 block">Our Approach</span>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {home.process.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <FadeUp key={step.id} delay={index * 2} className="border-t border-white/20 pt-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-serif text-4xl text-mh-gold">{step.id}</div>
                    <Icon className="w-8 h-8 text-white/20 stroke-1" />
                  </div>
                  <h3 className="text-xl mb-4">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* 7. Testimonials */}
      <section className="py-24 md:py-32 bg-mh-off-white px-4">
        <div className="container mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-mh-gold block">Client Stories</span>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.testimonials.map((testimonial, index) => (
              <FadeUp key={index} delay={index * 2} className="bg-mh-white p-8 md:p-12 flex flex-col justify-between shadow-sm">
                <p className="font-serif text-xl leading-relaxed mb-8">"{testimonial.quote}"</p>
                <div>
                  <strong className="block font-medium mb-1">{testimonial.name}</strong>
                  <span className="text-sm text-black/60">{testimonial.role}</span>
                </div>
              </FadeUp>
            ))}
          </div>
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

      {/* 9. CTA */}
      <section className="py-24 md:py-32 border-t border-black/10 px-4">
        <div className="container mx-auto flex flex-col items-center text-center gap-8">
          <TextReveal text={home.cta.text} tag="h2" className="text-4xl md:text-6xl font-serif justify-center" />
          <FadeUp delay={4}>
            <Button className="rounded-none uppercase tracking-[0.2em] text-xs px-10 py-7 bg-mh-black text-mh-white hover:bg-mh-gold" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Home;
