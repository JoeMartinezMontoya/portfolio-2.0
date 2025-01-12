import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="relative m-4">
        <motion.div
          initial={{ scaleX: 0, x: -50, y: -10 }}
          animate={{ scaleX: .7 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute max-h-30 inset-0 bg-purple-800 rounded-lg origin-left"
        />
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl text-white font-bold text-center relative z-10 px-4 brand-ttf"
        >
          Joë Ian <br /> &quot;Seik&quot;<br />Martinez Montoya
        </motion.h1>
      </div>

      <div className="relative m-4">
        <motion.div
          initial={{ scaleX: 0, x: 50, y: 10 }}
          animate={{ scaleX: .4 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute inset-0 bg-blue-400 rounded-lg origin-right"
        />
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl text-white font-medium text-center relative z-10 px-4 brand-ttf"
        >
          Développement
        </motion.h2>
      </div>

      <div className="relative m-4">
        <motion.div
          initial={{ scaleX: 0, x: -100, y: 10 }}
          animate={{ scaleX: .4, x: 50 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute inset-0 bg-red-500 rounded-lg origin-left"
        />
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-3xl text-white font-medium text-center relative z-10 px-4 brand-ttf"
        >
          Création de contenu
        </motion.h2>
      </div>
    </section>
  );
}
