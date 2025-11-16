import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ value, duration = 2000, className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extraire le nombre de la valeur (gérer les cas comme "15+", "100%")
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const hasPlus = value.includes('+');
    const hasPercent = value.includes('%');

    const increment = numericValue / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const hasPlus = value.includes('+');
  const hasPercent = value.includes('%');
  const displayValue = hasPercent 
    ? `${count}%` 
    : hasPlus 
    ? `${count}+` 
    : count.toString();

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : '0'}
    </span>
  );
};

