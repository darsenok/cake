import React from 'react';
import Section from './Section';
import { PRICES } from '../constants';
import { Star, Package, Ruler, Gift } from 'lucide-react';
import Reveal from './Reveal';

const Pricing: React.FC = () => {
  return (
    <Section 
      id="pricing" 
      title="Стоимость" 
      subtitle="Честные цены за натуральные продукты."
      isDark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-12">
        {PRICES.map((category, index) => (
          <Reveal key={category.category} delay={index * 100}>
            <div 
              className={`bg-[#FAF3E8] dark:bg-brand-dark-card p-6 md:p-8 rounded-t-xl shadow-sm relative h-full transition-colors duration-300 mask-jagged-bottom pb-12`}
            >
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 bg-brand-chocolate/5 pointer-events-none mix-blend-multiply opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}></div>

              <h3 className="text-lg md:text-xl font-bold text-brand-chocolate dark:text-brand-cream mb-6 font-body uppercase tracking-wider border-b-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 pb-4 transition-colors duration-300 relative z-10 text-center">
                {category.category}
              </h3>
              
              <ul className="space-y-5 relative z-10">
                {category.items.map((item) => (
                  <li key={item.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group">
                    <div className="flex items-center gap-2">
                      {item.isHighlight && <Star size={14} strokeWidth={1} className="text-brand-berry fill-brand-berry" />}
                      <span className="font-body text-brand-chocolate dark:text-brand-cream font-bold transition-colors duration-300">{item.title}</span>
                    </div>
                    
                    {/* Dots filler - darker */}
                    <div className="hidden sm:block flex-1 mx-4 border-b border-dashed border-brand-chocolate/40 dark:border-brand-cream/40 relative top-[-4px]"></div>
                    
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                      {item.detail && (
                        <span className="text-xs text-brand-chocolate/80 dark:text-brand-cream/60 font-medium italic whitespace-nowrap transition-colors duration-300">{item.detail}</span>
                      )}
                      <span className={`font-bold font-body whitespace-nowrap ${item.isHighlight ? 'text-brand-berry text-lg md:text-xl' : 'text-brand-berryDark text-base md:text-lg'}`}>
                        {item.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Vertical divider visually separating main prices from info */}
      <div className="flex justify-center mb-10 md:mb-12 opacity-30">
        <div className="h-12 w-px border-l-2 border-dashed border-brand-chocolate dark:border-brand-cream"></div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
        {/* Dimensions */}
        <Reveal delay={200}>
          <div className="bg-[#FAF3E8] dark:bg-brand-dark-card p-5 md:p-6 rounded-xl border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 text-center h-full transition-colors duration-300 shadow-sm">
            <div className="w-12 h-12 bg-transparent border border-brand-chocolate/10 dark:border-brand-cream/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-brand-berry">
              <Ruler size={24} strokeWidth={1} />
            </div>
            <h4 className="font-bold text-brand-chocolate dark:text-brand-cream mb-2 transition-colors duration-300">Размеры тортов</h4>
            <p className="text-brand-chocolate/90 dark:text-brand-cream/80 text-sm mb-1 font-medium transition-colors duration-300">1 кг — 10-12 см диаметр</p>
            <p className="text-brand-chocolate/90 dark:text-brand-cream/80 text-sm font-medium transition-colors duration-300">2 кг — 15 см диаметр</p>
          </div>
        </Reveal>

        {/* Packaging */}
        <Reveal delay={300}>
          <div className="bg-[#FAF3E8] dark:bg-brand-dark-card p-5 md:p-6 rounded-xl border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 text-center h-full transition-colors duration-300 shadow-sm">
            <div className="w-12 h-12 bg-transparent border border-brand-chocolate/10 dark:border-brand-cream/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-brand-berry">
              <Package size={24} strokeWidth={1} />
            </div>
            <h4 className="font-bold text-brand-chocolate dark:text-brand-cream mb-2 transition-colors duration-300">Упаковка</h4>
            <p className="text-brand-chocolate/90 dark:text-brand-cream/80 text-sm mb-1 font-medium transition-colors duration-300">Классическая упаковка входит в стоимость.</p>
            <p className="text-brand-chocolate/80 dark:text-brand-cream/60 text-xs italic font-semibold transition-colors duration-300">Открытка по желанию</p>
          </div>
        </Reveal>

        {/* Gifts */}
        <Reveal delay={400}>
          <div className="bg-[#FAF3E8] dark:bg-brand-dark-card p-5 md:p-6 rounded-xl border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 text-center h-full transition-colors duration-300 shadow-sm">
            <div className="w-12 h-12 bg-transparent border border-brand-chocolate/10 dark:border-brand-cream/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-brand-berry">
              <Gift size={24} strokeWidth={1} />
            </div>
            <h4 className="font-bold text-brand-chocolate dark:text-brand-cream mb-2 transition-colors duration-300">Бонус</h4>
            <p className="text-brand-chocolate/90 dark:text-brand-cream/80 text-sm font-medium transition-colors duration-300">
              Свечи в подарок <span className="text-lg">🕯️</span> <br/>при заказе торта от 2-х кг
            </p>
          </div>
        </Reveal>
      </div>

      {/* Important Note */}
      <Reveal delay={500}>
        <div className="p-6 md:p-8 bg-brand-cream/50 dark:bg-brand-dark-card/50 rounded-lg border-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 max-w-3xl mx-auto transition-colors duration-300 text-center">
          <h4 className="text-brand-berry font-bold text-lg mb-3 inline-block border-b border-brand-berry/30 pb-1">
            Важная информация по декору
          </h4>
          <div className="space-y-2 text-brand-chocolate dark:text-brand-cream text-sm md:text-base font-medium transition-colors duration-300">
            <p>
              Декор рассчитывается индивидуально. Фигурки — за 3-4 дня. Корона — за 4 дня.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Pricing;