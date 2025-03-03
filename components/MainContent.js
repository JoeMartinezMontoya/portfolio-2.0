'use client';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Activities from './Activities';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

export default function MainContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    document.documentElement.className = '';
    document.documentElement.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
  };

  const sections = {
    hero: <Hero />,
    activities: <Activities />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className='w-screen h-screen'>
      <nav className='fixed top-0 left-0 w-full text-slate-800 dark:text-slate-200 flex justify-center space-x-8 py-4 bg-transparent z-10 brand-ttf'>
        <button
          onClick={() => setActiveSection('hero')}
          className='hover:translate-y-1 duration-500'>
          Accueil
        </button>
        <button
          onClick={() => setActiveSection('activities')}
          className='hover:translate-y-1 duration-500'>
          Activités
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className='hover:translate-y-1 duration-500'>
          Projets
        </button>
        <button
          onClick={() => setActiveSection('contact')}
          className='hover:translate-y-1 duration-500'>
          Contact
        </button>
      </nav>

      <button
        onClick={toggleTheme}
        className='fixed top-5 right-5 bg-gray-300 dark:bg-gray-900 p-2 rounded-full z-20'>
        {theme === 'dark' ? (
          <FaMoon className='text-amber-200' />
        ) : (
          <FaSun className='text-amber-200' />
        )}
      </button>

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
