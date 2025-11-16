import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, CheckCircle2, Clock, Target, ArrowRight, RefreshCw, Code, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { useData } from '../hooks/useData';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const Projects = () => {
  const { projects } = useData();
  const [activeFilter, setActiveFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Déployé - En amélioration',
          icon: CheckCircle2,
          color: 'bg-black dark:bg-black text-white border-black dark:border-black',
          badgeColor: 'from-green-500 to-emerald-500',
          showImprovement: true
        };
      case 'in-progress':
        return {
          label: 'En cours de réalisation',
          icon: Clock,
          color: 'bg-black dark:bg-black text-white border-black dark:border-black',
          badgeColor: 'from-blue-500 to-cyan-500',
          showGithub: false
        };
      case 'planned':
        return {
          label: 'À venir',
          icon: Target,
          color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800',
          badgeColor: 'from-orange-500 to-amber-500'
        };
      default:
        return {
          label: 'Inconnu',
          icon: Target,
          color: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700',
          badgeColor: 'from-gray-400 to-gray-500'
        };
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeFilter);

  const projectsByStatus = {
    completed: projects.filter(p => p.status === 'completed'),
    inProgress: projects.filter(p => p.status === 'in-progress'),
    planned: projects.filter(p => p.status === 'planned')
  };

  const filters = [
    { id: 'all', label: 'Tous', count: projects.length },
    { id: 'completed', label: 'Terminés', count: projectsByStatus.completed.length },
    { id: 'in-progress', label: 'En cours', count: projectsByStatus.inProgress.length },
    { id: 'planned', label: 'À venir', count: projectsByStatus.planned.length }
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
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
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
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 mb-4 shadow-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg"
                />
                <span>Portfolio de réalisations</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full shadow-lg"
                />
              </motion.div>

              {/* Titre amélioré avec meilleur design */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight"
              >
                <span className="block text-gray-900 dark:text-white mb-2">
                  Mes{' '}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                  >
                    Projets
                  </motion.span>
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                >
                  Créations & Innovations
                </motion.span>
              </motion.h1>

              {/* Description améliorée */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed"
              >
                Découvrez mes <strong className="text-gray-900 dark:text-white">réalisations</strong>, projets en cours et futures initiatives. 
                Chaque projet représente un <strong className="text-blue-600 dark:text-blue-400">défi technique unique</strong> et des <strong className="text-cyan-600 dark:text-cyan-400">solutions innovantes</strong>.
              </motion.p>

              {/* Filter Buttons améliorés avec glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
              >
                {filters.map((filter, index) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 overflow-hidden ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 text-white shadow-2xl scale-105 border-2 border-blue-400 dark:border-blue-300'
                        : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl'
                    }`}
                  >
                    {/* Effet de brillance pour le bouton actif */}
                    {activeFilter === filter.id && (
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {filter.label}
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1, type: "spring" }}
                        className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                          activeFilter === filter.id
                            ? 'bg-white/30 text-white backdrop-blur-sm'
                            : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        }`}
                      >
                        {filter.count}
                      </motion.span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projects by Status - Organized View */}
      {activeFilter === 'all' ? (
        <>
          {/* Completed Projects */}
          {projectsByStatus.completed.length > 0 && (
            <Section background="white" padding="md" className="px-4 sm:px-8 lg:px-12 xl:px-16 !pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
              <div className="relative">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full text-sm font-semibold text-green-700 dark:text-green-400 mb-6 shadow-lg"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"
                      />
                      <span>Projets terminés</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                      Réalisations{' '}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                        complètes
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      Projets déployés et en amélioration continue
                    </p>
                  </motion.div>

                  <div className="flex flex-col items-center gap-6 sm:gap-8">
                    {projectsByStatus.completed.map((project, index) => {
                      const statusConfig = getStatusConfig(project.status);
                      const StatusIcon = statusConfig.icon;
                      return (
                        <div key={project.id} className="w-full max-w-4xl">
                          <ProjectCard project={project} index={index} statusConfig={statusConfig} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* In Progress Projects */}
          {projectsByStatus.inProgress.length > 0 && (
            <Section background="gray" padding="md" className="px-4 sm:px-8 lg:px-12 xl:px-16 !pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
              <div className="relative">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-400 mb-6 shadow-lg"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                      <span>En développement</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                      Projets{' '}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                        en cours
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      Actuellement en développement actif sur GitHub
                    </p>
                  </motion.div>

                  <div className={`grid ${
                    projectsByStatus.inProgress.length === 1 
                      ? 'grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' 
                      : projectsByStatus.inProgress.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
                  } gap-3 sm:gap-4 lg:gap-5`}>
                    {projectsByStatus.inProgress.map((project, index) => {
                      const statusConfig = getStatusConfig(project.status);
                      return (
                        <ProjectCard key={project.id} project={project} index={index} statusConfig={statusConfig} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* Planned Projects */}
          {projectsByStatus.planned.length > 0 && (
            <Section background="white" padding="md" className="px-4 sm:px-8 lg:px-12 xl:px-16 !pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
              <div className="relative">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-full text-sm font-semibold text-orange-700 dark:text-orange-400 mb-6 shadow-lg"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full"
                      />
                      <span>À venir</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                      Projets{' '}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                        à venir
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      Prochaines initiatives et idées en préparation
                    </p>
                  </motion.div>

                  <div className={`grid ${
                    projectsByStatus.planned.length === 1 
                      ? 'grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' 
                      : projectsByStatus.planned.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
                  } gap-3 sm:gap-4 lg:gap-5`}>
                    {projectsByStatus.planned.map((project, index) => {
                      const statusConfig = getStatusConfig(project.status);
                      return (
                        <ProjectCard key={project.id} project={project} index={index} statusConfig={statusConfig} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>
          )}
        </>
        ) : (
          /* Filtered Projects View */
          <Section background="white" padding="md" className="px-4 sm:px-8 lg:px-12 xl:px-16">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">Aucun projet dans cette catégorie.</p>
            </div>
          ) : (
            <div className={`grid ${
              filteredProjects.length === 1 
                ? 'grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' 
                : filteredProjects.length === 2
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
            } gap-3 sm:gap-4 lg:gap-5`}>
              {filteredProjects.map((project, index) => {
                const statusConfig = getStatusConfig(project.status);
                return (
                  <ProjectCard key={project.id} project={project} index={index} statusConfig={statusConfig} />
                );
              })}
            </div>
          )}
        </Section>
      )}

      {/* CTA Section */}
      <Section background="gradient" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Background decorative elements */}
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

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl mb-4"
              >
                <Sparkles size={32} className="sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Vous avez un projet{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  en tête ?
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Je serais ravi de discuter de votre prochain projet et de voir comment
                nous pouvons le concrétiser ensemble. Transformons vos idées en réalité.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  as="link"
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  className="group shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Discutons de votre projet
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  as="link"
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Me contacter
                </Button>
              </div>

              {/* Quick stats or features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Disponible maintenant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>Consultation gratuite</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Component for Project Card
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    githubLink?: string;
    technologies: string[];
    createdAt: string;
    status: 'completed' | 'in-progress' | 'planned';
  };
  index: number;
  statusConfig: {
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
    badgeColor: string;
    showImprovement?: boolean;
    showGithub?: boolean;
  };
}

const ProjectCard = ({ project, index, statusConfig }: ProjectCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const StatusIcon = statusConfig.icon;
  const isPlanned = project.status === 'planned';
  const isGuinTech = project.title === 'GuinTech';
  const isGuineaSmart = project.title === 'Guinée Smart Électricité';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card hover={!isPlanned} padding="none" className="overflow-hidden h-full flex flex-col group relative p-0 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
        {/* Status Badges - Top Left (Empilés verticalement) */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 flex flex-col gap-1.5">
          {/* Badge principal (Déployé / En cours) */}
          <span className={`inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border backdrop-blur-md ${statusConfig.color} shadow-lg`}>
            <StatusIcon size={10} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">{statusConfig.label.split(' - ')[0]}</span>
            <span className="sm:hidden">{statusConfig.label.substring(0, 1)}</span>
          </span>
          
          {/* Badge secondaire (En amélioration) */}
          {statusConfig.showImprovement && (
            <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-black/80 dark:bg-black/90 text-white border border-white/30 backdrop-blur-md shadow-lg">
              <RefreshCw size={10} className="sm:w-3 sm:h-3 animate-spin-slow" />
              <span className="hidden sm:inline">En amélioration</span>
              <span className="sm:hidden">Amélioration</span>
            </span>
          )}
        </div>

        {/* Project Image */}
        <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 w-full ${
          isGuinTech ? 'h-44 sm:h-52 lg:h-48 xl:h-56' : 
          isGuineaSmart ? 'h-40 sm:h-48 lg:h-44 xl:h-52' : 
          'h-32 sm:h-40 lg:h-36 xl:h-44'
        }`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${statusConfig.badgeColor} opacity-10 z-10`} />
          <img
            src={project.image || ''}
            alt={`${project.title} - Capture d'écran du projet`}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isPlanned ? 'opacity-60 grayscale' : 
              (isGuinTech || isGuineaSmart) ? '' : 
              'group-hover:scale-110'
            }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src && !target.src.includes('data:image')) {
                target.style.display = 'none';
              }
            }}
            onLoad={() => {
              // Image chargée avec succès
            }}
            style={{
              imageRendering: 'high-quality',
              objectPosition: isGuineaSmart ? 'center 15%' : 'center',
              width: '100%',
              height: '100%'
            } as React.CSSProperties}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
            }}
          />
          {!isPlanned && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                    aria-label={`Voir le code source de ${project.title} sur GitHub`}
                  >
                    <Github size={16} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        {/* Project Content */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Calendar size={11} className="sm:w-3 sm:h-3 mr-1 sm:mr-1.5" />
              <span className="hidden sm:inline">{formatDate(project.createdAt)}</span>
              <span className="sm:hidden">{new Date(project.createdAt).getFullYear()}</span>
            </div>
          </div>

          <h3 className={`text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1`}>
            {project.title}
          </h3>
          
          <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed flex-1 line-clamp-2 sm:line-clamp-3`}>
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-1.5 sm:px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] sm:text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 sm:px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            {isPlanned ? (
              <div className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-sm text-gray-500 dark:text-gray-400">
                Projet à venir
              </div>
            ) : (
              <>
                {/* Bouton "Voir le projet" uniquement pour les projets déployés */}
                {project.status === 'completed' && project.link !== '#' && (
                  <Button
                    as="a"
                    href={project.link}
                    variant="primary"
                    size="sm"
                    className="flex-1 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Voir le projet
                  </Button>
                )}
                
                {project.githubLink && (
                  <Button
                    as="a"
                    href={project.githubLink}
                    variant={project.status === 'completed' ? 'outline' : 'primary'}
                    size="sm"
                    className={project.status === 'completed' ? 'px-4' : 'flex-1'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code source de ${project.title}`}
                  >
                    <Github size={16} className={project.status === 'completed' ? '' : 'mr-2'} />
                    {project.status !== 'completed' && <span>Voir sur GitHub</span>}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;
