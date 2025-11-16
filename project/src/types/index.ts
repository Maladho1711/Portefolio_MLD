export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  technologies: string[];
  createdAt: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}