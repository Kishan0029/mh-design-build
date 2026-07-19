import React, { useEffect } from 'react';
import { TextReveal, FadeUp } from '../components/TextReveal';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[120px] pb-24 min-h-screen bg-mh-white px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeUp>
          <span className="text-sm uppercase tracking-widest text-mh-gold mb-8 block">Legal</span>
        </FadeUp>
        <TextReveal text="Terms of Service" tag="h1" className="text-4xl md:text-6xl font-serif mb-16" />
        
        <FadeUp delay={1} className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-mh-gold">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use MH Design if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise stated, MH Design and/or its licensors own the intellectual property rights for all material on MH Design. All intellectual property rights are reserved. You may access this from MH Design for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
          <h2>3. User Responsibilities</h2>
          <p>You must not:</p>
          <ul>
            <li>Republish material from MH Design</li>
            <li>Sell, rent or sub-license material from MH Design</li>
            <li>Reproduce, duplicate or copy material from MH Design</li>
            <li>Redistribute content from MH Design</li>
          </ul>

          <h2>4. Limitation of Liability</h2>
          <p>In no event shall MH Design, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. MH Design, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
          
          <h2>5. Changes to Terms</h2>
          <p>We reserve the right to revise these terms at any time as we see fit, and by using this Website you are expected to review these terms on a regular basis.</p>
        </FadeUp>
      </div>
    </div>
  );
};

export default Terms;
