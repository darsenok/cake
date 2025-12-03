import React from 'react';
import { Send, MessageCircle, AlertCircle, Calendar, Heart } from 'lucide-react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <>
      <Section 
        id="contact" 
        className="relative overflow-hidden"
        title="Как оформить заказ"
        subtitle="Сроки и контакты"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto items-stretch">
          
          {/* Block 1: Deadlines */}
          <Reveal>
            <div className="bg-[#FAF3E8] dark:bg-brand-dark-card border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden h-full transition-colors duration-300 group hover:shadow-md">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12">
                 <Calendar size={120} strokeWidth={0.5} />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-brand-chocolate dark:text-brand-cream mb-4 md:mb-6 flex items-center gap-3 transition-colors duration-300">
                 <AlertCircle className="text-brand-berry" strokeWidth={1} size={28} />
                 Сроки заказа
               </h3>
               <ul className="space-y-4 md:space-y-6 relative z-10">
                 <li className="flex gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-berry mt-2.5 flex-shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-brand-chocolate dark:text-brand-cream text-base md:text-lg transition-colors duration-300">Капкейки / Бенто-торт</h4>
                     <p className="text-brand-chocolate dark:text-brand-cream/90 text-sm md:text-base font-medium transition-colors duration-300">От 1 дня. <span className="text-brand-berry font-bold italic">Возможен СРОЧНЫЙ заказ!</span></p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-berry mt-2.5 flex-shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-brand-chocolate dark:text-brand-cream text-base md:text-lg transition-colors duration-300">Торт до 1 кг</h4>
                     <p className="text-brand-chocolate dark:text-brand-cream/90 text-sm md:text-base font-medium transition-colors duration-300">От 2 дней до события.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-berry mt-2.5 flex-shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-brand-chocolate dark:text-brand-cream text-base md:text-lg transition-colors duration-300">Торт более 1 кг</h4>
                     <p className="text-brand-chocolate dark:text-brand-cream/90 text-sm md:text-base font-medium transition-colors duration-300">От 2-3 дней.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </Reveal>

          {/* Vertical Separator */}
          <div className="hidden lg:flex justify-center h-full">
             <div className="w-px h-full border-r-2 border-dashed border-brand-chocolate/20 dark:border-brand-cream/20"></div>
          </div>

          {/* Block 2: Requirements */}
          <Reveal delay={200}>
            <div className="bg-brand-chocolate dark:bg-brand-dark-section text-brand-cream rounded-2xl border-2 border-dashed border-brand-cream/10 p-6 md:p-8 shadow-md flex flex-col justify-between h-full transition-colors duration-300 relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
               
               <div>
                 <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 relative z-10">
                   <MessageCircle className="text-brand-berry" strokeWidth={1} size={28} />
                   Что написать в сообщении?
                 </h3>
                 <p className="mb-4 md:mb-6 opacity-90 font-medium text-sm md:text-base relative z-10">
                   Для заказа напишите мне, указав:
                 </p>
                 <ul className="space-y-3 md:space-y-4 mb-8 relative z-10">
                   {[
                     'Тип десерта (торт, бенто...)',
                     'Пожелания по декору',
                     'Начинку из каталога',
                     'Дату события'
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-dashed border-white/20">
                       <span className="font-script text-lg md:text-xl text-brand-berry opacity-90">{idx + 1}.</span>
                       <span className="text-sm md:text-base font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-3 mt-auto relative z-10">
                 <Button 
                   href={SOCIAL_LINKS.whatsapp} 
                   variant="primary" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex-1 border-none justify-center rounded-lg shadow-sm"
                   icon={<MessageCircle size={18} strokeWidth={1.5} />}
                 >
                   WhatsApp
                 </Button>
                 <Button 
                   href={SOCIAL_LINKS.telegram} 
                   variant="primary" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#0088cc] hover:bg-[#0077b5] text-white flex-1 border-none justify-center rounded-lg shadow-sm"
                   icon={<Send size={18} strokeWidth={1.5} />}
                 >
                   Telegram
                 </Button>
               </div>
            </div>
          </Reveal>
        </div>

        {/* Big Footer CTA */}
        <Reveal delay={400}>
          <div className="text-center max-w-3xl mx-auto py-12 relative">
             {/* Decorative lines */}
            <div className="absolute top-1/2 left-0 w-1/4 h-px border-t border-dashed border-brand-chocolate/20 dark:border-brand-cream/20"></div>
            <div className="absolute top-1/2 right-0 w-1/4 h-px border-t border-dashed border-brand-chocolate/20 dark:border-brand-cream/20"></div>

            <p className="text-brand-chocolate/80 dark:text-brand-cream/60 mb-2 font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-300">Есть вопросы?</p>
            <h2 className="text-2xl md:text-4xl font-script text-brand-chocolate dark:text-brand-cream mb-4 md:mb-6 transition-colors duration-300">
              Ваш идеальный десерт начинается с сообщения!
            </h2>
            <div className="inline-block p-4 border border-dashed border-brand-berry/30 rounded-full bg-brand-berry/5">
              <p className="text-brand-chocolate dark:text-brand-cream/80 text-sm md:text-base transition-colors duration-300">
                Напишите мне: <strong className="whitespace-nowrap font-bold text-brand-berry">7 (962) 944-57-77</strong>
              </p>
            </div>
          </div>
        </Reveal>
        
        {/* Footer aesthetic separator */}
        <div className="flex justify-center items-center gap-4 pb-8 opacity-50">
          <div className="w-12 h-px border-t border-dashed border-brand-chocolate dark:border-brand-cream"></div>
          <Heart size={14} strokeWidth={1} className="text-brand-berry fill-brand-berry" />
          <div className="w-12 h-px border-t border-dashed border-brand-chocolate dark:border-brand-cream"></div>
        </div>

        <div className="text-center pb-8">
           <p className="font-script text-xl text-brand-chocolate dark:text-brand-cream">
            "Пусть каждый кусочек приносит радость и вдохновение"
          </p>
        </div>
        
        <div className="text-center pb-8 opacity-60 text-[10px] uppercase tracking-widest text-brand-chocolate dark:text-brand-cream font-bold">
           Homemade Baking by Ilona © {new Date().getFullYear()}
        </div>
      </Section>
    </>
  );
};

export default Contact;