import Image from 'next/image';
import { MapPin, Calendar, Clock, ArrowDown, Download, ArrowRight } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. Igor Pereira Pinheiro',
    role: 'Promotor de Justiça do MPCE. Autor do livro "Nova Lei de Improbidade Administrativa Comentada".',
  },
  {
    name: 'Min. Teodoro Santos Silva',
    role: 'Ministro do Superior Tribunal de Justiça (STJ).',
  },
  {
    name: 'Min. Paulo Sérgio Domingues',
    role: 'Ministro do Superior Tribunal de Justiça (STJ).',
  },
];

export default function ImpHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden"
      style={{ background: '#030d1f' }}
    >
      {/* Background image — shifted up */}
      <div className="absolute inset-0">
        <Image
          src="/hero1.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Dark gradient overlay — black at top fading to transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 flex-1 flex flex-col items-center">
        {/* Logo — top center (PDF exact position) */}
        <div className="mb-10 lg:mb-14 animate-[fadeInDown_1s_0.2s_both]">
          <Image
            src="/logo-plenum-aberta2.png"
            alt="Instituto Plenum Brasil"
            width={180}
            height={50}
            className="brightness-0 invert opacity-85"
          />
        </div>

        {/* Glass panel — green top, fades to transparent at bottom */}
        <div
          className="relative w-full max-w-[480px] animate-[fadeInUp_0.8s_0.5s_both]"
          style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)' }}
        >
          <div className="absolute inset-0 rounded-2xl border-2 border-green-400/30" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/[0.06] via-transparent to-green-500/[0.06]" />

          <div className="relative px-8 sm:px-14 pt-8 sm:pt-10 pb-16 sm:pb-20 text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.15em] mb-2 animate-[fadeInUp_0.6s_0.7s_both]" style={{ color: '#f8c94f' }}>
              Imersão
            </p>
            <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.2em] animate-[fadeInUp_0.8s_0.8s_both]">
              Nova Lei de
            </p>
          </div>
        </div>

        {/* Big title — outside glass, emerges from fade */}
        <h1 className="leading-[0.92] text-center -mt-12 sm:-mt-16 relative z-10 animate-[fadeInUp_0.8s_0.95s_both]">
          <span
            className="block text-6xl sm:text-7xl lg:text-[5.5rem] tracking-[0.06em] font-black"
            style={{
              background: 'linear-gradient(180deg, #f4b959 0%, #e37a22 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Improbidade
          </span>
          <span
            className="block text-[2.75rem] sm:text-5xl lg:text-[4.2rem] tracking-[0.04em] font-normal animate-[fadeInUp_0.8s_1.1s_both]"
            style={{
              background: 'linear-gradient(180deg, #f4b959 0%, #e37a22 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Administrativa
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mt-4 mb-6 animate-[fadeInUp_0.7s_1.3s_both] text-center">
          <p className="text-white text-sm sm:text-base lg:text-lg font-light tracking-[0.25em] mb-2">
            Na Prática do
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.05em]">
            <span style={{ color: '#2797ff' }}>
              STF, STJ e TSE
            </span>
          </p>
        </div>

        {/* Gradient separator line with glow */}
        <div className="relative w-56 mb-10 animate-[fadeInScale_0.6s_1.5s_both]">
          <div className="absolute inset-x-0 -top-3 h-8 rounded-full blur-md" style={{ background: 'radial-gradient(ellipse at center, rgba(252,189,28,0.5) 0%, transparent 70%)' }} />
          <div className="relative h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #fcbd1c 50%, transparent 100%)' }} />
        </div>

        {/* Speakers — TEXT ONLY in 3 columns with vertical dividers (PDF exact layout) */}
        <div className="w-full max-w-3xl animate-[fadeInUp_0.6s_1.7s_both]">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="px-4 sm:px-6 py-5 sm:py-4">
                <p className="font-bold text-sm sm:text-[13px] tracking-wide leading-tight mb-2" style={{ color: '#fed222' }}>
                  {speaker.name}
                </p>
                <p className="text-white/35 text-xs leading-relaxed">
                  {speaker.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8" />
      </div>

      {/* Bottom section — Info Bar + CTAs */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        {/* Info Bar — pill glass black */}
        <div className="flex justify-center mb-8 animate-[fadeInUp_0.6s_2s_both]">
          <div className="inline-flex flex-col sm:flex-row items-stretch rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.10] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/[0.10]">
            {[
              { icon: Clock, label: 'Carga horária:', value: '16h' },
              { icon: MapPin, label: '', value: 'Brasília/DF' },
              { icon: Calendar, label: '', value: '14 e 15 de maio de 2026' },
            ].map((item) => (
              <div key={item.value} className="flex items-center gap-3 px-6 sm:px-8 py-4">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-white font-semibold text-base">
                  {item.label && <span className="text-white/50 font-normal">{item.label} </span>}
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.6s_2.2s_both]">
          <a
            href="#folder"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.18] text-white text-sm font-medium tracking-wide backdrop-blur-sm hover:bg-white/[0.12] hover:border-white/[0.3] transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Baixar o folder
          </a>
          <a
            href="#investimento"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-white text-sm font-medium tracking-wide backdrop-blur-sm hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
          >
            Quero me inscrever
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030d1f] to-transparent" />
    </section>
  );
}
