'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'MPMG', src: '/improbidade/logos/mpmg.jpeg' },
  { name: 'Assembleia Legislativa RO', src: '/improbidade/logos/assembleia-ro.png' },
  { name: 'TCE MG', src: '/improbidade/logos/tce-mg.jpeg' },
  { name: 'ANPD', src: '/improbidade/logos/anpd.png' },
  { name: 'CEB', src: '/improbidade/logos/ceb.png' },
  { name: 'Prefeitura de São Paulo', src: '/improbidade/logos/pref-sp.png' },
];

export default function ImpSocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sp-header', {
        scrollTrigger: { trigger: '.sp-header', start: 'top 80%', once: true },
        y: 50, opacity: 0, duration: 0.8,
      });

      gsap.from('.sp-photo', {
        scrollTrigger: { trigger: '.sp-photo', start: 'top 85%', once: true },
        y: 80, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out',
      });

      // GSAP infinite logo marquee
      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2;
        gsap.set(track, { x: 0 });
        gsap.to(track, {
          x: -totalWidth, duration: 25, ease: 'none', repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % totalWidth),
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="sp-header mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">
              Somos referência em capacitação e{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              desenvolvimento de gestores públicos
            </span>
            <span className="bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-transparent"> no país.</span>
          </h2>
        </div>

        {/* Event photo */}
        <div className="sp-photo relative rounded-3xl overflow-hidden mb-20 border border-white/[0.08] group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/improbidade/fotos-evento.png"
              alt="Fotos de eventos realizados pelo Instituto Plenum Brasil"
              width={1200}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d1f]/60 via-transparent to-[#030d1f]/20" />
          </div>
        </div>

        {/* Institution logos */}
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold text-white/30 tracking-[0.2em]">
            Instituições que já se capacitaram conosco
          </h3>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#030d1f] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#030d1f] to-transparent" />

            <div ref={trackRef} className="flex items-center gap-20 will-change-transform" style={{ width: 'fit-content' }}>
              {allLogos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 h-16 w-40 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={64}
                    className="max-h-14 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
