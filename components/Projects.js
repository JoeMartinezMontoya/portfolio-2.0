import { motion } from 'framer-motion';
import Data from '../projects.json';
import { FaCode, FaYoutube, FaGamepad, FaEye } from 'react-icons/fa'; // Import des icônes

export default function Projects() {
  const getPatternByProjectName = (name) => {
    switch (name.toLowerCase()) {
      case 'petscare':
        return "url('/patterns/petscare-pattern.png')";
      case 'speye':
        return "url('/patterns/speye-pattern.svg')";
      case 'pixelpathfinder':
        return "url('/patterns/pixelpathfinder-pattern.png')";
      case 'labyrinthe':
        return "url('/patterns/labyrinthe-pattern.png')";
      case 'speye':
        return "url('/patterns/speye-pattern.png')";
      default:
        return 'none';
    }
  };

  const getIconByType = (type) => {
    switch (type) {
      case 'website':
        return <FaCode className='text-indigo-600 text-3xl' />;
      case 'video':
        return <FaYoutube className='text-red-700 text-3xl' />;
      case 'video-game':
        return <FaGamepad className='text-emerald-600 text-3xl' />;
    }
  };

  return (
    <section
      id='projects'
      className='h-screen p-10 bg-gradient-to-t from-gray-900 to-blue-900'>
      <div className='absolute inset-0 bg-grid opacity-20 z-0 pointer-events-none'></div>

      <h2 className='text-3xl text-center dark:text-white mb-20 mt-20 brand-ttf'>
        Mes Projets
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {Data['Projects'].map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            key={project.id}
            className={`p-6 text-white bg-white dark:bg-gray-700 rounded drop-shadow-lg relative group overflow-hidden`}>
            <div
              className='absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500'
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
                <p>{project.description}</p>
                <button className='p-2 mt-2 text-white text-xs bg-gradient-to-tl from-gray-900 to-blue-900 flex flex-row items-center rounded'>
                  <FaEye className='mr-2' /> Voir plus
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
