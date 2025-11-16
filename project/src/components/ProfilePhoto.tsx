import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProfilePhotoProps {
  src?: string | any;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ProfilePhoto = ({ 
  src, 
  alt = "Photo de profil", 
  size = 'xl' 
}: ProfilePhotoProps) => {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80'
  };

  // Placeholder SVG professionnel si pas d'image
  const PlaceholderAvatar = () => (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-4xl sm:text-5xl lg:text-6xl shadow-2xl`}>
      <span className="select-none">BMM</span>
    </div>
  );

  // Obtenir l'URL de l'image - Vite retourne directement une string
  let imageUrl: string | null = null;
  if (src) {
    if (typeof src === 'string') {
      imageUrl = src;
    } else {
      // Pour les imports Vite, essayer différentes propriétés
      imageUrl = (src as any)?.default || (src as any)?.src || String(src);
    }
  }

  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
    >
      {/* Cercle animé autour de la photo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(20, 184, 166, 0.3))',
        }}
      />
      
      {/* Bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #14b8a6, #3b82f6)',
          padding: '4px',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={alt}
              className={`${sizeClasses[size]} rounded-full object-cover w-full h-full`}
              onError={() => {
                setImageError(true);
              }}
              onLoad={() => {
                // Image chargée avec succès
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <PlaceholderAvatar />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePhoto;
