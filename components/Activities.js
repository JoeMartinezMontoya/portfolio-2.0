import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('dev');

  const renderContent = () => {
    if (activeTab === 'dev') {
      return (
        <div>
          <h3 className='text-xl font-semibold mb-4'>
            Projets de Développement
          </h3>
          <p>
            Présentation de projets de développement, technologies utilisées,
            etc.
          </p>
        </div>
      );
    } else if (activeTab === 'content') {
      return (
        <div>
          <h3 className='text-xl font-semibold mb-4'>Créations de Contenu</h3>
          <p>Vidéos, articles, designs, etc.</p>
        </div>
      );
    }
  };

  return (
    <section className='h-screen p-10 bg-gradient-to-b from-gray-950 to-cyan-950 relative'>
      <motion.div
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className='absolute inset-0 bg-carbon opacity-20 z-0 pointer-events-none'
      />

      <h2 className='text-3xl text-center text-white mb-20 mt-20 brand-ttf'>
        Mes Activités
      </h2>

      <div className='flex justify-center space-x-8 mb-8'>
        <button
          onClick={() => setActiveTab('dev')}
          className={`px-4 py-2 rounded ${
            activeTab === 'dev'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-black'
          }`}>
          Développement
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 rounded ${
            activeTab === 'content'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-black'
          }`}>
          Créations de contenu
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='text-white text-center'>
        {renderContent()}
      </motion.div>
    </section>
  );
}
