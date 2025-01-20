'use client';

import { useEffect, useState } from 'react';
import ActivitiesContent from './ActivitiesContent';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getLatestVideo } from './youtubeApi';

export default function ActivitiesSection() {
  const [activeSection, setActiveSection] = useState('developpement');
  const [activeDevCategory, setActiveDevCategory] = useState('frontend');
  const [latestVideo, setLatestVideo] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const data = await getLatestVideo();
        setLatestVideo(data);
      } catch (error) {
        console.error('Failed to fetch latest video:', error);
      }
    }
    fetchVideo();
  }, []);

  return (
    <section className='h-screen p-10 bg-gradient-to-b rom-gray-500 to-gray-50 dark:from-gray-950 dark:to-blue-950 text-slate-800 dark:text-slate-200 relative'>
      <motion.div
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className='absolute inset-0 bg-carbon opacity-20 z-0 pointer-events-none'
      />

      <h2 className='text-3xl text-center mt-10 mb-5 brand-ttf'>
        Mes Activités
      </h2>

      <div className='max-h-[100vh] md:max-h-[85vh] overflow-y-auto overflow-x-hidden scroll-container'>
        <div className='flex justify-center space-x-8 mb-8'>
          <button
            onClick={() => setActiveSection('developpement')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'developpement'
                ? 'bg-blue-800'
                : 'bg-transparent'
            }`}>
            <Image
              src='/images/joe-pp.png'
              width={80}
              height={80}
              alt='Développement'
              className='rounded-full'
            />
          </button>

          <button
            onClick={() => setActiveSection('creation')}
            className={`px-4 py-2 rounded-full ${
              activeSection === 'creation' ? 'bg-red-800' : 'bg-transparent'
            }`}>
            <Image
              src='/images/seik-pp.png'
              width={80}
              height={80}
              alt='Création de contenu'
              className='rounded-full scale-x-[-1]'
            />
          </button>
        </div>

        <AnimatePresence mode='wait'>
          {activeSection === 'developpement' && (
            <motion.div
              key='developpement'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}>
              <h2 className='text-xl font-semibold mb-4 brand-ttf'>
                Développement
              </h2>
              <p>
                Développeur passionné et autodidacte, j&apos;ai acquis une
                solide expérience en travaillant sur divers projets personnels
                et collaboratifs.
              </p>
              <p>
                J&apos;aime relever des défis techniques et explorer des
                concepts innovants. Mes réalisations couvrent des domaines
                variés, allant de plateformes interactives à des microservices
                bien structurés.
              </p>
              <p>
                Toujours en quête d&apos;apprentissage, je m&apos;efforce de
                perfectionner mes compétences en adoptant les meilleures
                pratiques comme le TDD, les principes S.O.L.I.D., et le Clean
                Code.
              </p>
              <p>
                Mon objectif est de continuer à évoluer, d&apos;explorer des
                technologies émergentes, et de repousser les limites du
                développement web.
              </p>
              <hr className='max-w-lg mx-auto my-5'></hr>
              <h2 className='text-xl font-semibold mb-4 brand-ttf'>
                Veille technologique
              </h2>
              <div className='my-10 mx-auto'>
                <a
                  href='https://teamtreehouse.com/'
                  className='p-2 text-white rounded bg-blue-800 mr-4'
                  target='_blank'>
                  Treehouse
                </a>
                <small className='italic font-bold'>
                  Comprehensive UX + Web Design Mastery
                </small>
              </div>
              <div className='my-10 mx-auto'>
                <a
                  href='https://academy.zenva.com/'
                  className='p-2 text-white rounded bg-blue-800 mr-4'
                  target='_blank'>
                  Zenva
                </a>
                <small className='italic font-bold'>
                  3. Build a Medical Diagnosis Bot with Python
                </small>
              </div>
              <div className='my-10 mx-auto'>
                <a
                  href='https://www.gamedev.tv/'
                  className='p-2 text-white rounded bg-blue-800 mr-4'
                  target='_blank'>
                  GameDev
                </a>
                <small className='italic font-bold'>
                  Complete Godot 4 2D: Code Your Own 2D Games In Godot 4!
                </small>
              </div>
              <div className='my-10 mx-auto'>
                <a
                  href='https://www.packtpub.com/'
                  className='p-2 text-white rounded bg-blue-800 mr-4'
                  target='_blank'>
                  Packt
                </a>
                <small className='italic font-bold'>
                  Certified Ethical Hacker (CEH) v.12 [Video] By : ACI Learning,
                  Daniel Lowrie, Sophie Goodwin
                </small>
              </div>
              <div className='my-10 mx-auto'>
                <a
                  href='https://training.mammothinteractive.com/'
                  className='p-2 text-white rounded bg-blue-800 mr-4'
                  target='_blank'>
                  MammothInteractive
                </a>
                <small className='italic font-bold'>
                  Unity and C# Complete Beginner&apos;s Guide - Build Games from
                  Scratch
                </small>
              </div>

              <h2 className='text-xl font-semibold mb-4 brand-ttf'>
                Ma stack technique
              </h2>
              <nav className='flex flex-wrap justify-center items-center space-x-4 my-6 sticky top-0 bg-gray-900 text-white md:text-current md:bg-transparent'>
                {['os', 'frontend', 'backend', 'outils', 'à apprendre'].map(
                  (category) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveDevCategory(category)}
                      className={`px-3 py-1 rounded-md flex items-center space-x-2 ${
                        activeDevCategory === category
                          ? 'bg-blue-800 text-white'
                          : 'bg-transparent'
                      }`}>
                      <span>{category.toUpperCase()}</span>
                    </motion.button>
                  )
                )}
              </nav>
              <div className='mb-64 md:mb-0'>
                <ActivitiesContent category={activeDevCategory} />
              </div>
            </motion.div>
          )}

          {activeSection === 'creation' && (
            <motion.div
              key='creation'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}>
              <div>
                <h2 className='text-xl font-semibold mb-4 brand-ttf'>
                  Création de contenu
                </h2>
                <p>
                  Depuis tout petit, l&apos;horreur a toujours occupé une place
                  importante dans ma vie.
                </p>
                <p>
                  Ma fascination a commencé avec les vieilles cassettes VHS que
                  ma mère collectionnait, me plongeant dans des univers sombres
                  et créant mon amour pour les univers dytopiques (si il ya des
                  zombies, c&apos;est un grand oui pour moi).
                </p>
                <p>
                  Les musiques angoissantes, les jeux immersifs, et ces
                  histoires qu&apos;on se racontait entre gamins, juste pour se
                  faire peur, ont nourri mon univers.
                </p>
                <p>
                  Aujourd&apos;hui, je veux laisser cette passion façonné mes
                  créations. Que ce soit des projets en ligne comme des
                  expériences immersives sur le web ou des idées de business
                  autour de ce thème si particulier, l&apos;horreur est devenue
                  une source d&apos;inspiration inépuisable.
                </p>
                <p>
                  J&apos;adore explorer ses différentes facettes, que ce soit à
                  travers des vidéos, des récits interactifs, ou même des
                  concepts plus originaux. Mon objectif est de partager cette
                  fascination et d&apos;offrir aux autres une expérience qui
                  leur fera ressentir cette douce montée d&apos;adrénaline
                  propre à l&apos;horreur.
                </p>

                <h3 className='text-lg font-semibold mt-6 mb-4 brand-ttf'>
                  Dernière vidéo
                </h3>
                <div className='flex flex-col items-center'>
                  {latestVideo && (
                    <iframe
                      className='w-full md:w-2/3 h-[200px] md:h-[400px] mb-6'
                      src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                      title='YouTube Video'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen></iframe>
                  )}
                </div>
                <h3 className='text-lg font-semibold mb-4 brand-ttf'>
                  Prochaine vidéo(s)
                </h3>
                <ul className='list-disc list-inside mb-64 md:mb-0'>
                  <li>
                    Histoire abordant les maladies mentales et l&apos;influence
                    néfaste des réseaux sociaux
                  </li>
                  <li>Anecdotes autours de films et jeux d&apos;horreur</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
