import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

const NotFound = () => {
  return (
    <Section background="gradient" padding="lg" className="min-h-screen flex items-center justify-center">
      <div className="relative text-center">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Code d'erreur animé */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-9xl sm:text-[12rem] font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent mb-4"
            >
              404
            </motion.h1>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
            >
              Page introuvable
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </motion.p>

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Home size={20} />
                  Retour à l'accueil
                </Button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ArrowLeft size={20} />
                Page précédente
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;

