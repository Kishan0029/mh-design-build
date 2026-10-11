import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Sparkles, ExternalLink } from 'lucide-react';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Find project by ID (convert both to strings to support URL slugs like 'villa-79')
  const project = siteContent.projects.list.find((p) => 
    String(p.id) === String(id) || 
    (String(id) === 'shs-clinic' && p.id === 'skin-and-hair-solutions') ||
    (String(id) === 'the-grove' && p.id === 'the-grove-apartments')
  );
  
  // Find next project
  const currentIndex = siteContent.projects.list.findIndex((p) => p === project);
  const nextProject = siteContent.projects.list[(currentIndex + 1) % siteContent.projects.list.length];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-mh-white">
        <h1 className="text-2xl font-serif">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mh-white">
      
      {/* 1. Full-Screen Parallax Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-mh-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src={project.image} alt={project.name} className="w-full h-full absolute inset-0" hideWatermark={true} disableParallax={true} />
          <div className="absolute inset-0 bg-mh-black/40"></div>
        </div>
        
        <div className="container relative z-10 text-center max-w-5xl px-4 mt-20">
          <FadeUp delay={0}>
            <span className="text-white/80 text-xs uppercase tracking-widest block mb-6">
              <Link to="/projects" className="inline-flex items-center gap-2 hover:text-mh-gold transition-colors">
                <ArrowLeft size={14} /> Back to Projects
              </Link>
            </span>
          </FadeUp>
          <TextReveal text={project.name} tag="h1" delay={2} className="text-5xl md:text-8xl font-serif leading-tight justify-center" />
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <FadeUp delay={6} className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-center whitespace-nowrap mr-[-0.2em]">Scroll to Explore</span>
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

      {/* 2. Metadata & Description */}
      <section className="py-12 md:py-24 px-4 bg-mh-off-white border-y border-black/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Metadata Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
              <FadeUp delay={1} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Location</span>
                {project.mapsLink ? (
                  <a href={project.mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-mh-gold transition-colors underline decoration-1 underline-offset-4">{project.location}</a>
                ) : (
                  <span className="text-sm font-medium">{project.location}</span>
                )}
              </FadeUp>
              <FadeUp delay={2} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Type</span>
                <span className="text-sm font-medium">{project.category}</span>
              </FadeUp>
              <FadeUp delay={3} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Area</span>
                <span className="text-sm font-medium">{project.area}</span>
              </FadeUp>
              {(project.status || project.year) && (
                <FadeUp delay={4} className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">{project.status ? "Status" : "Year"}</span>
                  <span className="text-sm font-medium">{project.status || project.year}</span>
                </FadeUp>
              )}
              {project.scope && (
                <FadeUp delay={5} className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Scope</span>
                  <span className="text-sm font-medium">{project.scope}</span>
                </FadeUp>
              )}
              {project.builtByMH && (
                <FadeUp delay={6} className="flex flex-col gap-2 col-span-2 mt-4 md:mt-0 md:col-span-1">
                  <div className="inline-flex items-center justify-center gap-2 bg-mh-black text-mh-gold text-[10px] font-medium uppercase tracking-[0.25em] px-4 py-2.5 rounded-sm w-fit border border-mh-gold/40 shadow-sm relative overflow-hidden group/badge cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <Sparkles size={12} className="text-mh-gold" strokeWidth={2.5} />
                    Built by MH
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Description */}
            <div className="lg:col-span-7 lg:col-start-6">
              <FadeUp delay={3}>
                <h3 className="text-2xl md:text-4xl font-serif mb-8 leading-snug">The Vision</h3>
                <p className="text-base md:text-lg text-mh-black/80 leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Image Gallery */}
      {project.imageGallery && project.imageGallery.length > 0 && (
        <section className="py-24 md:py-32 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Gallery Image 1 (Full width mostly) */}
              {project.imageGallery[0] && (
                <FadeUp className="md:col-span-10 md:col-start-2 relative aspect-[16/9] w-full mb-12 md:mb-24">
                  <ParallaxImage src={project.imageGallery[0]} alt={`${project.name} Detail 1`} className="w-full h-full absolute inset-0" disableParallax={true} />
                </FadeUp>
              )}

              {/* Gallery Image 2 & 3 (Side by side staggered) */}
              {project.imageGallery[1] && (
                <FadeUp delay={1} className="md:col-span-6 relative aspect-[4/5] w-full">
                  <ParallaxImage src={project.imageGallery[1]} alt={`${project.name} Detail 2`} className="w-full h-full absolute inset-0" />
                </FadeUp>
              )}
              {project.imageGallery[2] && (
                <FadeUp delay={2} className="md:col-span-5 md:col-start-8 mt-12 md:mt-48 relative aspect-[3/4] w-full">
                  <ParallaxImage src={project.imageGallery[2]} alt={`${project.name} Detail 3`} className="w-full h-full absolute inset-0" />
                </FadeUp>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 3.5 Project Media & Instagram Reels (Matching Reference Design) */}
      {((project.media && project.media.length > 0) || (project.videos && project.videos.length > 0)) && (
        <section className="py-24 md:py-36 px-4 bg-mh-white border-t border-black/10 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            {/* Header with Title and Follow link */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <FadeUp>
                <span className="text-xs uppercase tracking-[0.25em] text-mh-gold mb-3 block font-medium">Reels & Media</span>
                <h2 className="text-4xl md:text-6xl font-serif text-mh-black leading-tight">Media</h2>
              </FadeUp>
              <FadeUp delay={2}>
                <a 
                  href={siteContent.contact.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-mh-gold hover:text-mh-black transition-colors font-medium group cursor-pointer"
                >
                  Follow us on Instagram <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </FadeUp>
            </div>

            {/* Media Grid */}
            <div className={cn(
              "grid gap-8 items-start",
              project.media?.length === 1 && !project.published && "grid-cols-1 max-w-md mx-auto",
              project.media?.length === 1 && project.published && "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto",
              project.media?.length === 2 && "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto",
              project.media?.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            )}>
              {project.media?.map((item, mIdx) => (
                <FadeUp 
                  key={mIdx} 
                  delay={mIdx + 1}
                  className={cn(
                    "flex flex-col gap-4",
                    project.media.length === 2 && mIdx === 1 ? "md:mt-16" : "",
                    project.media.length >= 3 && (mIdx % 2 === 1) ? "md:mt-12" : ""
                  )}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[9/16] w-full overflow-hidden rounded-sm bg-mh-black/5 block shadow-sm border border-black/5"
                    aria-label={item.title || "Watch Reel on Instagram"}
                  >
                    {/* Thumbnail Image */}
                    <img 
                      src={item.thumbnail} 
                      alt={item.title || `${project.name} Media`} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/90 transition-colors duration-500" />

                    {/* Instagram badge top right */}
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-black/60 transition-all">
                      <InstagramIcon className="w-4 h-4 text-white" />
                    </div>

                    {/* Play button in center */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/40">
                        <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Bottom Label / Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-mh-gold font-medium">
                        {item.type === 'reel' ? 'Instagram Reel' : 'Instagram Post'}
                      </span>
                      <h4 className="text-base font-serif font-medium leading-snug text-white/95 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-xs text-white/70 line-clamp-1">{item.subtitle}</p>
                      )}
                    </div>
                  </a>
                </FadeUp>
              ))}

              {/* If it's MH Design Studio and has a publication, show Volume Zero card */}
              {project.published && (
                <FadeUp delay={3} className="flex flex-col gap-4 md:mt-16">
                  <a
                    href={project.published.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[9/16] w-full overflow-hidden rounded-sm bg-white text-mh-black p-8 md:p-10 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-xl border border-black/10 transition-all duration-500 block"
                  >
                    {/* Top Tag & External Link */}
                    <div className="w-full flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-mh-gold font-medium border border-mh-gold/40 px-3 py-1 bg-white">
                        Featured Press
                      </span>
                      <ExternalLink size={16} className="text-black/40 group-hover:text-mh-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>

                    {/* Centered Logo & Details */}
                    <div className="w-full flex flex-col items-center my-auto py-4">
                      {project.published.logo && (
                        <div className="w-full max-h-24 md:max-h-28 flex items-center justify-center mb-6">
                          <img 
                            src={project.published.logo} 
                            alt={project.published.source} 
                            className="max-w-[220px] max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                          />
                        </div>
                      )}
                      <h4 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-mh-black mb-4 group-hover:text-mh-gold transition-colors">
                        {project.published.source}
                      </h4>
                      {project.published.description && (
                        <p className="text-xs md:text-sm text-mh-black/70 leading-relaxed font-sans max-w-xs">
                          {project.published.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Action */}
                    <div className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-mh-gold group-hover:text-mh-black transition-colors font-semibold pt-4 border-t border-black/5">
                      Read Feature <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </FadeUp>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. Full Gallery Grid */}
      {project.imageGallery && project.imageGallery.length > 3 && (
        <section className="py-24 md:py-32 px-4 bg-mh-off-white">
          <div className="container mx-auto">
            <FadeUp>
              <h3 className="text-2xl md:text-4xl font-serif mb-16 text-center">Gallery</h3>
            </FadeUp>
            <div className="columns-1 md:columns-2 gap-8">
              {project.imageGallery.slice(3).map((img, index) => (
                <FadeUp key={`gallery-${index}`} delay={(index % 2) + 1} className="w-full break-inside-avoid mb-8">
                  <ParallaxImage src={img} alt={`${project.name} Gallery ${index + 4}`} className="w-full h-auto" />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Massive Next Project Footer */}
      {nextProject && (
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-mh-white cursor-pointer group" data-cursor="view">
          <Link to={`/projects/${nextProject.id}`} className="absolute inset-0 z-10 w-full h-full block">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <ParallaxImage src={nextProject.image} alt={nextProject.name} className="w-full h-full absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
               <div className="absolute inset-0 bg-mh-black/60 group-hover:bg-mh-black/40 transition-colors duration-700"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <FadeUp>
                <span className="text-xs uppercase tracking-[0.2em] text-mh-white/70 mb-6 block">Next Project</span>
                <h2 className="text-5xl md:text-8xl font-serif mb-8">{nextProject.name}</h2>
                <div className="flex items-center justify-center gap-4 text-mh-white uppercase tracking-widest text-sm">
                  Explore <ArrowRight size={16} className="transform group-hover:translate-x-3 transition-transform duration-500" />
                </div>
              </FadeUp>
            </div>
          </Link>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
