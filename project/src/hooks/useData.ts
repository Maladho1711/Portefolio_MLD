import { useState, useEffect } from 'react';
import { Project, Skill } from '../types';
import guineasmartImage from '../assets/images/guineasmart.jpg';
import koripayImage from '../assets/images/KoriPay.jpg';
import guintechImage from '../assets/images/guintech.png';

const mockProjects: Project[] = [
  // Projets terminés
  {
    id: '1',
    title: 'Guinée Smart Électricité',
    description: 'Plateforme complète de gestion de l\'électricité pour la Guinée avec authentification multi-rôles (Citoyen, PME, Technicien, Manager, État), dashboards personnalisés, assistant IA EVA, gestion des tickets, suivi de consommation énergétique et sécurité renforcée. Développée pour EDG Guinée.',
    image: guineasmartImage,
    link: 'https://guinea-smart-electricity.vercel.app',
    githubLink: 'https://github.com/Maladho1711/Guinea-smart-Electricity',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'IoT'],
    createdAt: '2025-11-13',
    status: 'completed'
  },
  // Projets en cours
  {
    id: '2',
    title: 'Koripay',
    description: 'Plateforme fintech permettant la gestion sécurisée des paiements, des factures et du transfert d\'argent. L\'objectif est de rendre les transactions rapides, simples et accessibles à tous. Système basé sur la transparence, l\'efficacité et l\'innovation technologique.',
    image: koripayImage,
    link: 'https://example.com',
    githubLink: 'https://github.com/example/koripay',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    createdAt: '2024-02-20',
    status: 'in-progress'
  },
  {
    id: '3',
    title: 'GuinTech',
    description: 'Plateforme communautaire web accessible sur invitation offrant un espace collaboratif complet. Regroupe communication interne, gestion de projets, partage de ressources, planification d\'événements, et mise en avant de sponsors/partenaires. Système de rôles : Super Admin (contrôle complet), Admin (gestion + modération), Membre (accès aux modules communautaires).',
    image: guintechImage,
    link: 'https://example.com',
    githubLink: 'https://github.com/example/guintech',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    createdAt: '2024-04-05',
    status: 'in-progress'
  }
];

const mockSkills: Skill[] = [
  // Frontend
  { id: '1', name: 'HTML/CSS', level: 92, icon: 'Code2', category: 'Frontend' },
  { id: '2', name: 'React', level: 90, icon: 'Code', category: 'Frontend' },
  { id: '3', name: 'TailwindCSS', level: 90, icon: 'Palette', category: 'Frontend' },
  { id: '4', name: 'Next.js', level: 75, icon: 'Zap', category: 'Frontend' }, // Intermédiaire
  
  // Langages
  { id: '5', name: 'JavaScript', level: 90, icon: 'Code2', category: 'Langages' },
  { id: '6', name: 'TypeScript', level: 88, icon: 'FileCode', category: 'Langages' },
  { id: '7', name: 'Python', level: 60, icon: 'Terminal', category: 'Langages' }, // En apprentissage
  
  // Backend
  { id: '8', name: 'Node.js', level: 88, icon: 'Server', category: 'Backend' },
  { id: '9', name: 'Express.js', level: 85, icon: 'Globe', category: 'Backend' },
  { id: '10', name: 'REST API', level: 88, icon: 'Boxes', category: 'Backend' },
  
  // Database
  { id: '11', name: 'MongoDB', level: 92, icon: 'Database', category: 'Database' },
  
  // DevOps & Cloud
  { id: '14', name: 'Git & GitHub', level: 90, icon: 'GitBranch', category: 'DevOps' },
  { id: '15', name: 'Docker', level: 85, icon: 'Package', category: 'DevOps' },
  { id: '16', name: 'AWS', level: 60, icon: 'Cloud', category: 'DevOps' }, // En apprentissage
  { id: '17', name: 'CI/CD', level: 60, icon: 'Workflow', category: 'DevOps' }, // En apprentissage
  
  // IA & Machine Learning
  { id: '18', name: 'Intelligence Artificielle', level: 80, icon: 'Brain', category: 'IA & ML' },
  { id: '19', name: 'Machine Learning', level: 75, icon: 'Sparkles', category: 'IA & ML' },
  { id: '20', name: 'OpenAI API', level: 82, icon: 'Zap', category: 'IA & ML' },
  
  // Blockchain & Crypto
  { id: '21', name: 'Blockchain', level: 75, icon: 'Coins', category: 'Blockchain' },
  { id: '22', name: 'Smart Contracts', level: 70, icon: 'FileCode', category: 'Blockchain' },
  { id: '23', name: 'Web3', level: 72, icon: 'Globe', category: 'Blockchain' },
  { id: '24', name: 'Solidity', level: 65, icon: 'Code', category: 'Blockchain' },
  { id: '25', name: 'Ethereum', level: 70, icon: 'Coins', category: 'Blockchain' }
];

export const useData = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Version des données pour forcer la mise à jour
    const DATA_VERSION = '5.0';
    const storedVersion = localStorage.getItem('portfolioDataVersion');
    
    // Si la version a changé ou n'existe pas, on nettoie et utilise les nouvelles données
    if (storedVersion !== DATA_VERSION) {
      localStorage.removeItem('portfolioProjects');
      localStorage.removeItem('portfolioSkills');
      localStorage.setItem('portfolioDataVersion', DATA_VERSION);
      
      // Utiliser directement les nouvelles données
      setProjects(mockProjects);
      setSkills(mockSkills);
      // Stocker les projets avec les URLs d'images correctes
      const projectsForStorage = mockProjects.map(project => ({
        ...project,
        image: project.image // L'import Vite retourne déjà une URL string
      }));
      localStorage.setItem('portfolioProjects', JSON.stringify(projectsForStorage));
      localStorage.setItem('portfolioSkills', JSON.stringify(mockSkills));
      return;
    }

    // Load data from localStorage or use mock data
    const storedProjects = localStorage.getItem('portfolioProjects');
    const storedSkills = localStorage.getItem('portfolioSkills');

    if (storedProjects) {
      const parsedProjects = JSON.parse(storedProjects);
      // Filtrer Vue.js, GraphQL, Redis, PostgreSQL des projets
      const filteredProjects = parsedProjects.map((project: Project) => ({
        ...project,
        technologies: project.technologies.filter((tech: string) => 
          !tech.toLowerCase().includes('vue') && 
          !tech.toLowerCase().includes('graphql') && 
          !tech.toLowerCase().includes('redis') &&
          !tech.toLowerCase().includes('postgresql')
        )
      }));
      setProjects(filteredProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(filteredProjects));
    } else {
      setProjects(mockProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(mockProjects));
    }

    if (storedSkills) {
      const parsedSkills = JSON.parse(storedSkills);
      // Filtrer Vue.js, GraphQL, Redis, PostgreSQL des compétences
      const filteredSkills = parsedSkills.filter((skill: Skill) => 
        !skill.name.toLowerCase().includes('vue') && 
        !skill.name.toLowerCase().includes('graphql') && 
        !skill.name.toLowerCase().includes('redis') &&
        !skill.name.toLowerCase().includes('postgresql')
      );
      // Si après filtrage il reste des compétences, les utiliser, sinon utiliser mockSkills
      if (filteredSkills.length > 0) {
        setSkills(filteredSkills);
        localStorage.setItem('portfolioSkills', JSON.stringify(filteredSkills));
      } else {
        setSkills(mockSkills);
        localStorage.setItem('portfolioSkills', JSON.stringify(mockSkills));
      }
    } else {
      setSkills(mockSkills);
      localStorage.setItem('portfolioSkills', JSON.stringify(mockSkills));
    }
  }, []);

  return {
    projects,
    skills
  };
};