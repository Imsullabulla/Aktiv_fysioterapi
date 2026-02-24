import React, { useRef, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
  buttonLabel?: string;
}

export interface CarouselHandle {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(({ items, buttonLabel = 'Læs mere' }, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  // Triple items so we can silently jump at the edges
  const loopedItems = [...items, ...items, ...items];

  const getCardWidth = () => {
    const el = scrollRef.current;
    if (!el) return 374;
    const firstCard = el.firstElementChild as HTMLElement;
    return firstCard ? firstCard.offsetWidth + 24 : 374; // card + gap-6
  };

  // Start scrolled to the middle copy
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = getCardWidth() * items.length;
  }, []);

  const handleScroll = useCallback(() => {
    if (isJumping.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const setWidth = getCardWidth() * items.length;

    if (el.scrollLeft < setWidth) {
      isJumping.current = true;
      el.scrollLeft += setWidth;
      isJumping.current = false;
    } else if (el.scrollLeft >= setWidth * 2) {
      isJumping.current = true;
      el.scrollLeft -= setWidth;
      isJumping.current = false;
    }
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useImperativeHandle(ref, () => ({
    scrollPrev: () => {
      scrollRef.current?.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    },
    scrollNext: () => {
      scrollRef.current?.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    },
  }));

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-44 xl:w-56 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-44 xl:w-56 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-4 md:px-0">
        {loopedItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            whileHover={{ scale: 1.012 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-none w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] aspect-[3/4] relative rounded-2xl overflow-hidden group"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 bg-charcoal/5 flex items-center justify-center">
                <span className="text-charcoal/20 font-medium italic">Indsæt billede</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                )}
                <Link
                  to={item.link}
                  className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    if (item.link === '#') e.preventDefault();
                  }}
                >
                  {buttonLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});
