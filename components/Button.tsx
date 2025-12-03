import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  icon,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 text-sm md:text-base";
  
  const variants = {
    primary: "bg-brand-berry text-white hover:bg-brand-berryDark shadow-md",
    secondary: "bg-brand-chocolate text-brand-cream hover:bg-opacity-90 shadow-md",
    outline: "border-2 border-brand-chocolate text-brand-chocolate hover:bg-brand-chocolate hover:text-brand-cream",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target={target} 
        rel={rel}
      >
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;