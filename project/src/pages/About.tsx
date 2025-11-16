import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import aboutImage from '../assets/images/mld.jpg';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Code Propre",
      description: "J'écris du code maintenable, lisible et bien structuré pour faciliter la collaboration et l'évolution des projets."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque ligne de code est écrite avec passion. Je crois que l'amour du métier se ressent dans la qualité du travail."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Toujours à l'affût des dernières technologies et tendances pour proposer des solutions modernes et efficaces."
    },
    {
      icon: Target,
      title: "Précision",
      description: "Attention aux détails et focus sur l'expérience utilisateur pour créer des applications qui marquent."
    }
  ];

  const journey = [
    {
      year: "Début 2024",
      title: "Les débuts",
      description: "Premiers pas dans le développement web avec HTML, CSS et JavaScript. Découverte de la magie du code."
    },
    {
      year: "Fin 2024",
      title: "Formation Simplon",
      description: "Formation avec Simplon Guinée. Acquisition des fondamentaux du développement web moderne et des compétences professionnelles."
    },
    {
      year: "Début 2025",
      title: "Expert Full-Stack",
      description: "Maîtrise complète de la stack moderne. Création d'applications complexes et accompagnement d'équipes."
    },
    {
      year: "Fin 2025",
      title: "Certification Coursera",
      description: "Certifié sur Coursera par l'Université du Michigan. Spécialisation approfondie dans les technologies modernes et l'innovation avec une formation d'excellence reconnue internationalement."
    }
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-400 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                />
                <span>Développeur Full-Stack</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                À propos de{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                >
                  moi
                </motion.span>
              </h1>
              
              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  Développeur Full-Stack passionné avec <strong className="text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md font-semibold">2 ans d'expérience</strong> dans la création 
                  d'applications web modernes. J'aime résoudre des problèmes complexes et transformer 
                  des idées créatives en solutions techniques élégantes.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  Mon parcours m'a mené de l'apprentissage autodidacte aux projets professionnels, 
                  en passant par de nombreux défis techniques qui ont forgé mon expertise actuelle.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 group"
              >
                {/* Effet de lueur au survol */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                  <img
                    src={aboutImage}
                    alt="Barry Mamadou Maladho - Développeur Full-Stack"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.05) brightness(1.02) saturate(1.1)',
                    } as React.CSSProperties}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EPhoto%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay avec pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-full h-full bg-gradient-to-br from-blue-600/30 to-cyan-500/30 dark:from-blue-400/15 dark:to-cyan-400/15 rounded-3xl -z-10 blur-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
            />
            <span>Mes valeurs</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Ce qui me{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
              guide
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ce qui guide mon travail au quotidien et ma vision du développement web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            const gradients = [
              { icon: 'from-blue-600 to-cyan-500', glow: 'from-blue-500/30 to-cyan-500/30' },
              { icon: 'from-blue-500 to-cyan-400', glow: 'from-blue-400/30 to-cyan-400/30' },
              { icon: 'from-cyan-600 to-blue-500', glow: 'from-cyan-500/30 to-blue-500/30' },
              { icon: 'from-teal-600 to-cyan-500', glow: 'from-teal-500/30 to-cyan-500/30' },
              { icon: 'from-sky-600 to-blue-500', glow: 'from-sky-500/30 to-blue-500/30' },
              { icon: 'from-blue-700 to-cyan-600', glow: 'from-blue-600/30 to-cyan-600/30' }
            ];
            const gradient = gradients[index % gradients.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group"
              >
                {/* Effet de lueur au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient.glow} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                <Card hover={false} padding="lg" className="h-full border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 relative overflow-hidden">
                  {/* Effet de brillance animé */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="text-center relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${gradient.icon} rounded-xl mb-4 shadow-xl relative`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient.icon} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                      <Icon size={24} className="sm:w-6 sm:h-6 text-white relative z-10" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Journey Section */}
      <Section background="gradient" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                />
                <span>Mon parcours</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                Un voyage{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  continu
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Un voyage continu d'apprentissage et de croissance dans le monde du développement web.
              </p>
            </motion.div>

            <div className="relative">
              {/* Ligne de connexion (visible sur desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 dark:via-blue-600/50 to-transparent transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 relative">
                {journey.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="relative group"
                  >
                    {/* Point de connexion sur la ligne (desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20 group-hover:scale-150 group-hover:bg-cyan-500 transition-all duration-300"></div>
                    
                    {/* Effet de lueur au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-5 border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300 text-center h-full shadow-xl overflow-hidden">
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                        >
                          {step.year}
                        </motion.div>
                        <h3 className="text-lg sm:text-xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Personal Touch */}
      <Section background="gradient" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
              />
              <span>Au-delà du code</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Ma{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                philosophie
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              Quand je ne code pas, j'aime explorer de nouvelles technologies, contribuer à des projets open source, 
              et partager mes connaissances avec la communauté. Je crois fermement que l'<strong className="text-gray-900 dark:text-white">apprentissage continu</strong> 
              et le <strong className="text-blue-600 dark:text-blue-400">partage</strong> sont les clés du succès dans notre domaine.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Mon objectif est simple : créer des applications qui ont un <strong className="text-gray-900 dark:text-white">impact positif</strong> sur la vie des utilisateurs, 
              tout en repoussant continuellement les limites de ce qui est possible avec le web.
            </motion.p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;
