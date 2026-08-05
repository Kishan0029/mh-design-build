import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Find project by ID (convert both to strings to support URL slugs like 'villa-79')
  const project = siteContent.projects.list.find((p) => String(p.id) === String(id));
  
  // Find next project
  const currentIndex = siteContent.projects.list.findIndex((p) => String(p.id) === String(id));
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

      {/* 3.5 Video Gallery (2 Vertical Videos) */}
      <section className="py-24 md:py-32 px-4 bg-mh-white border-t border-black/10">
        <div className="container mx-auto max-w-5xl">
          <FadeUp>
            <h3 className="text-2xl md:text-4xl font-serif mb-16 text-center">Video Tour</h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <FadeUp delay={1} className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer group bg-mh-black/5 rounded-sm" data-cursor="play">
              <video 
                src={project.videos?.[0] || "https://www.w3schools.com/html/mov_bbb.mp4"} 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover absolute inset-0 filter grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                 <div className="w-20 h-20 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center bg-black/10">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
              </div>
            </FadeUp>
            <FadeUp delay={2} className="relative aspect-[9/16] w-full overflow-hidden mt-0 md:mt-32 cursor-pointer group bg-mh-black/5 rounded-sm" data-cursor="play">
              <video 
                src={project.videos?.[1] || "https://www.w3schools.com/html/mov_bbb.mp4"} 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover absolute inset-0 filter grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                 <div className="w-20 h-20 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center bg-black/10">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

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
