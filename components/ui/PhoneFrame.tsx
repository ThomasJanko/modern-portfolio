import React from 'react';
import Image from 'next/image';

type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

// Cadre iPhone (public/images/iphone-frame.png) : la zone écran est transparente,
// on affiche le contenu (screenshot / Carousel) derrière, et le cadre par-dessus.
const SCREEN_STYLE: React.CSSProperties = {
  left: '5.8%',
  top: '0.8%',
  width: '88.4%',
  height: '96.9%',
};

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-[220px] sm:w-[260px] ${className}`} style={{ aspectRatio: '860 / 1729' }}>
      <div className="absolute overflow-hidden rounded-[20px] bg-ink sm:rounded-[24px]" style={SCREEN_STYLE}>
        {children}
      </div>
      <Image
        src="/images/iphone-frame.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none z-10 h-full w-full select-none object-contain"
        sizes="(max-width: 768px) 240px, 280px"
      />
    </div>
  );
}
