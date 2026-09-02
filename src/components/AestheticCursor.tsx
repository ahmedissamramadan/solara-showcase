import React, { useEffect, useRef } from 'react';

export const AestheticCursor: React.FC = () => {
  const auraRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef<boolean>(false);
  const isVisibleRef = useRef<boolean>(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (auraRef.current) auraRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }

      // Direct update of the center dot with no React state re-render
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Check interactive target efficiently
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('button, a, input, [role="button"], canvas, .cursor-pointer, label');
        if (isInteractive !== isHoveredRef.current) {
          isHoveredRef.current = isInteractive;
          if (auraRef.current) {
            if (isInteractive) {
              auraRef.current.classList.add('w-16', 'h-16', 'scale-125', 'border-solara-gold', 'bg-solara-gold/20');
              auraRef.current.classList.remove('w-12', 'h-12', 'scale-100', 'border-solara-gold/40', 'bg-solara-gold/5');
            } else {
              auraRef.current.classList.remove('w-16', 'h-16', 'scale-125', 'border-solara-gold', 'bg-solara-gold/20');
              auraRef.current.classList.add('w-12', 'h-12', 'scale-100', 'border-solara-gold/40', 'bg-solara-gold/5');
            }
          }
          if (dotRef.current) {
            if (isInteractive) {
              dotRef.current.classList.add('w-3', 'h-3', 'bg-white');
              dotRef.current.classList.remove('w-2', 'h-2', 'bg-solara-gold');
            } else {
              dotRef.current.classList.remove('w-3', 'h-3', 'bg-white');
              dotRef.current.classList.add('w-2', 'h-2', 'bg-solara-gold');
            }
          }
        }
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      if (auraRef.current) auraRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Easing loop directly modifying DOM style transform without triggering React renders
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animFrame = requestAnimationFrame(loop);
    };
    animFrame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block select-none">
      {/* Trailing Aura Ring */}
      <div
        ref={auraRef}
        className="fixed -top-6 -left-6 rounded-full border border-solara-gold/40 bg-solara-gold/5 transition-[width,height,background-color,border-color,transform] duration-150 ease-out will-change-transform w-12 h-12 opacity-0"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Center Precision Point */}
      <div
        ref={dotRef}
        className="fixed -top-1 -left-1 rounded-full bg-solara-gold shadow-gold-glow will-change-transform w-2 h-2 opacity-0"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};
