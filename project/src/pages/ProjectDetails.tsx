import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2, Clock, Target, RefreshCw, Code, X } from 'lucide-react';
import { useData } from '../hooks/useData';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects } = useData();

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

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
          label: 'Déployé',
          icon: CheckCircle2,
          color: 'bg-green-500 text-white',
          badgeColor: 'from-green-500 to-emerald-500',
          showImprovement: true
        };
      case 'in-progress':
        return {
          label: 'En cours de réalisation',
          icon: Clock,
          color: 'bg-blue-500 text-white',
          badgeColor: 'from-blue-500 to-cyan-500'
        };
      case 'planned':
        return {
          label: 'Planifié',
          icon: Target,
          color: 'bg-orange-500 text-white',
          badgeColor: 'from-orange-500 to-yellow-500'
        };
      default:
        return {
          label: 'Inconnu',
          icon: Code,
          color: 'bg-gray-500 text-white',
          badgeColor: 'from-gray-500 to-gray-600'
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section avec image */}
      <Section background="gradient" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="relative">
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
            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 shadow-lg"
              >
                <ArrowLeft size={18} />
                Retour aux projets
              </Link>
            </motion.div>

            {/* Image du projet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image || ''}
                  alt={`${project.title} - Capture d'écran`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src && !target.src.includes('data:image')) {
                      target.style.display = 'none';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Titre et badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${statusConfig.color} shadow-lg`}>
                  <StatusIcon size={16} />
                  {statusConfig.label}
                </span>
                {statusConfig.showImprovement && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/80 dark:bg-black/90 text-white border border-white/30 backdrop-blur-md shadow-lg">
                    <RefreshCw size={12} className="animate-spin-slow" />
                    En amélioration
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                {project.title}
              </h1>

              <div className="flex items-center justify-center gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(project.createdAt)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Description et détails */}
      <Section background="white" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              À propos du projet
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Technologies utilisées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg font-semibold border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {project.link && project.link !== 'https://example.com' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                Voir le projet
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                Code source
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Code size={20} />
              Discuter du projet
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetails;

