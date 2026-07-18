import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { siteContent } from '../content';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = siteContent.projects.list.find((p) => p.id === projectId);
  
  // Find next project
  const currentIndex = siteContent.projects.list.findIndex((p) => p.id === projectId);
  const nextProject = siteContent.projects.list[(currentIndex + 1) % siteContent.projects.list.length];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-mh-white pt-24 md:pt-32">
      {/* 1. Hero Section */}
      <section className="px-4 mb-16 md:mb-24">
        <div className="container mx-auto">
          <FadeUp className="mb-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-mh-black/60 hover:text-mh-gold transition-colors">
              <ArrowLeft size={14} /> Back to Projects
            </Link>
          </FadeUp>
          <TextReveal text={project.name} tag="h1" className="text-4xl md:text-7xl font-serif mb-8 md:mb-16" />
          
          <FadeUp delay={2} className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden">
            <ParallaxImage src={project.image} alt={project.name} className="w-full h-full absolute inset-0" />
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
                <span className="text-sm font-medium">{project.location}</span>
              </FadeUp>
              <FadeUp delay={2} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Client</span>
                <span className="text-sm font-medium">{project.client}</span>
              </FadeUp>
              <FadeUp delay={3} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Area</span>
                <span className="text-sm font-medium">{project.area}</span>
              </FadeUp>
              <FadeUp delay={4} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-mh-black/50">Year</span>
                <span className="text-sm font-medium">{project.year}</span>
              </FadeUp>
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
                  <ParallaxImage src={project.imageGallery[0]} alt={`${project.name} Detail 1`} className="w-full h-full absolute inset-0" />
                </FadeUp>
              )}

              {/* Gallery Image 2 & 3 (Side by side staggered) */}
              {project.imageGallery[1] && (
                <FadeUp delay={1} className="md:col-span-6 relative aspect-[4/5] w-full">
                  <ParallaxImage src={project.imageGallery[1]} alt={`${project.name} Detail 2`} className="w-full h-full absolute inset-0" />
                </FadeUp>
              )}
              {project.imageGallery[2] && (
                <FadeUp delay={2} className="md:col-span-5 md:col-start-8 mt-12 md:mt-48 relative aspect-[4/3] w-full">
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
            <FadeUp delay={1} className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer group">
              <video 
                src={project.videos?.[0] || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"} 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover absolute inset-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
            </FadeUp>
            <FadeUp delay={2} className="relative aspect-[9/16] w-full overflow-hidden mt-0 md:mt-32 cursor-pointer group">
              <video 
                src={project.videos?.[1] || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"} 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover absolute inset-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. Next Project */}
      {nextProject && (
        <section className="py-24 md:py-40 bg-mh-black text-mh-white px-4 text-center cursor-pointer group">
          <Link to={`/projects/${nextProject.id}`} className="block container mx-auto">
            <FadeUp>
              <span className="text-xs uppercase tracking-[0.2em] text-mh-white/50 mb-8 block">Next Project</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 group-hover:text-mh-gold transition-colors duration-500">{nextProject.name}</h2>
              <div className="flex items-center justify-center gap-4 text-mh-white/80 group-hover:text-mh-white transition-colors duration-500 uppercase tracking-widest text-sm">
                View Project <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </FadeUp>
          </Link>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
