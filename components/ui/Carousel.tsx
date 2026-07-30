'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

type CarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onImageClick?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export function Carousel({
  images,
  alt,
  className = '',
  sizes,
  priority = false,
  onImageClick,
  autoPlay = false,
  autoPlayInterval = 4200,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevIndexRef = useRef(0);
  const indexRef = useRef(0);
  const hasMultiple = images.length > 1;
  const safeIndex = Math.min(index, images.length - 1);
  const prevIndex = prevIndexRef.current;

  indexRef.current = safeIndex;

  // Chaque carousel démarre avec un intervalle légèrement différent pour éviter
  // que toutes les cartes ne défilent en même temps (effet "synchronisé" pas naturel).
  const intervalRef = useRef(autoPlayInterval + Math.random() * 2000);

  const goTo = (i: number, dir?: 1 | -1) => {
    const next = ((i % images.length) + images.length) % images.length;
    if (next === indexRef.current) return;

    prevIndexRef.current = indexRef.current;
    setDirection(dir ?? (next > indexRef.current ? 1 : -1));
    setIsAnimating(true);
    setIndex(next);
  };

  useEffect(() => {
    if (!isAnimating) return undefined;
    const id = window.setTimeout(() => setIsAnimating(false), 500);
    return () => window.clearTimeout(id);
  }, [isAnimating, safeIndex]);

  useEffect(() => {
    if (!autoPlay || !hasMultiple || isPaused) return undefined;

    const id = setInterval(() => {
      goTo(indexRef.current + 1, 1);
    }, intervalRef.current);

    return () => clearInterval(id);
    // goTo closes over images.length; images.length is in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, hasMultiple, isPaused, images.length]);

  const handlePrev = (event: React.MouseEvent) => {
    event.stopPropagation();
    goTo(safeIndex - 1, -1);
  };

  const handleNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    goTo(safeIndex + 1, 1);
  };

  const slideClass = (i: number) => {
    const isActive = i === safeIndex;
    const isPrev = isAnimating && i === prevIndex;

    if (isActive && isAnimating) {
      return direction > 0 ? 'z-[1] animate-carouselInRight' : 'z-[1] animate-carouselInLeft';
    }
    if (isPrev) {
      return direction > 0 ? 'z-0 animate-carouselOutLeft' : 'z-0 animate-carouselOutRight';
    }
    if (isActive) return 'z-[1] translate-x-0 opacity-100';
    return 'pointer-events-none z-0 opacity-0';
  };

  const slides = (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <div key={`${src}-${i}`} aria-hidden={i !== safeIndex} className={`absolute inset-0 ${slideClass(i)}`}>
          <Image
            src={src}
            alt={`${alt}${hasMultiple ? ` — ${i + 1}` : ''}`}
            fill
            className="h-full w-full object-contain"
            sizes={sizes ?? '(max-width: 768px) 100vw, 440px'}
            priority={priority && i === 0}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`group/carousel relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {onImageClick ? (
        <button
          type="button"
          onClick={() => onImageClick(safeIndex)}
          aria-label={alt}
          className="block h-full w-full cursor-zoom-in"
        >
          {slides}
        </button>
      ) : (
        slides
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Image précédente"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/45 text-ivory opacity-100 backdrop-blur-sm transition-opacity hover:bg-ink/70 md:opacity-0 md:group-hover/carousel:opacity-100 md:focus-visible:opacity-100"
          >
            <HiChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Image suivante"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/45 text-ivory opacity-100 backdrop-blur-sm transition-opacity hover:bg-ink/70 md:opacity-0 md:group-hover/carousel:opacity-100 md:focus-visible:opacity-100"
          >
            <HiChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 opacity-100 transition-opacity md:opacity-0 md:group-hover/carousel:opacity-100 md:focus-within:opacity-100">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(i);
                }}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === safeIndex ? 'w-4 bg-ivory' : 'w-1.5 bg-ivory/50 hover:bg-ivory/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
