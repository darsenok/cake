import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  isDark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  title, 
  subtitle, 
  isDark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`relative py-12 md:py-24 px-4 md:px-8 transition-colors duration-300 overflow-hidden ${
        isDark 
          ? 'bg-[#E5D5C2] dark:bg-brand-dark-section' 
          : 'bg-brand-cream dark:bg-brand-dark-bg'
      } ${className}`}
    >
      {/* Background Vertical Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '10% 100%' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-16 relative">
            {/* Vertical decorative line above title */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-px h-10 bg-brand-chocolate/20 dark:bg-brand-cream/20 hidden md:block"></div>
            
            {title && (
              <h2 className="text-4xl md:text-6xl font-script text-brand-chocolate dark:text-brand-cream mb-3 md:mb-4 transition-colors duration-300 relative inline-block">
                {title}
                {/* Organic accent blob behind title */}
                <span className="absolute -z-10 -top-4 -left-6 w-16 h-16 bg-brand-berry/10 rounded-full blur-xl"></span>
              </h2>
            )}
            {subtitle && (
              <p className="text-brand-chocolate/80 dark:text-brand-cream/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                {subtitle}
              </p>
            )}
            <div className="w-16 md:w-24 h-1 bg-brand-berry mx-auto mt-4 md:mt-6 rounded-[100%] opacity-60"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;