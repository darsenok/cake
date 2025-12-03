import React from 'react';
import Section from './Section';
import { FILLINGS } from '../constants';
import { Filling } from '../types';
import { Cake, Gift, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const ProductCard: React.FC<{ filling: Filling; index: number }> = ({ filling, index }) => {
  let Icon = Cake;
  if (filling.category === 'bento') Icon = Gift;
  if (filling.category === 'premium') Icon = Sparkles;

  const premiumBorderClass = filling.category === 'premium' ? 'dark:border-brand-accent/40' : 'dark:border-brand-cream/20';
  
  // "Craft Paper" irregular shape + Dashed Border
  const cardRadius = index % 2 === 0 
    ? 'rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md' 
    : 'rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md';

  return (
    <div className={`group relative bg-[#FAF3E8] dark:bg-brand-dark-card ${cardRadius} p-5 md:p-6 border-2 border-dashed border-brand-chocolate/20 ${premiumBorderClass} hover:border-brand-berry/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden h-full`}>
      {/* Decorative background watermark (Sketch style) */}
      <div className="absolute -bottom-6 -right-6 text-brand-chocolate/5 dark:text-brand-cream/5 group-hover:text-brand-berry/10 transition-colors transform -rotate-12">
        <Icon size={120} strokeWidth={0.5} className="md:w-[140px] md:h-[140px]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="text-lg md:text-xl font-bold text-brand-chocolate dark:text-brand-cream font-body leading-tight pt-1 transition-colors duration-300">
            {filling.name}
          </h4>
          <div className="flex-shrink-0 p-2 border border-brand-chocolate/10 dark:border-brand-cream/10 rounded-full text-brand-berry group-hover:bg-brand-berry group-hover:text-white transition-colors duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
            {/* Thin Sketch Icon */}
            <Icon size={20} strokeWidth={1} className="transform group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </div>

        {/* Dashed Separator */}
        <div className="w-12 h-px border-b border-dashed border-brand-chocolate/40 dark:border-brand-cream/30 mb-4 group-hover:w-full group-hover:border-brand-berry/40 transition-all duration-500"></div>

        <p className="text-brand-chocolate/90 dark:text-brand-cream/80 text-sm md:text-base leading-relaxed font-body font-medium transition-colors duration-300">
          {filling.description}
        </p>
      </div>
    </div>
  );
};

const Catalog: React.FC = () => {
  const bentoFillings = FILLINGS.filter(f => f.category === 'bento');
  const standardFillings = FILLINGS.filter(f => f.category === 'standard');
  const premiumFillings = FILLINGS.filter(f => f.category === 'premium');

  return (
    <Section 
      id="catalog" 
      title="Начинки и Вкусы" 
      subtitle="Выберите идеальное сочетание бисквита и крема. Каждая начинка сбалансирована до совершенства."
    >
      {/* Timeline Connector - Dashed Line */}
      <div className="relative border-l-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 ml-4 md:ml-0 md:border-l-0 md:space-y-20 space-y-16 pl-8 md:pl-0">
        
        {/* Bento */}
        <div className="relative">
          {/* Timeline Dot (Sketchy) */}
          <div className="absolute -left-[39px] top-0 w-6 h-6 rounded-full bg-transparent border-2 border-brand-berry border-dashed md:hidden"></div>
          
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-6 relative">
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-script text-brand-berryDark mb-2 flex items-center gap-3">
                  <Gift className="text-brand-berry md:w-7 md:h-7" size={24} strokeWidth={1} />
                  Бенто Торты
                </h3>
                <div className="text-brand-chocolate dark:text-brand-cream font-body space-y-1 pl-1 text-sm md:text-base transition-colors duration-300">
                  <p className="font-bold">
                    ⚖️ 450-500гр (на 1-2х человек)
                  </p>
                  <p className="text-sm font-medium opacity-80">
                    В комплекте: ложечка, бокс, свечка.
                  </p>
                </div>
              </div>
               {/* Horizontal dashed line for desktop */}
              <div className="hidden md:block flex-1 border-t-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 self-center"></div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bentoFillings.map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                <ProductCard filling={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Standard */}
        <div className="relative">
          <div className="absolute -left-[39px] top-0 w-6 h-6 rounded-full bg-transparent border-2 border-brand-berry border-dashed md:hidden"></div>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-6 relative">
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-script text-brand-berryDark mb-2 flex items-center gap-3">
                  <Cake className="text-brand-berry md:w-7 md:h-7" size={24} strokeWidth={1} />
                  Классика (Стандарт)
                </h3>
                <div className="text-brand-chocolate dark:text-brand-cream font-body space-y-1 pl-1 text-sm md:text-base transition-colors duration-300">
                  <p className="font-bold">
                    ⚖️ Торт от 1 кг
                  </p>
                </div>
              </div>
               <div className="hidden md:block flex-1 border-t-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 self-center"></div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {standardFillings.map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                 <ProductCard filling={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Premium */}
        <div className="relative">
          <div className="absolute -left-[39px] top-0 w-6 h-6 rounded-full bg-transparent border-2 border-brand-berry border-dashed md:hidden"></div>
          <Reveal>
             <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-6 relative">
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-script text-brand-berryDark mb-2 flex items-center gap-3">
                  <Sparkles className="text-brand-berry md:w-7 md:h-7" size={24} strokeWidth={1} />
                  Премиум Вкусы
                </h3>
                <div className="text-brand-chocolate dark:text-brand-cream font-body space-y-1 pl-1 text-sm md:text-base transition-colors duration-300">
                  <p className="font-bold">
                    ⚖️ Торт от 1 кг
                  </p>
                </div>
              </div>
              <div className="hidden md:block flex-1 border-t-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 self-center"></div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {premiumFillings.map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                 <ProductCard filling={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Catalog;