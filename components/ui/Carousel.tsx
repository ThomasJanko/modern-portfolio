'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

type CarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onImageClick?: (index: number) => void;
};

export function Carousel({ images, alt, className = '', sizes, priority = false, onImageClick }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const safeIndex = Math.min(index, images.length - 1);

  const goTo = (i: number) => setIndex(((i % images.length) + images.length) % images.length);

  const handlePrev = (event: React.MouseEvent) => {
    event.stopPropagation();
    goTo(safeIndex - 1);
  };

  const handleNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    goTo(safeIndex + 1);
  };

  const image = (
    <Image
      src={images[safeIndex]}
      alt={alt}
      fill
      className="h-full w-full object-cover"
      sizes={sizes ?? '(max-width: 768px) 100vw, 440px'}
      priority={priority}
    />
  );

  return (
    <div className={`group/carousel relative h-full w-full overflow-hidden ${className}`}>
      {onImageClick ? (
        <button
          type="button"
          onClick={() => onImageClick(safeIndex)}
          aria-label={alt}
          className="block h-full w-full cursor-zoom-in"
        >
          {image}
        </button>
      ) : (
        image
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Image précédente"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/45 text-ivory backdrop-blur-sm transition-colors hover:bg-ink/70"
          >
            <HiChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Image suivante"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/45 text-ivory backdrop-blur-sm transition-colors hover:bg-ink/70"
          >
            <HiChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(i);
                }}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
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
