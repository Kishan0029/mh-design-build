import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeUp, TextReveal } from './TextReveal';

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeUp delay={index * 0.1} className="border-b border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-xl md:text-2xl text-mh-black pr-8 group-hover:text-mh-gold transition-colors">
          {question}
        </span>
        <span className="text-mh-gold flex-shrink-0 transition-transform duration-300">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-black/70 text-base md:text-lg leading-relaxed max-w-3xl font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeUp>
  );
};

const FaqSection = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 md:py-32 px-4 bg-mh-off-white border-t border-black/10">
      <div className="container mx-auto max-w-4xl">
        <FadeUp className="flex flex-col items-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-mh-gold mb-2 block text-center">Inquiries</span>
          <TextReveal text="Frequently Asked Questions" tag="h2" className="text-3xl md:text-5xl font-serif text-center justify-center" />
        </FadeUp>
        
        <div className="flex flex-col border-t border-black/10">
          {faqs.map((faq, index) => (
            <FaqItem key={index} index={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
