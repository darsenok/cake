import React from 'react';
import Section from './Section';
import { Award, Clock, ChefHat, Heart, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <Section id="about" title="Обо мне" isDark>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-4 items-center">
        
        {/* Left Column: Visual */}
        <div className="flex justify-center w-full">
          <Reveal>
            <div className="relative w-full max-w-[300px] md:max-w-sm aspect-[4/5] mx-auto">
              {/* Decorative Back Layers - Organic */}
              <div className="absolute inset-0 bg-brand-chocolate/5 dark:bg-brand-cream/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform -rotate-6 scale-105 transition-transform hover:rotate-0 duration-700"></div>
              
              {/* Main Aesthetic Card - Organic Blob Shape */}
              <div className="absolute inset-0 bg-[#FAF3E8] dark:bg-brand-dark-card border border-brand-chocolate/10 dark:border-brand-cream/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex flex-col items-center justify-center p-6 md:p-8 shadow-xl relative overflow-hidden group transition-colors duration-300">
                
                {/* Background Blur Blobs */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-berry/5 rounded-full blur-2xl transition-all duration-1000 group-hover:bg-brand-berry/10"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-chocolate/5 dark:bg-brand-cream/5 rounded-full blur-3xl transition-all duration-1000 group-hover:bg-brand-chocolate/10"></div>

                {/* Central Icon */}
                <div className="relative z-10 mb-6 md:mb-8 p-4 md:p-6 rounded-full border-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20 group-hover:border-brand-berry/30 transition-colors duration-500">
                  <ChefHat className="text-brand-chocolate/80 dark:text-brand-cream/80 group-hover:text-brand-berry transition-colors duration-500 w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
                </div>

                {/* Typography Art */}
                <div className="text-center z-10">
                  <h3 className="font-script text-4xl md:text-5xl text-brand-berryDark mb-2 transform transition-transform group-hover:scale-105 duration-500">Made with</h3>
                  <h3 className="font-script text-5xl md:text-6xl text-brand-chocolate dark:text-brand-cream mb-4 md:mb-6 transform transition-transform group-hover:scale-105 duration-500 delay-75">Love</h3>
                  <div className="w-10 md:w-12 h-1 bg-brand-berry/30 mx-auto rounded-full mb-4"></div>
                </div>

                {/* Floating Decor */}
                <Heart className="absolute top-12 right-16 text-brand-berry/20 animate-pulse" size={20} />
                <Sparkles className="absolute bottom-20 left-16 text-brand-chocolate/20 dark:text-brand-cream/20" size={24} />
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Center: Vertical Divider (Desktop Only) */}
        <div className="hidden md:flex justify-center h-full min-h-[400px]">
           <div className="w-px h-full bg-gradient-to-b from-transparent via-brand-chocolate/20 dark:via-brand-cream/20 to-transparent"></div>
        </div>

        {/* Right Column: Text */}
        <div className="space-y-6 md:pl-8">
          <Reveal delay={200}>
            <h3 className="text-3xl md:text-4xl font-script text-brand-berryDark leading-tight text-center md:text-left relative">
              <span className="absolute -top-6 -left-6 text-brand-chocolate/5 dark:text-brand-cream/5 text-6xl opacity-50 font-sans font-bold">01.</span>
              От Нежных Капкейков до Креативных Тортов
            </h3>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="font-body text-brand-chocolate/80 dark:text-brand-cream/80 leading-loose text-base md:text-lg transition-colors duration-300">
              Моя кондитерская история началась недавно, но очень активно! Путь от нежных капкейков быстро привёл меня к созданию более сложных и креативных десертов.
            </p>
          </Reveal>
          
          <div className="py-4 md:py-6 space-y-6 relative">
             <div className="absolute left-[22px] top-6 bottom-6 w-px bg-brand-chocolate/10 dark:bg-brand-cream/10 border-l border-dashed border-brand-chocolate/30"></div>
            <Reveal delay={400}>
              <div className="flex gap-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-[1rem] rounded-tr-[2rem] bg-brand-berry/10 flex items-center justify-center text-brand-berry">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-chocolate dark:text-brand-cream mb-1 transition-colors duration-300">Профессиональное качество</h4>
                  <p className="text-sm text-brand-chocolate/70 dark:text-brand-cream/70 leading-relaxed transition-colors duration-300">
                    4 года профильного образования. Я понимаю химию процессов и гарантирую качество.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={500}>
              <div className="flex gap-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-[1rem] rounded-bl-[2rem] bg-brand-berry/10 flex items-center justify-center text-brand-berry">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-chocolate dark:text-brand-cream mb-1 transition-colors duration-300">Надёжность и опыт</h4>
                  <p className="text-sm text-brand-chocolate/70 dark:text-brand-cream/70 leading-relaxed transition-colors duration-300">
                    Более 9 месяцев непрерывной выпечки. Сотни выполненных заказов.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={600}>
            <div className="bg-brand-chocolate/5 dark:bg-brand-dark-card p-6 rounded-tr-[3rem] rounded-bl-[3rem] border-l-4 border-brand-berry italic transition-colors duration-300">
              <p className="font-body text-brand-chocolate dark:text-brand-cream text-base font-medium transition-colors duration-300">
                "Заказывая у меня, вы получаете домашний десерт, приготовленный со знанием дела!"
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;