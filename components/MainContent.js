'use client';
import { useState } from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Activities from './Activities';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainContent() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = {
    hero: <Hero />,
    projects: <Projects />,
    activities: <Activities />,
    contact: <Contact />,
  };

  return (
    <div className='w-screen h-screen'>
      <nav className='fixed top-0 left-0 w-full text-white flex justify-center space-x-8 py-4 bg-transparent z-10 brand-ttf'>
        <button
          onClick={() => setActiveSection('hero')}
          className='hover:underline'>
          Accueil
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className='hover:underline'>
          Projets
        </button>
        <button
          onClick={() => setActiveSection('activities')}
          className='hover:underline'>
          Activités
        </button>{' '}
        {/* Nouveau bouton */}
        <button
          onClick={() => setActiveSection('contact')}
          className='hover:underline'>
          Contact
        </button>
      </nav>

      <div className='w-full h-full flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='w-full h-full'>
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
