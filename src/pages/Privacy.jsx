import React, { useEffect } from 'react';
import { TextReveal, FadeUp } from '../components/TextReveal';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[120px] pb-24 min-h-screen bg-mh-white px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeUp>
          <span className="text-sm uppercase tracking-widest text-mh-gold mb-8 block">Legal</span>
        </FadeUp>
        <TextReveal text="Privacy Policy" tag="h1" className="text-4xl md:text-6xl font-serif mb-16" />
        
        <FadeUp delay={1} className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-mh-gold">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2>1. Introduction</h2>
          <p>At MH Design, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number.</p>
          
          <h2>3. How We Use Collected Information</h2>
          <p>MH Design may collect and use Users' personal information for the following purposes:</p>
          <ul>
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To send periodic emails regarding their inquiry or our services</li>
          </ul>

          <h2>4. Protecting Your Information</h2>
          <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
          
          <h2>5. Contacting Us</h2>
          <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.</p>
        </FadeUp>
      </div>
    </div>
  );
};

export default Privacy;
