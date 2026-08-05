import React, { useState, useEffect } from 'react';
import { siteContent } from '../content';
import ProjectCard from '../components/ProjectCard';
import { TextReveal, FadeUp } from '../components/TextReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const { projects } = siteContent;
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects.list 
    : projects.list.filter(p => p.status === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[80px] min-h-screen bg-mh-white pb-32">
      <div className="container mx-auto px-4">
        <header className="py-16 md:py-24 flex flex-col items-center gap-8 text-center">
          <TextReveal text="Our Projects" tag="h1" className="text-5xl md:text-7xl font-serif justify-center" />
          
          <FadeUp delay={2} className="flex flex-wrap justify-center gap-6 mt-8">
            {projects.categories.map((category, index) => (
              <button 
                key={index}
                className={cn(
                  "text-sm uppercase tracking-widest relative pb-1 transition-colors duration-500",
                  activeCategory === category ? "text-mh-black" : "text-black/50 hover:text-mh-black"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <div className={cn(
                  "absolute bottom-0 left-0 h-[1px] bg-mh-gold transition-all duration-500",
                  activeCategory === category ? "w-full" : "w-0"
                )}></div>
              </button>
            ))}
          </FadeUp>
        </header>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <ProjectCard project={project} index={index} animated={false} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <FadeUp className="flex justify-center mt-24">
          <Button variant="outline" className="rounded-none uppercase tracking-[0.2em] text-xs px-8 py-6 hover:bg-mh-black hover:text-mh-white border-mh-black text-mh-black">
            Load More
          </Button>
        </FadeUp>
      </div>
    </div>
  );
};

export default Projects;
