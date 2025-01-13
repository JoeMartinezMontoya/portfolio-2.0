import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => (
  <section
    id='contact'
    className='h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900'>
    <motion.div
      initial={{ backgroundPosition: '0% 0%' }}
      animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
      transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
      className='absolute inset-0 bg-paper opacity-20 z-0 pointer-events-none'
    />
    <h2 className='text-3xl mb-4 dark:text-white'>Contacte-moi</h2>
    <div className='flex space-x-6 text-3xl'>
      <a
        href='https://github.com/JoeMartinezMontoya'
        target='_blank'
        rel='noopener noreferrer'>
        <FaGithub className='text-gray-800 dark:text-white' />
      </a>
      <a
        href='https://linkedin.com/in/joe-martinez-montoya'
        target='_blank'
        rel='noopener noreferrer'>
        <FaLinkedinIn className='text-blue-700 dark:text-blue-400' />
      </a>
      <a href='mailto:martinezmontoyajoe@gmail.com'>
        <FaEnvelope className='text-red-600 dark:text-red-400' />
      </a>
    </div>
  </section>
);

export default Contact;
