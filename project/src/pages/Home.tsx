import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code, Award, TrendingUp, CheckCircle2, Brain, Database, User } from 'lucide-react';
import profileImage from '../assets/images/mld home.jpg';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { socialLinks } from '../config/socialLinks';
import { useData } from '../hooks/useData';

const Home = () => {
  const profileImageUrl = profileImage;
  const { projects } = useData();

  // Calculer les statistiques basées sur les projets réels
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const totalProjects = projects.length;

  const stats = [
    { value: '2', label: 'Années d\'expérience', icon: Award },
    { value: `${totalProjects}`, label: totalProjects > 1 ? 'Projets réalisés' : 'Projet réalisé', icon: Code },
    { value: `${completedProjects}`, label: completedProjects > 1 ? 'Projets déployés' : 'Projet déployé', icon: CheckCircle2 },
    { value: '100%', label: 'Satisfaction client', icon: TrendingUp },
  ];

  const expertise = [
    {
      title: "Frontend Expert",
      description: "React, TypeScript, Next.js, TailwindCSS pour des interfaces utilisateur modernes, performantes et accessibles.",
      icon: Code,
      features: ["React & Next.js", "TypeScript", "TailwindCSS"]
    },
    {
      title: "Backend & Database",
      description: "Node.js, Express, MongoDB pour des API performantes, sécurisées et scalables. Expertise MongoDB.",
      icon: Database,
      features: ["Node.js & Express", "MongoDB Expert", "API REST"]
    },
    {
      title: "IA & Blockchain",
      description: "Intelligence Artificielle, Machine Learning, OpenAI API et développement blockchain pour des solutions innovantes.",
      icon: Brain,
      features: ["IA & Machine Learning", "Blockchain & Web3", "OpenAI API"]
    }
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        {/* Pattern subtil */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left flex flex-col justify-start lg:justify-start space-y-8 sm:space-y-10 lg:-mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-400"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-blue-400"></span>
                  </span>
                  Développeur Full-Stack
                </motion.div>

                {/* Titre */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
                  >
                    <span className="block text-gray-900 dark:text-white mb-2">Bonjour, je suis</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent mt-2">
                      Barry Mamadou Maladho
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
                  >
                    Je crée des <span className="font-semibold text-blue-600 dark:text-blue-400">expériences digitales</span> exceptionnelles
                  </motion.p>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4 max-w-2xl mx-auto lg:mx-0"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Avec <span className="font-bold text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md">2 ans d'expérience</span> en développement web,
                    je transforme vos idées en applications modernes, performantes et centrées sur l'utilisateur.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Spécialisé dans</span>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg font-semibold border border-blue-200 dark:border-blue-800">React</span>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg font-semibold border border-blue-200 dark:border-blue-800">TypeScript</span>
                    <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 rounded-lg font-semibold border border-cyan-200 dark:border-cyan-800">Node.js</span>
                    <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 rounded-lg font-semibold border border-cyan-200 dark:border-cyan-800">Cloud</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0"
            >
              <div className="relative max-w-[240px] sm:max-w-[280px] lg:max-w-xs xl:max-w-sm w-full">
                {/* Ombre */}
                <div className="absolute inset-0 rounded-3xl bg-blue-200/30 dark:bg-blue-900/30 opacity-50 blur-3xl -z-10" style={{ transform: 'translate(20px, 20px) scale(1.05)' }} />

                {/* Conteneur photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 group hover:shadow-3xl transition-all duration-500">
                  <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-700">
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <img
                        src={profileImageUrl}
                        alt="Barry Mamadou Maladho - Développeur Full-Stack"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{
                          objectPosition: 'center 20%',
                          filter: 'contrast(1.08) brightness(1.03) saturate(1.15)',
                        } as React.CSSProperties}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EPhoto de profil%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 px-3 sm:px-5 py-2 sm:py-3 z-20"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">2 ans d'expérience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Actions - Centrées en bas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 mt-6 sm:mt-8 lg:mt-10"
          >
            {/* Boutons centrés */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Button as="link" to="/projects" variant="primary" size="lg" className="group w-full sm:w-auto px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                Voir mes projets
                <ArrowRight size={18} className="sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 border-2 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                Me contacter
              </Button>
            </div>

            {/* Social Links - Centrés */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-4 sm:gap-5"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub"
              >
                <Github size={22} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="sm:w-6 sm:h-6" />
              </a>
              <button className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                <Download size={20} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">CV</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section background="gray" padding="md" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 dark:bg-blue-500 text-white mb-2 shadow-lg">
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Expertise Section */}
      <Section background="white" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-4 sm:mb-6"
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
                <span>Mon expertise</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                Expertise{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Professionnelle
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Deux ans d'expérience dans le développement web moderne, combinant créativité et expertise technique.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                const gradients = [
                  'from-blue-600 to-cyan-500',
                  'from-blue-500 to-cyan-400',
                  'from-cyan-600 to-blue-500'
                ];
                const gradient = gradients[index % gradients.length];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Effet de lueur au survol */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500 -z-10`}></div>

                    <Card hover={false} padding="lg" className="h-full border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 relative overflow-hidden">
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${gradient} rounded-xl mb-4 shadow-xl relative`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                          <Icon size={24} className="sm:w-6 sm:h-6 text-white relative z-10" />
                        </motion.div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 group/feature"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle2 size={18} className="text-green-500 dark:text-green-400 flex-shrink-0" />
                              </motion.div>
                              <span className="group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* References Section */}
      <Section background="gray" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-4 sm:mb-6"
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
                <span>Mes références</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                Références{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  professionnelles
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Des professionnels qui ont contribué à mon parcours et qui témoignent de mes compétences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  name: "Assatou Sow",
                  position: "Formatrice référente",
                  organization: "Simplon Guinée",
                  gradient: "from-blue-600 to-cyan-500",
                  glow: "from-blue-500/30 to-cyan-500/30"
                },
                {
                  name: "Madame Aïssata Keïta",
                  position: "Chargée médiation emploi",
                  organization: "Simplon Guinée",
                  gradient: "from-blue-500 to-cyan-400",
                  glow: "from-blue-500/30 to-cyan-500/30"
                },
                {
                  name: "Madame Aïssatou Baldé",
                  position: "Fondatrice de Nawaari et Directrice générale",
                  organization: "Simplon Guinée",
                  gradient: "from-cyan-600 to-blue-500",
                  glow: "from-cyan-500/30 to-blue-500/30"
                }
              ].map((reference, index) => (
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${reference.glow} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                  <Card hover={false} padding="lg" className="h-full border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 relative overflow-hidden">
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="text-center relative z-10">
                      {/* Icône */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${reference.gradient} rounded-xl mb-4 shadow-xl relative`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${reference.gradient} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                        {index === 2 ? (
                          <Award size={24} className="sm:w-6 sm:h-6 text-white relative z-10" />
                        ) : (
                          <User size={24} className="sm:w-6 sm:h-6 text-white relative z-10" />
                        )}
                      </motion.div>

                      {/* Nom */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {reference.name}
                      </h3>

                      {/* Position */}
                      <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        {reference.position}
                      </p>

                      {/* Organisation */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {reference.organization}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg" className="!pt-3 sm:!pt-4 !pb-3 sm:!pb-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Background decorative elements améliorés */}
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
              className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
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
              className="absolute bottom-0 right-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"
            ></motion.div>
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-blue-200 dark:border-blue-800 rounded-full text-xs font-bold text-blue-700 dark:text-blue-400 shadow-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg"
                />
                <span>Collaborons ensemble</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full shadow-lg"
                />
              </motion.div>

              {/* Titre amélioré */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
                Prêt à transformer{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                >
                  votre vision
                </motion.span>
                <br />
                <span className="text-gray-900 dark:text-white">en réalité ?</span>
              </h2>

              {/* Description améliorée */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Discutons de votre projet et créons ensemble quelque chose d'<strong className="text-gray-900 dark:text-white">extraordinaire</strong>.
              </motion.p>

              {/* Boutons améliorés avec animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    as="link"
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="group shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 transition-all duration-300 px-8 py-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center"
                    >
                      <ArrowRight size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                    Commencer un projet
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    as="link"
                    to="/projects"
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 px-8 py-4"
                  >
                    Voir mes réalisations
                  </Button>
                </motion.div>
              </motion.div>

              {/* Quick stats améliorés */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg"
                  ></motion.div>
                  <span className="font-semibold">Disponible maintenant</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg"
                  ></motion.div>
                  <span className="font-semibold">Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-lg"
                  ></motion.div>
                  <span className="font-semibold">Consultation gratuite</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
