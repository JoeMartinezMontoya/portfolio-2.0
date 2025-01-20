import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiOnlyfans } from 'react-icons/si';
import Image from 'next/image';

const contactMethods = [
  {
    platform: 'GitHub',
    link: 'https://github.com/JoeMartinezMontoya',
    color: 'from-gray-400 to-gray-800',
    icon: <FaGithub className='text-white' />,
  },
  {
    platform: 'LinkedIn',
    link: 'https://linkedin.com/in/joe-martinez-montoya',
    color: 'from-blue-400 to-blue-800',
    icon: <FaLinkedinIn className='text-white' />,
  },
  {
    platform: 'YouTube',
    link: 'https://www.youtube.com/channel/UCJ_5uFCIe3VYQFvALFdiL0Q',
    color: 'from-red-400 to-red-800',
    icon: <FaYoutube className='text-white' />,
  },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/seik.yoo',
    color: 'from-pink-400 to-fuchsia-800',
    icon: <FaInstagram className='text-white' />,
  },
  {
    platform: 'Email',
    link: 'mailto:martinezmontoyajoe@gmail.com',
    color: 'from-green-400 to-green-800',
    icon: <FaEnvelope className='text-white' />,
  },
];

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className='h-screen p-10 bg-gradient-to-b dark:bg-gradient-to-t from-gray-500 to-gray-50 dark:from-gray-950 dark:to-blue-950 text-slate-800 dark:text-slate-200 relative'>
      <motion.div
        className='absolute inset-0 bg-heart opacity-20 z-0 pointer-events-none'
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '0% -100%'] }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
      />

      <div className='flex flex-col h-screen justify-center items-center'>
        <div className='flex flex-col justify-center gap-6 z-10'>
          {contactMethods.map(({ platform, link, color, icon }) => (
            <motion.a
              key={platform}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{
                scale: 1.2,
                boxShadow: '0px 0px 20px 5px rgba(255,255,255,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br ${color}`}
              title={platform}>
              {icon}
            </motion.a>
          ))}
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{
              scale: 1.2,
              boxShadow: '0px 0px 20px 5px rgba(255,255,255,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-cyan-400 to-cyan-800 mb-40'
            title='OnlyFans'>
            <SiOnlyfans className='text-white' />
          </motion.button>

          {/* MODAL */}
          {showModal && (
            <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
              <motion.div
                className='text-white bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full relative'
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}>
                <button
                  onClick={() => setShowModal(false)}
                  className='absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-800 transition'>
                  <FaTimes />
                </button>
                <div className='flex flex-col items-center gap-4'>
                  <div className='max-w-96'>
                    <Image
                      src='https://media.giphy.com/media/qGVxkRAULoPqU/giphy.gif?cid=790b7611oq40giwpzufmqj3zyvkwf9u23bpd2dgkwy7ixzmw&ep=v1_gifs_search&rid=giphy.gif&ct=g'
                      width={10}
                      height={10}
                      alt='Siiiiiiike'
                      className='w-full rounded-lg'
                    />
                  </div>
                  <p>Siiiiiiike</p>
                  <div className='max-w-64'>
                    <Image
                      src='https://media.giphy.com/media/3o85xv2tAHgkm8jf2w/giphy.gif?cid=ecf05e47zilynif9q3i4589r6joh21x6b567f1olmth9061c&ep=v1_gifs_related&rid=giphy.gif&ct=g'
                      width={10}
                      height={10}
                      alt='Gotcha'
                      className='w-full rounded-lg'
                    />
                  </div>
                  <p>Gotcha</p>
                </div>
              </motion.div>
            </div>
          )}
          {/* FIN MODAL */}
        </div>
      </div>
    </section>
  );
}
