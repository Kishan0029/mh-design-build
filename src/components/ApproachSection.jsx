import React from 'react';
import { siteContent } from '../content';
import { FadeUp } from './TextReveal';
import { Search, PenTool, Hammer, Home as HomeIcon } from 'lucide-react';

const processIcons = [Search, PenTool, Hammer, HomeIcon];

const ApproachSection = () => {
  const { home } = siteContent;

  return (
    <section className="py-24 md:py-32 bg-mh-black text-mh-white px-4 overflow-hidden">
      <div className="container mx-auto">
        <FadeUp>
          <span className="text-sm uppercase tracking-widest text-mh-gold mb-16 block">Our Approach</span>
        </FadeUp>
        
        <div className="relative">
           {/* Desktop Connecting Line */}
           <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/10" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
             {home.process.map((step, index) => {
               const Icon = processIcons[index];
               return (
                 <FadeUp key={step.id} delay={index * 2} className="relative z-10 group">
                   
                   <div className="flex flex-col mb-6 lg:mb-8">
                      <div className="flex justify-between items-end mb-4 lg:mb-8">
                         <div className="font-serif text-5xl lg:text-6xl text-mh-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {step.id}
                         </div>
                         <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-5 h-5 text-mh-gold stroke-1" />
                         </div>
                      </div>
                      {/* Timeline Node Point (Desktop) */}
                      <div className="hidden lg:block w-3 h-3 rounded-full bg-mh-gold absolute top-[4.2rem] left-0 ring-4 ring-mh-black shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                   </div>
                   
                   <div className="pt-6 lg:pt-0 border-t border-white/10 lg:border-t-0">
                      <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-mh-gold transition-colors duration-300">
                         {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                         {step.description}
                      </p>
                   </div>
                 </FadeUp>
               );
             })}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
