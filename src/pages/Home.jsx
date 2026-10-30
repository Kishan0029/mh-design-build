import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content';
import ProjectCard from '../components/ProjectCard';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Marquee from '../components/Marquee';
import ApproachSection from '../components/ApproachSection';
import FaqSection from '../components/FaqSection';

// Refined Instagram Card Component
const InstagramCard = ({ post, index }) => {
  const isReel = post.type === 'reel' || post.url.includes('/reel/');
  const img = post.image || (Array.isArray(post.images) ? post.images[0] : post.images);

  return (
    <FadeUp delay={index + 1} className="flex flex-col">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-mh-black/5 block shadow-sm border border-black/10 transition-all duration-500 hover:shadow-xl hover:border-mh-gold/40"
        aria-label={post.title || "View on Instagram"}
      >
        {/* Post Image */}
        <img
          src={img}
          alt={post.title || "Instagram Post"}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

        {/* Instagram Icon Badge top right */}
        <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-sm group-hover:bg-mh-gold group-hover:text-mh-black group-hover:border-mh-gold transition-all duration-300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>

        {/* Center Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
            {isReel ? (
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            ) : (
              <ArrowRight size={18} className="text-white" />
            )}
          </div>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-0 inset-x-0 p-4 z-10 text-white flex flex-col gap-0.5">
          <span className="text-[9px] uppercase tracking-[0.25em] text-mh-gold font-medium">
            {isReel ? 'Instagram Reel' : 'Instagram Post'}
          </span>
          {post.title && (
            <h4 className="text-xs font-serif font-medium text-white/95 group-hover:text-white line-clamp-1">
              {post.title}
            </h4>
          )}
          <span className="text-[10px] text-white/60 tracking-wider group-hover:text-white transition-colors mt-1">
            View on Instagram &rarr;
          </span>
        </div>
      </a>
    </FadeUp>
  );
};

const Home = () => {
  const { home, projects } = siteContent;

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Slideshow for hero
  const slides = home.hero.slideshow && home.hero.slideshow.length > 0
    ? home.hero.slideshow
    : [{ image: home.hero.videoPlaceholder, title: "MH Design Build" }];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-play for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % home.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [home.testimonials.length]);

  return (
    <div className="bg-mh-white min-h-screen">
      {/* 1. Hero Section - Horizontal Architectural Showcase Slideshow */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-mh-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-mh-black">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: { duration: 7, ease: "easeOut" }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title || "MH Design Build Hero"}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-mh-black/85 via-mh-black/45 to-mh-black/60 pointer-events-none"></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl px-4 mt-20">
          <FadeUp delay={0}>
            <span className="text-white/80 text-xs uppercase tracking-widest block mb-4">{home.hero.eyebrow}</span>
          </FadeUp>
          <TextReveal text={home.hero.headline} tag="h1" delay={2} className="text-4xl md:text-6xl lg:text-7xl justify-center font-serif leading-tight" />
        </div>

        {/* Center Scroll Indicator */}
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

      {/* 5. Our Process */}
      <ApproachSection />

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

      {/* 8. Creative Staggered Social Media Collage */}
      <section className="py-24 md:py-40 px-4 bg-mh-white border-t border-black/10 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-start">
            
            {/* Col 1 - Offset Down */}
            <div className="flex flex-col gap-6 mt-10 sm:mt-16 lg:mt-32">
              <InstagramCard post={home.socialMedia.posts[0]} index={0} />
            </div>

            {/* Col 2 - High */}
            <div className="flex flex-col gap-6 mt-0">
              <InstagramCard post={home.socialMedia.posts[1]} index={1} />
              <FadeUp delay={3} className="pt-2 px-1 hidden sm:block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-mh-gold font-medium block">
                  On-Site & Studio
                </span>
                <p className="text-xs text-mh-black/60 mt-1 leading-relaxed font-sans">
                  Behind the scenes, site milestones and spatial detailing.
                </p>
              </FadeUp>
            </div>

            {/* Col 3 - Centerpiece with Artistic Title & Post */}
            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 mt-2 sm:mt-0 lg:-mt-4">
              <FadeUp delay={1} className="pb-3 md:pb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-mh-gold mb-2 block font-medium">
                  Instagram
                </span>
                <h2 className="text-3xl md:text-5xl font-serif whitespace-pre-line leading-tight text-mh-black">
                  {home.socialMedia.title}
                </h2>
              </FadeUp>
              <InstagramCard post={home.socialMedia.posts[2]} index={2} />
            </div>

            {/* Col 4 - Mid Offset with Follow Link */}
            <div className="flex flex-col gap-6 mt-4 sm:mt-8 lg:mt-16">
              <InstagramCard post={home.socialMedia.posts[3]} index={3} />
              <FadeUp delay={5} className="pt-2 px-1">
                <a
                  href={siteContent.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-mh-gold uppercase tracking-[0.2em] text-xs hover:text-mh-black transition-colors font-medium group cursor-pointer"
                >
                  @mhdesignbuild.in <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </FadeUp>
            </div>

            {/* Col 5 - Dramatic Low Offset */}
            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 mt-6 sm:mt-12 lg:mt-36">
              <InstagramCard post={home.socialMedia.posts[4]} index={4} />
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 FAQ Section */}
      <FaqSection faqs={home.faqs} />

      {/* 8.6 Marquee */}
      <Marquee text="ARCHITECTURE • INTERIOR • DESIGN • CONSTRUCTION • " speed={40} className="border-y border-white/10" />

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
