import { FaGithub , FaLinkedinIn , FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900">
    <h2 className="text-3xl mb-4 dark:text-white">Contacte-moi</h2>
    <div className="flex space-x-6 text-3xl">
      <a href="https://github.com/JoeMartinezMontoya" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-800 dark:text-white" />
      </a>
      <a href="https://linkedin.com/in/joe-martinez" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn  className="text-blue-700 dark:text-blue-400" />
      </a>
      <a href="mailto:joe@example.com">
        <FaEnvelope className="text-red-600 dark:text-red-400" />
      </a>
    </div>
  </section>
);

export default Contact;