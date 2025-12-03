import React, { useState, useEffect, useCallback } from 'react';
import Section from './Section';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const GALLERY_IMAGES = [
  "https://i.pinimg.com/736x/7f/53/a5/7f53a52481e038c1aa87f7edb3c1c051.jpg",
  "https://i.pinimg.com/736x/aa/6a/13/aa6a13488e53685d7bb799898ca43f29.jpg",
  "https://i.pinimg.com/736x/0d/3d/92/0d3d9236539ed1aad6baa8df60e7247c.jpg",
  "https://i.pinimg.com/736x/4d/ce/e6/4dcee65fad65a20f7710f66faa2bc67d.jpg",
  "https://i.pinimg.com/736x/7f/51/e0/7f51e045876fc04edfc22a3b9cc44ce9.jpg",
  "https://i.pinimg.com/736x/f6/45/5d/f6455db02a77799b8a75e245e565447b.jpg",
  "https://i.pinimg.com/736x/d7/55/6c/d7556c1b54ebadbcdce46fd2315d2181.jpg",
  "https://i.pinimg.com/736x/79/b1/b5/79b1b5a1118f1c7448a3ab92c0f6ee15.jpg",
  "https://i.pinimg.com/736x/05/09/be/0509be37dc6a317486b034bf0e2637d6.jpg",
  "https://i.pinimg.com/736x/06/00/c6/0600c6b8db34c11ba037d77d52c7b12e.jpg",
  "https://i.pinimg.com/736x/e8/77/df/e877dfe3755d97751989a7fedc4402bf.jpg",
  "https://i.pinimg.com/736x/48/c6/3e/48c63e02919e88cdae673644205d484f.jpg",
  "https://i.pinimg.com/736x/36/8a/97/368a977777fdef601da336ef5d89291c.jpg",
  "https://i.pinimg.com/736x/70/70/56/707056bdca42644f3b24c36900da350b.jpg",
  "https://i.pinimg.com/736x/b8/8f/d6/b88fd6b890834287eccb8871da1d9ff3.jpg"
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
  }, [selectedIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeModal, nextImage, prevImage]);

  return (
    <Section 
      id="gallery" 
      title="Мои работы" 
      subtitle="Вдохновение в каждом десерте"
    >
      {/* Masonry Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto max-w-7xl">
        {GALLERY_IMAGES.map((src, index) => (
          <Reveal key={index} delay={(index % 4) * 100}>
            <div 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-brand-chocolate/5 dark:bg-brand-cream/5 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <img 
                src={src} 
                alt={`Торт работа ${index + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-chocolate/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-chocolate/90 dark:bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in-up duration-300"
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
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            {/* Prev Button */}
            <button 
              className="absolute left-2 md:-left-16 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={prevImage}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Main Image */}
            <img 
              src={GALLERY_IMAGES[selectedIndex]} 
              alt="Full screen view" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-fade-in-up border-4 border-white/5"
            />

            {/* Next Button */}
            <button 
              className="absolute right-2 md:-right-16 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={nextImage}
            >
              <ChevronRight size={40} />
            </button>
            
            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm font-body tracking-widest">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;