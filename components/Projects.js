'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Data from '../projects.json';
import {
  FaCode,
  FaYoutube,
  FaGamepad,
  FaEye,
  FaTimes,
  FaPauseCircle,
  FaPlayCircle,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const getPatternByProjectName = (name) => {
    switch (name.toLowerCase()) {
      case 'petscare':
        return "url('/images/petscare-pattern.png')";
      case 'pixelpathfinder':
        return "url('/images/pixelpathfinder-pattern.png')";
      case 'labyrinthe':
        return "url('/images/labyrinthe-pattern.png')";
      case 'speye':
        return "url('/images/speye-pattern.png')";
      case 'des ombres au plafond':
        return "url('/images/DesOmbresAuPlafond.jpg')";
      case "le prix de l'attention":
        return "url('/images/LePrixDeLAttention.jpg')";
      case 'z.a. (wt)':
        return "url('/images/za.jpg')";
      case 'city scout':
        return "url('/images/cityscout.jpg')";
      case 'agora (wt)':
        return "url('/images/agora.jpg')";
      case 'parchemin (wt)':
        return "url('/images/parchemin.png')";
      default:
        return 'none';
    }
  };

  const getIconByType = (type) => {
    switch (type) {
      case 'website':
        return <FaCode className='text-blue-900 text-3xl' />;
      case 'video':
        return <FaYoutube className='text-red-700 text-3xl' />;
      case 'video-game':
        return <FaGamepad className='text-emerald-600 text-3xl' />;
      default:
        return null;
    }
  };

  const getProjectStatus = (status) => {
    switch (status.toLowerCase()) {
      case 'en cours':
        return (
          <span className='px-3 py-1 w-28 bg-blue-900 text-white text-sm flex flex-row items-center justify-center rounded'>
            <FaPlayCircle className='mr-2' /> En cours
          </span>
        );
      case 'en attente':
        return (
          <span className='px-3 py-1 w-28 bg-orange-500 text-white text-sm flex flex-row items-center justify-center rounded'>
            <FaPauseCircle className='mr-2' /> En attente
          </span>
        );
      case 'en ligne':
        return (
          <span className='px-3 py-1 w-28 bg-green-500 text-white text-sm flex flex-row items-center justify-center rounded'>
            <FaCheckCircle className='mr-2' /> En ligne
          </span>
        );
      default:
        return null;
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (window.innerWidth < 768 && container) {
      container.style.overflowY = 'auto';
      container.style.maxHeight = '70vh';
    }
  }, []);

  return (
    <section
      id='projects'
      className='h-screen p-10 bg-gradient-to-bl from-gray-500 to-gray-50 dark:from-gray-950 dark:to-blue-950 text-slate-800 dark:text-slate-200'>
      <div className='absolute inset-0 bg-grid opacity-20 z-0 pointer-events-none'></div>

      <h2 className='text-3xl text-center my-10 text-opacity-100 brand-ttf'>
        Mes Projets
      </h2>

      <div
        className='grid grid-cols-1 pb-20 md:grid-cols-2 gap-6 md:h-auto md:overflow-visible'
        ref={scrollContainerRef}>
        {Data['Projects'].map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            key={project.id}
            className={`p-6 bg-gray-400 dark:bg-gray-800 rounded drop-shadow-lg relative group overflow-hidden`}>
            <div
              className='absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000'
              style={{
                backgroundImage: getPatternByProjectName(project.name),
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: 'white',
              }}></div>

            <div className='flex flex-row items-center relative z-10'>
              <div className='mr-8'>{getIconByType(project.type)}</div>
              <div className='w-full'>
                <h3 className='brand-ttf'>{project.name}</h3>
                <p className='text-sm'>{project.description}</p>
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className='p-2 mt-2 text-white text-xs bg-blue-900 flex flex-row items-center rounded cursor-pointer'>
                  <FaEye className='mr-2' /> Voir plus
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className='bg-gray-400 dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full relative'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}>
              <button
                onClick={() => setSelectedProject(null)}
                className='absolute top-4 right-4 bg-red-600 rounded-full p-2 hover:bg-red-800 transition'>
                <FaTimes />
              </button>

              <h3 className='text-2xl mb-4 brand-ttf'>
                {selectedProject.name}
              </h3>
              <h2 className='my-2 text-'>
                {getProjectStatus(selectedProject.status)}
              </h2>
              <p className='mb-4 text-sm'>{selectedProject.fullDescription}</p>

              {/* Carrousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className='relative'>
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} image`}
                    className='rounded-lg w-full h-96 object-cover'
                  />
                  <button
                    onClick={handlePrevImage}
                    className='absolute left-0 w-auto top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900'>
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className='absolute right-0 w-auto top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900'>
                    <FaArrowRight />
                  </button>
                </div>
              )}

              {/* Badges */}
              <div className='mt-4 flex flex-wrap gap-2'>
                {selectedProject.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-blue-900 text-white text-sm rounded-full'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
