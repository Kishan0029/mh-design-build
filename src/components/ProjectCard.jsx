import React from 'react';
import { Link } from 'react-router-dom';
import { FadeUp } from './TextReveal';
import { ParallaxImage } from './ParallaxImage';

const ProjectCard = ({ project, index = 0, animated = true }) => {
  const content = (
    <Link to={`/projects/${project.id}`} className="flex flex-col gap-6 block w-full h-full" data-cursor="view">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* We use ParallaxImage here to give a premium scroll effect on each project card */}
        <ParallaxImage 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full absolute inset-0"
        />
        {/* Built by MH Tag */}
        {project.builtByMH && (
          <div className="absolute top-4 right-4 z-20 bg-mh-gold text-mh-black text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
            BUILT BY MH
          </div>
        )}
        {/* Custom Overlay for cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      <div className="flex flex-col">
        <div className="flex justify-between mb-3 text-xs uppercase tracking-[0.1em] text-mh-black/60">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>
        <h3 className="text-2xl font-serif mb-2 transition-colors duration-500">{project.name}</h3>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-sm text-mh-black/80">{project.description}</p>
          </div>
        </div>
        <div className="w-0 h-[1px] bg-mh-gold mt-4 group-hover:w-full transition-[width] duration-700 ease-out"></div>
      </div>
    </Link>
  );

  if (!animated) {
    return <div className="flex flex-col gap-6 cursor-pointer group w-full h-full">{content}</div>;
  }

  return (
    <FadeUp delay={index % 3 + 1} className="flex flex-col gap-6 cursor-pointer group">
      {content}
    </FadeUp>
  );
};

export default ProjectCard;
