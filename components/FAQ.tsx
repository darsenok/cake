import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp, HelpCircle, Truck, Gem, CreditCard, Leaf, Ban, Check } from 'lucide-react';
import Reveal from './Reveal';

const FAQItem: React.FC<{ 
  question: string; 
  answer: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void;
  icon?: React.ReactNode;
}> = ({ 
  question, 
  answer, 
  isOpen, 
  onClick,
  icon
}) => {
  return (
    <div className="border-b-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 last:border-none transition-colors duration-300">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group gap-4"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div className={`text-brand-berry transition-transform duration-300 ${isOpen ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}>
              {icon}
            </div>
          )}
          <span className={`text-lg md:text-xl font-bold font-body transition-colors duration-300 leading-tight ${isOpen ? 'text-brand-berry' : 'text-brand-chocolate dark:text-brand-cream group-hover:text-brand-berry'}`}>
            {question}
          </span>
        </div>
        
        <div className={`flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-brand-berry/10 text-brand-berry' : 'bg-transparent text-brand-chocolate/40 dark:text-brand-cream/40 group-hover:text-brand-berry'}`}>
          {isOpen ? <ChevronUp size={24} strokeWidth={1.5} /> : <ChevronDown size={24} strokeWidth={1.5} />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-brand-chocolate dark:text-brand-cream/90 leading-relaxed font-body font-medium transition-colors duration-300 pl-0 md:pl-10 text-sm md:text-base space-y-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const faqData = [
    {
      icon: <Truck size={24} strokeWidth={1} />,
      question: "Доставка и Получение Заказа",
      answer: (
        <>
          <p>
            Мы работаем по системе <strong>самовывоза</strong> с указанного адреса. 
          </p>
          <p className="mt-2">
            Также вы можете самостоятельно оформить доставку с помощью сервиса <strong>Яндекс.Курьер</strong> на ваше имя. 
            Я бережно передам готовый десерт вашему курьеру, который доставит его прямо к вашей двери.
          </p>
        </>
      )
    },
    {
      icon: <Gem size={24} strokeWidth={1} />,
      question: "Из чего складывается цена?",
      answer: (
        <>
          <p className="mb-3">
            Цена на мои изделия — это отражение бескомпромиссного качества и подхода "всё включено":
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-berry flex-shrink-0"></div>
              <div>
                <strong className="block text-brand-berryDark">Премиум-Ингредиенты</strong>
                <span className="opacity-90">Я использую только качественные, дорогие продукты (сливочное масло 82.5%, натуральный шоколад), полностью исключая маргарин, стабилизаторы и прочие Е-добавки.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-berry flex-shrink-0"></div>
              <div>
                <strong className="block text-brand-berryDark">Удобство</strong>
                <span className="opacity-90">В стоимость уже включены все необходимые элементы (например, красивая упаковка, ложечки, свечи). Вы получаете готовый набор без скрытых доплат.</span>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      icon: <CreditCard size={24} strokeWidth={1} />,
      question: "Какова политика предоплаты?",
      answer: (
        <>
          <p className="mb-3">
            Для подтверждения и начала работы необходимо внести предоплату, которая гарантирует бронирование даты и закупку свежих продуктов:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-brand-chocolate/5 dark:bg-brand-cream/5 p-3 rounded-lg border border-brand-chocolate/10 dark:border-brand-cream/10 text-center">
              <span className="block font-bold text-brand-berry mb-1">Бенто-торты</span>
              <span className="text-xs font-bold uppercase tracking-wide">100% Предоплата</span>
            </div>
            <div className="bg-brand-chocolate/5 dark:bg-brand-cream/5 p-3 rounded-lg border border-brand-chocolate/10 dark:border-brand-cream/10 text-center">
              <span className="block font-bold text-brand-berry mb-1">Капкейки</span>
              <span className="text-xs font-bold uppercase tracking-wide">100% Предоплата</span>
            </div>
            <div className="bg-brand-chocolate/5 dark:bg-brand-cream/5 p-3 rounded-lg border border-brand-chocolate/10 dark:border-brand-cream/10 text-center">
              <span className="block font-bold text-brand-berry mb-1">Торты от 1 кг</span>
              <span className="text-xs font-bold uppercase tracking-wide">50% Предоплата</span>
            </div>
          </div>
        </>
      )
    },
    {
      icon: <Leaf size={24} strokeWidth={1} />,
      question: "Специальные требования к составу",
      answer: (
        <>
          <p className="mb-3">Я готова адаптировать рецептуру под ваши потребности!</p>
          <ul className="space-y-2 mb-4">
             <li className="flex items-center gap-2">
                <Check size={16} className="text-brand-berry" />
                <span><strong>Безлактозные торты:</strong> Да, используя проверенные заменители.</span>
             </li>
             <li className="flex items-center gap-2">
                <Check size={16} className="text-brand-berry" />
                <span><strong>Без яиц:</strong> Возможно по запросу.</span>
             </li>
             <li className="flex items-center gap-2">
                <Check size={16} className="text-brand-berry" />
                <span><strong>"Чистый" Состав:</strong> Без маргарина и искусственных добавок.</span>
             </li>
          </ul>
          <p className="text-xs italic opacity-80 border-l-2 border-brand-berry pl-3">
            Важно: Я могу использовать пищевые красители для яркого декора, но всегда заранее предупреждаю об этом.
          </p>
        </>
      )
    },
    {
      icon: <Ban size={24} strokeWidth={1} />,
      question: "Работаете ли вы с мастикой?",
      answer: (
        <p>
          Нет, я <strong className="text-brand-berryDark">не работаю с мастикой</strong> в декоре. Для создания фигурок и сложного оформления я использую другие, более современные, эстетичные и, главное, вкусные техники (крем-чиз, шоколад, ганаш).
        </p>
      )
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section 
      id="faq" 
      title="Важные Вопросы" 
      subtitle="Всё, что нужно знать перед заказом"
      isDark // Using the darker background to separate from Pricing and Contact
    >
      <Reveal>
        <div className="max-w-4xl mx-auto bg-[#FAF3E8] dark:bg-brand-dark-card rounded-3xl p-6 md:p-12 shadow-lg border-2 border-dashed border-brand-chocolate/10 dark:border-brand-cream/10 relative overflow-hidden transition-colors duration-300">
          
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 text-brand-chocolate/5 dark:text-brand-cream/5 rotate-12 transition-colors duration-300 pointer-events-none">
            <HelpCircle size={200} strokeWidth={0.5} />
          </div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-brand-berry/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-2">
            {faqData.map((item, index) => (
              <FAQItem 
                key={index}
                icon={item.icon}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default FAQ;