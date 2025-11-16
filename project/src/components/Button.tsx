import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  to?: never;
  href?: never;
}

interface LinkButtonProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  as: 'link';
  to: string;
  href?: never;
}

interface AnchorButtonProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
  href: string;
  to?: never;
}

type AllButtonProps = ButtonProps | LinkButtonProps | AnchorButtonProps;

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  ...props
}: AllButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (props.as === 'link') {
    const { as, to, ...linkProps } = props as LinkButtonProps;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...anchorProps } = props as AnchorButtonProps;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

