import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export const Section = ({ 
  children, 
  className = '', 
  id,
  background = 'white',
  padding = 'lg'
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-900 dark:bg-black text-white',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20',
  };

  const paddingClasses = {
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-20',
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

