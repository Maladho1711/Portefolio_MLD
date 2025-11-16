import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Mamadou Maladho Barry</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Développeur Full-Stack passionné par la création d'applications web modernes 
              et performantes. Toujours à la recherche de nouveaux défis techniques.
            </p>
            <div className="flex space-x-4">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compétences</a></li>
              <li><a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projets</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Technologies</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-2">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>par votre développeur Full-Stack</span>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">© 2024 Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;