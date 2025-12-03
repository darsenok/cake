import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Initialization
  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  // Smooth Scroll Handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract ID from href (e.g., "#about" -> "about")
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);
      
      // Smooth scroll
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isOpen 
            ? 'bg-brand-cream/90 dark:bg-brand-dark-bg/90 backdrop-blur-md border-brand-chocolate/10 dark:border-brand-cream/10 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex flex-col z-50 group relative" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="font-script text-2xl md:text-3xl text-brand-chocolate dark:text-brand-cream group-hover:text-brand-berry transition-colors duration-300">
              Homemade Baking
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] font-body text-brand-chocolate dark:text-brand-cream/70 uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              by Ilona
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-brand-chocolate/90 dark:text-brand-cream/90 font-body text-xs font-bold uppercase tracking-widest hover:text-brand-berry dark:hover:text-brand-berry transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-berry transition-all duration-300 group-hover:w-full opacity-50"></span>
                </a>
              ))}
            </div>
            
            {/* Divider (Dashed for craft look) */}
            <div className="h-4 w-px border-r border-dashed border-brand-chocolate/30 dark:border-brand-cream/30"></div>

            {/* Desktop Socials / Contact / Theme Toggle */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-brand-chocolate dark:text-brand-cream hover:bg-brand-chocolate/5 dark:hover:bg-brand-cream/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
              </button>

              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank" 
                rel="noreferrer" 
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full border border-brand-chocolate/20 dark:border-brand-cream/20 bg-transparent text-brand-chocolate dark:text-brand-cream text-xs font-bold uppercase tracking-wide hover:bg-brand-chocolate hover:text-brand-cream dark:hover:bg-brand-cream dark:hover:text-brand-dark-bg transition-colors shadow-sm"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span>Связаться</span>
              </a>
            </div>
          </div>

          {/* Mobile Actions (Theme + Menu Toggle) */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="text-brand-chocolate dark:text-brand-cream z-50 p-2 hover:bg-brand-chocolate/5 dark:hover:bg-brand-cream/10 rounded-full transition-colors"
              >
                {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
              </button>
            <button 
              className="text-brand-chocolate dark:text-brand-cream z-50 p-2 hover:bg-brand-chocolate/5 dark:hover:bg-brand-cream/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-brand-cream/95 dark:bg-brand-dark-bg/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-6 pb-10">
          <div className="space-y-6 text-center">
            {NAV_ITEMS.map((item, index) => (
              <div 
                key={item.label}
                className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a 
                  href={item.href}
                  className="inline-block text-3xl font-script text-brand-chocolate dark:text-brand-cream hover:text-brand-berry transition-colors py-2"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <div 
            className={`mt-12 text-center transform transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="w-12 h-1 bg-brand-chocolate/10 dark:bg-brand-cream/10 mx-auto rounded-full mb-8 border-b border-dashed border-brand-chocolate/30"></div>
            <p className="text-brand-chocolate/60 dark:text-brand-cream/60 text-sm mb-4 font-body">Хотите сделать заказ?</p>
            <Button 
              href={SOCIAL_LINKS.whatsapp}
              variant="primary" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="shadow-xl"
            >
              Написать мне
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;