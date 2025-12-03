import React from 'react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';
import { Gift, Heart, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const CupcakeBox: React.FC<{ count: number; title: string }> = ({ count, title }) => {
  const dots = Array.from({ length: count });
  
  return (
    <div className="bg-[#FAF3E8] dark:bg-brand-dark-card rounded-xl p-4 border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <h4 className="font-bold text-brand-chocolate dark:text-brand-cream font-body text-sm uppercase tracking-wide transition-colors duration-300">{title}</h4>
      
      <div className={`bg-transparent p-3 rounded-lg border border-brand-chocolate/10 dark:border-brand-cream/10 transition-colors duration-300`}>
        <div className={`grid ${count === 6 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
          {dots.map((_, i) => (
            <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-brand-berry/60 bg-transparent shadow-sm"></div>
          ))}
        </div>
      </div>
      
      <span className="text-brand-chocolate/80 dark:text-brand-cream/60 text-xs font-bold transition-colors duration-300">{count} штук</span>
    </div>
  );
};

const Cupcakes: React.FC = () => {
  return (
    <Section id="cupcakes" isDark className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 md:pr-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-berry/20 text-brand-berryDark text-xs font-bold uppercase tracking-widest mb-2">
              <Gift size={14} strokeWidth={1} />
              <span>Идея для подарка</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-script text-brand-chocolate dark:text-brand-cream leading-tight transition-colors duration-300">
              Капкейки: <br/>
              <span className="text-brand-berryDark text-3xl md:text-5xl">Идеальный Подарок или Комплимент</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-brand-chocolate dark:text-brand-cream/90 text-base md:text-lg leading-relaxed font-body font-medium transition-colors duration-300">
              Ищете идеальный, но небольшой десерт? Капкейки — это отличный способ порадовать близких или сделать стильный комплимент гостям!
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-brand-cream/50 dark:bg-brand-dark-card/50 p-6 rounded-tr-2xl rounded-bl-2xl border-l-4 border-dotted border-brand-berry backdrop-blur-sm transition-colors duration-300">
              <p className="text-sm md:text-base text-brand-chocolate dark:text-brand-cream/90 leading-relaxed italic font-medium transition-colors duration-300">
                "Мы предлагаем широкий выбор вкусов и декора, которые легко адаптируются под ваш повод."
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="pt-4">
               <Button 
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<MessageCircle size={18} strokeWidth={1.5} />}
               >
                 Обсудить декор и вкус
               </Button>
            </div>
          </Reveal>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px self-stretch border-r-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 mx-4"></div>

        {/* Right Side: Visuals */}
        <div className="flex-1 w-full max-w-md md:pl-12">
          <Reveal delay={500}>
            <div className="bg-white/40 dark:bg-brand-dark-card/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border-2 border-dashed border-white/50 dark:border-brand-cream/10 shadow-xl relative transition-colors duration-300">
              <div className="absolute -top-4 -right-4 text-brand-berry animate-bounce">
                <Heart fill="currentColor" size={32} strokeWidth={1} />
              </div>

              <h3 className="text-center font-body font-bold text-brand-chocolate dark:text-brand-cream mb-6 transition-colors duration-300">Доступные наборы</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                   <CupcakeBox count={6} title="Мини" />
                   <CupcakeBox count={9} title="Стандарт" />
                </div>
                <CupcakeBox count={12} title="Большой" />
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-brand-chocolate/60 dark:text-brand-cream/50 font-body uppercase tracking-widest font-bold transition-colors duration-300">
                  Свежие ингредиенты • Стильный декор
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </Section>
  );
};

export default Cupcakes;