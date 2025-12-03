import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=1920" 
          alt="Аппетитный торт с ягодами" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Overlay: Stronger opacity for better text contrast */}
        <div className="absolute inset-0 bg-brand-cream/60 dark:bg-black/60 backdrop-blur-[2px] transition-colors duration-300"></div>
        
        {/* Gradient: Smoother fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-brand-cream/50 dark:from-brand-dark-bg dark:via-transparent dark:to-brand-dark-bg/50 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        <span className="inline-block py-1.5 px-5 rounded-full bg-brand-chocolate text-brand-cream dark:bg-brand-cream dark:text-brand-dark-bg text-xs md:text-sm font-bold mb-6 tracking-widest uppercase animate-fade-in-up shadow-lg">
          Ручная работа
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-script text-brand-chocolate dark:text-brand-cream mb-6 md:mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-sm transition-colors duration-300">
          Торты и Капкейки с Душой.<br/>
          <span className="text-brand-berryDark dark:text-brand-berry">Сделано Илоной.</span>
        </h1>
        
        <div className="animate-fade-in-up delay-200 inline-block rounded-[2rem] rounded-tr-[4rem] rounded-bl-[4rem] p-6 backdrop-blur-md bg-brand-cream/40 dark:bg-black/40 mb-12 md:mb-16 border border-brand-chocolate/5 dark:border-brand-cream/10 shadow-sm">
          <p className="text-base md:text-2xl font-body font-semibold text-brand-chocolate dark:text-brand-cream max-w-2xl mx-auto leading-relaxed drop-shadow-sm transition-colors duration-300">
            Я Илона. Готовлю с любовью, используя только свежие ингредиенты. Ваш идеальный десерт ждет!
          </p>
        </div>
        
        {/* Designer Solution: Rectangular Stylish Button */}
        <a 
          href="#catalog" 
          onClick={handleScrollToCatalog}
          className="animate-fade-in-up delay-300 group flex items-center gap-4 px-8 py-5 bg-brand-cream/80 dark:bg-brand-dark-card/80 backdrop-blur-md border border-brand-chocolate/20 dark:border-brand-cream/20 rounded-xl hover:bg-brand-chocolate hover:border-brand-chocolate hover:text-brand-cream dark:hover:bg-brand-cream dark:hover:text-brand-dark-bg transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer z-20"
        >
          <span className="font-body font-bold text-sm md:text-base uppercase tracking-[0.2em] text-brand-chocolate dark:text-brand-cream group-hover:text-brand-cream dark:group-hover:text-brand-dark-bg transition-colors duration-300">
            Выбери и закажи десерт
          </span>
          <div className="w-px h-5 bg-brand-chocolate/40 dark:bg-brand-cream/40 group-hover:bg-brand-cream/40 dark:group-hover:bg-brand-dark-bg/40 transition-colors duration-300"></div>
          <ArrowDown size={20} className="text-brand-chocolate dark:text-brand-cream group-hover:text-brand-cream dark:group-hover:text-brand-dark-bg transition-colors duration-300 group-hover:translate-y-1" />
        </a>
      </div>

      {/* Organic Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-[#E5D5C2] dark:text-brand-dark-section transition-colors duration-300">
        <svg viewBox="0 0 1440 100" className="fill-current w-full h-auto block" preserveAspectRatio="none">
           <path d="M0,60 C200,80 400,20 600,60 C800,100 1000,40 1200,60 C1300,70 1400,80 1440,80 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;