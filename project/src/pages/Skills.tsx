import { motion } from 'framer-motion';
import { useData } from '../hooks/useData';
import * as LucideIcons from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

const Skills = () => {
  const { skills } = useData();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{size?: number, className?: string}>;
    return IconComponent || LucideIcons.Code;
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-blue-600 to-cyan-500';
    if (level >= 80) return 'from-blue-500 to-cyan-400';
    if (level >= 70) return 'from-cyan-600 to-blue-500';
    if (level >= 60) return 'from-teal-600 to-cyan-500';
    return 'from-gray-400 to-gray-500';
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Avancé';
    if (level >= 70) return 'Intermédiaire';
    return 'Débutant';
  };

  const softSkills = [
    {
      title: "Résolution de problèmes",
      description: "Analyse approfondie et résolution créative de problèmes complexes. Approche méthodique pour identifier et implémenter les meilleures solutions techniques."
    },
    {
      title: "Communication",
      description: "Collaboration efficace avec les équipes techniques et non-techniques. Capacité à expliquer clairement des concepts complexes et à présenter des solutions."
    },
    {
      title: "Apprentissage continu",
      description: "Passion pour l'apprentissage et l'adaptation rapide aux nouvelles technologies. Veille technologique constante pour rester à jour avec les dernières tendances."
    },
    {
      title: "Architecture logicielle",
      description: "Conception de systèmes scalables, maintenables et performants. Expérience dans la création d'architectures robustes pour des applications de grande envergure."
    },
    {
      title: "IA & Innovation",
      description: "Expertise dans l'intégration de l'intelligence artificielle pour améliorer l'expérience utilisateur et optimiser les performances des applications."
    },
    {
      title: "Blockchain & Web3",
      description: "Compréhension approfondie de la blockchain et développement de solutions décentralisées. Capacité à intégrer des fonctionnalités Web3 dans les projets."
    }
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="relative text-center">
          {/* Éléments décoratifs améliorés */}
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
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
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
              className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"
            ></motion.div>
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge amélioré */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 mb-4 shadow-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg"
                />
                <span>Stack technique</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full shadow-lg"
                />
              </motion.div>

              {/* Titre amélioré */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 leading-tight"
              >
                <span className="block text-gray-900 dark:text-white mb-1">
                  Mes{' '}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                  >
                    Compétences
                  </motion.span>
                </span>
              </motion.h1>

              {/* Description améliorée */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Un éventail complet de <strong className="text-gray-900 dark:text-white">technologies</strong> et d'outils que je maîtrise pour développer 
                des applications web modernes, performantes et innovantes. De <strong className="text-blue-600 dark:text-blue-400">React</strong> à l'<strong className="text-blue-600 dark:text-blue-400">IA</strong>, 
                en passant par <strong className="text-blue-600 dark:text-blue-400">Node.js</strong> et la <strong className="text-blue-600 dark:text-blue-400">blockchain</strong>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section background="white" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 last:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-blue-300 dark:to-blue-600"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full border border-blue-200 dark:border-blue-800 shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 shadow-lg"
                ></motion.div>
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white text-center whitespace-nowrap">
                  {category}
                </h2>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 shadow-lg"
                ></motion.div>
              </motion.div>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-300 dark:from-blue-600 via-blue-300 dark:via-blue-600 to-transparent"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {categorySkills.map((skill, index) => {
                const IconComponent = getIcon(skill.icon);
                const levelColor = getLevelColor(skill.level);
                const levelLabel = getLevelLabel(skill.level);
                
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Effet de lueur au survol */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${levelColor} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
                    
                    <Card hover={false} padding="sm" className="h-full border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 relative overflow-hidden">
                      {/* Effet de brillance animé */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${levelColor} rounded-lg flex items-center justify-center shadow-xl flex-shrink-0 relative`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${levelColor} rounded-lg blur-lg opacity-50 animate-pulse`}></div>
                          <IconComponent size={18} className="sm:w-5 sm:h-5 text-white relative z-10" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base lg:text-lg font-extrabold text-gray-900 dark:text-white mb-1 sm:mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <motion.span
                              whileHover={{ scale: 1.1 }}
                              className={`text-xs font-bold px-2 py-1 rounded-full transition-all ${
                                skill.level >= 90 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-200 dark:border-green-800' :
                                skill.level >= 80 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800' :
                                skill.level >= 70 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-2 border-yellow-200 dark:border-yellow-800' :
                                skill.level >= 60 ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-2 border-orange-200 dark:border-orange-800' :
                                'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-700'
                              }`}
                            >
                              {skill.level < 70 ? '🔄 En apprentissage' : levelLabel}
                            </motion.span>
                            <span className="text-xs sm:text-sm font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1.5 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`bg-gradient-to-r ${levelColor} h-2 rounded-full shadow-lg relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            {/* Indicateur de niveau */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                              viewport={{ once: true }}
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-900 rounded-full border-2 border-blue-600 dark:border-blue-400 shadow-lg"
                            ></motion.div>
                          </motion.div>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold">
                          <span>Débutant</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Soft Skills */}
      <Section background="gradient" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
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
              className="text-center mb-8 sm:mb-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 mb-4 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                />
                <span>Compétences transversales</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
                Au-delà des{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  technologies
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Au-delà des technologies, des compétences qui font la différence dans mes projets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {softSkills.map((skill, index) => {
                const gradients = [
                  { bg: 'from-blue-600 to-cyan-500', glow: 'from-blue-500/30 to-cyan-500/30' },
                  { bg: 'from-blue-500 to-cyan-400', glow: 'from-blue-400/30 to-cyan-400/30' },
                  { bg: 'from-cyan-600 to-blue-500', glow: 'from-cyan-500/30 to-blue-500/30' },
                  { bg: 'from-teal-600 to-cyan-500', glow: 'from-teal-500/30 to-cyan-500/30' },
                  { bg: 'from-sky-600 to-blue-500', glow: 'from-sky-500/30 to-blue-500/30' },
                  { bg: 'from-blue-700 to-cyan-600', glow: 'from-blue-600/30 to-cyan-600/30' }
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
                    
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-5 border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 h-full shadow-xl overflow-hidden">
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="flex items-start gap-3 mb-3 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${gradient.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl relative`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient.bg} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-lg relative z-10"></div>
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-extrabold mb-1.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
