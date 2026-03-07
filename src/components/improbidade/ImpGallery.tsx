'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: '/fotoscarrossel/1.png', alt: 'Evento Plenum 1' },
  { src: '/fotoscarrossel/2.png', alt: 'Evento Plenum 2' },
  { src: '/fotoscarrossel/3.png', alt: 'Evento Plenum 3' },
  { src: '/fotoscarrossel/4.png', alt: 'Evento Plenum 4' },
  { src: '/fotoscarrossel/5.png', alt: 'Evento Plenum 5' },
];

export default function ImpGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-title', {
        scrollTrigger: { trigger: '.gallery-title', start: 'top 85%', once: true },
        y: 40, opacity: 0, duration: 0.7,
      });
      gsap.from('.gallery-photo', {
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%', once: true },
        y: 40, opacity: 0, scale: 0.95, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-[#030d1f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="gallery-title text-center text-3xl sm:text-4xl lg:text-[42px] font-light italic leading-snug mb-12 lg:mb-16"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #9ca3af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Somos referência em capacitação e<br />
          desenvolvimento de gestores públicos no país.
        </h2>

        {/* Photo Grid — 1 large left + 4 small right in 2x2 */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left — large photo */}
          <div className="gallery-photo relative aspect-square rounded-2xl overflow-hidden border border-white/[0.08]">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Right — 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {photos.slice(1, 5).map((photo, i) => (
              <div
                key={i}
                className="gallery-photo relative aspect-square rounded-2xl overflow-hidden border border-white/[0.08]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
