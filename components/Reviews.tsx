import React, { useRef, useState, useEffect, useCallback } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { ArrowLeft, ArrowRight, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEW_IMAGES = [
  "https://i.pinimg.com/736x/35/eb/c8/35ebc8f586e937a1f0a63141eb491147.jpg",
  "https://i.pinimg.com/736x/50/27/f9/5027f981c587cf8417c9fd9ca0f677e5.jpg",
  "https://i.pinimg.com/736x/b5/5a/1d/b55a1dab3285a848324c50eb88ceb536.jpg",
  "https://i.pinimg.com/736x/fc/8f/cc/fc8fcc942c89c83c53d12be2af77d8f7.jpg",
  "https://i.pinimg.com/736x/89/17/da/8917da0123eb895e3f78a404f82d3647.jpg",
  "https://i.pinimg.com/736x/0b/91/1d/0b911d505c1ad4e11ad0d5c2e2c9a12c.jpg",
  "https://i.pinimg.com/736x/1c/2d/1a/1c2d1a2f89a8759f53a728f562b962db.jpg",
  "https://i.pinimg.com/736x/c9/e7/ff/c9e7ff23f3cb4ba1014ed18fc464d78d.jpg",
  "https://i.pinimg.com/736x/75/a0/2e/75a02e9e37463afc3b246bcf515326f3.jpg"
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  
  // Ref to track touch dragging state to prevent accidental clicks during scroll
  const isDragging = useRef(false);
  const touchStartX = useRef(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (index: number) => {
    setSelectedReviewIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setSelectedReviewIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextReview = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedReviewIndex === null) return;
    setSelectedReviewIndex((prev) => (prev === null ? null : (prev + 1) % REVIEW_IMAGES.length));
  }, [selectedReviewIndex]);

  const prevReview = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedReviewIndex === null) return;
    setSelectedReviewIndex((prev) => (prev === null ? null : (prev - 1 + REVIEW_IMAGES.length) % REVIEW_IMAGES.length));
  }, [selectedReviewIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedReviewIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextReview();
      if (e.key === 'ArrowLeft') prevReview();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReviewIndex, closeModal, nextReview, prevReview]);

  return (
    <Section 
      id="reviews" 
      title="Слова Благодарности" 
      subtitle="Ваши эмоции — лучшая награда для меня. Живые отзывы из переписки."
      isDark
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons for the slider */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-brand-cream dark:bg-brand-dark-card rounded-full shadow-lg border border-brand-chocolate/10 flex items-center justify-center text-brand-chocolate dark:text-brand-cream hover:bg-brand-berry hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Previous review"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-brand-cream dark:bg-brand-dark-card rounded-full shadow-lg border border-brand-chocolate/10 flex items-center justify-center text-brand-chocolate dark:text-brand-cream hover:bg-brand-berry hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Next review"
        >
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>

        {/* Scroll Container */}
        <Reveal>
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEW_IMAGES.map((src, index) => (
              <div key={index} className="snap-center shrink-0 group">
                {/* Phone Mockup - Clickable */}
                <div 
                  className="w-[260px] md:w-[280px] h-[480px] md:h-[520px] bg-brand-chocolate dark:bg-[#1a1a1a] rounded-[2.5rem] border-[6px] md:border-[8px] border-brand-chocolate dark:border-[#2a2a2a] shadow-2xl overflow-hidden relative transform transition-transform duration-500 hover:-translate-y-2 cursor-zoom-in"
                  onTouchStart={(e) => {
                    isDragging.current = false;
                    touchStartX.current = e.touches[0].clientX;
                  }}
                  onTouchMove={(e) => {
                    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) {
                      isDragging.current = true;
                    }
                  }}
                  onClick={(e) => {
                    // Prevent open if user was dragging/swiping
                    if (isDragging.current) {
                      e.stopPropagation();
                      return;
                    }
                    openModal(index);
                  }}
                >
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 bg-brand-chocolate dark:bg-[#2a2a2a] rounded-b-xl z-20 pointer-events-none"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                     {/* Blurred Background Layer for filling gaps */}
                     <div 
                       className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 dark:opacity-30 scale-110"
                       style={{ backgroundImage: `url(${src})` }}
                     ></div>

                     <img 
                      src={src} 
                      alt={`Отзыв клиента ${index + 1}`} 
                      className="w-full h-full object-contain relative z-10"
                      loading="lazy"
                     />
                     
                     {/* Hover Overlay Icon */}
                     <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-chocolate/10 backdrop-blur-[1px]">
                        <div className="bg-white/90 p-3 rounded-full shadow-lg text-brand-chocolate">
                          <ZoomIn size={24} />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        
        {/* Mobile Swipe Hint */}
        <div className="text-center md:hidden animate-pulse">
           <span className="text-xs text-brand-chocolate/50 dark:text-brand-cream/50 uppercase tracking-widest font-bold">
             Листайте влево &larr; &rarr;
           </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedReviewIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-chocolate/95 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in-up duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-50"
            onClick={closeModal}
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-md w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Prev Button */}
            <button 
              className="absolute -left-12 md:-left-20 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={prevReview}
            >
              <ChevronLeft size={40} />
            </button>

            <img 
              src={REVIEW_IMAGES[selectedReviewIndex]} 
              alt="Full screen review" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-fade-in-up"
            />

            {/* Next Button */}
            <button 
              className="absolute -right-12 md:-right-20 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={nextReview}
            >
              <ChevronRight size={40} />
            </button>
            
            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm font-body tracking-widest">
              {selectedReviewIndex + 1} / {REVIEW_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Reviews;