import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

export const LazyImage = ({ src, alt, placeholder, className = '', ...props }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholder || '');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                setIsLoaded(true);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75px',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback pour les navigateurs sans IntersectionObserver
        setImageSrc(src);
        setIsLoaded(true);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef!);
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      {...props}
    />
  );
};

