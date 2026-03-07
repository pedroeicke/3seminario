'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, ChevronDown, CheckCircle2, Calendar } from 'lucide-react';

interface Module {
  id: number;
  day: string;
  dayLabel: string;
  title: string;
  speakers: string[];
  speakerImages: string[];
  time: string;
  subtitle: string;
  topics: string[];
}

const modules: Module[] = [
  {
    id: 1, day: '14 MAI', dayLabel: 'Quinta-feira', title: 'Módulo 1',
    speakers: ['Dr. Igor Pinheiro (MPCE)'], speakerImages: ['/improbidade/speakers/igor-pinheiro.png'],
    time: '08:30 — 12:30', subtitle: 'Fundamentos e Arquitetura Jurídica da Improbidade',
    topics: [
      'Panorama e finalidades da Lei de Improbidade: evolução e função no sistema de integridade pública',
      'Tutela constitucional da probidade: princípios, deveres e limites do poder sancionador estatal',
      'Tutela convencional (sistema interamericano/anticorrupção) e impactos interpretativos',
      'Tutela legal após a Lei 14.230/2021: alterações estruturais na Lei de Improbidade Administrativa',
      'Princípios estruturantes pós-reforma: tipicidade, segurança jurídica, proporcionalidade e devido processo',
      'Responsabilização e regimes correlatos: improbidade x penal e disciplinar x contas x eleitoral',
      'Prescrição e marcos temporais na nova lei: linhas gerais e efeitos práticos',
      'Legitimidade ativa e papel institucional: MP, ente lesado e desenho processual pós-2021',
      'Efeitos da reforma em casos em curso: diretrizes de transição e segurança jurídica',
    ],
  },
  {
    id: 2, day: '14 MAI', dayLabel: 'Quinta-feira', title: 'Módulo 2',
    speakers: ['Min. Paulo Sérgio Domingues (STJ)', 'Dr. Igor Pinheiro (MPCE)'],
    speakerImages: ['/improbidade/speakers/paulo-domingues.png', '/improbidade/speakers/igor-pinheiro.png'],
    time: '14:00 — 18:00', subtitle: 'O Novo Ato de Improbidade e Critérios de Acusação/Condenação',
    topics: [
      'O novo conceito de ato ímprobo: definição, contornos e núcleo sancionador',
      'Elementos estruturais do ilícito: conduta, resultado, nexo, prova e padrão de responsabilização',
      'Dolo e exigências probatórias: requisitos para acusar e condenar',
      'Tipologia por artigos/temas: leitura guiada e interpretação sistemática',
      'Separação por temas: enriquecimento ilícito, dano ao erário e violação de princípios',
      'Dosimetria e sanções: parâmetros, proporcionalidade e fundamentos decisórios',
      'Soluções negociais e acordos no ecossistema da responsabilização',
      'Jurisprudência do STJ aplicada ao mérito: filtros de tipicidade, dolo, prova e limites de revisão',
    ],
  },
  {
    id: 3, day: '15 MAI', dayLabel: 'Sexta-feira', title: 'Módulo 3',
    speakers: ['Min. Teodoro Santos Silva (STJ)', 'Dr. Igor Pinheiro (MPCE)'],
    speakerImages: ['/improbidade/speakers/teodoro-santos.png', '/improbidade/speakers/igor-pinheiro.png'],
    time: '08:30 — 12:30', subtitle: 'Julgamento das Ações, Procedimentos e Sistema de Precedentes',
    topics: [
      'Procedimento judicial da ação de improbidade: etapas, pontos de atenção e nulidades relevantes',
      'Procedimentos administrativos e interfaces: sindicância, PAD, corregedorias',
      'Taxonomia das decisões vinculantes: ADI, ADPF, repercussão geral, repetitivos e súmulas',
      'Retrospectiva temática dos julgados 2022–2026 (STF, STJ e TSE)',
      'Eficácia vinculante e grau de obrigatoriedade: o que vincula, o que orienta',
      'Retroatividade/irretroatividade e modulação: impactos em ações em curso',
      'Provas e padrão de fundamentação: motivação, correlação fática e uso de precedentes',
      'Jurisprudência do STJ sobre rito e julgamento: admissibilidade e questões processuais',
    ],
  },
  {
    id: 4, day: '15 MAI', dayLabel: 'Sexta-feira', title: 'Módulo 4',
    speakers: ['Dr. Igor Pinheiro (MPCE)'], speakerImages: ['/improbidade/speakers/igor-pinheiro.png'],
    time: '14:00 — 18:00', subtitle: 'Eleições 2026, Recurso Especial no STJ, MP Investigatório e Abuso de Autoridade',
    topics: [
      'Eleições 2026 e improbidade: impactos práticos, pontos sensíveis e condições de risco',
      'Interseção improbidade e Justiça Eleitoral: efeitos e cautelas institucionais',
      'Recurso Especial e Lei 14.230/2021: hipóteses de cabimento e estratégia recursal',
      'Juízo de admissibilidade no STJ: filtros, óbices e como reduzir riscos de inadmissão',
      'Limites de cognição do STJ e impugnações cabíveis',
      'Taxonomia dos procedimentos investigatórios do Ministério Público',
      'Controle e garantias na investigação: prazos, atos, contraditório diferido',
      'Nova Lei do Abuso de Autoridade (Lei 13.869/2019): riscos e boas práticas',
      'Fluxo de compliance institucional para ano eleitoral',
    ],
  },
];

export default function ImpProgram() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1]));

  const toggle = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const day1 = modules.filter((m) => m.day === '14 MAI');
  const day2 = modules.filter((m) => m.day === '15 MAI');

  const renderDay = (dayModules: Module[], dayNum: string, dayMonth: string, dayName: string) => (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 border-b border-gray-200 py-16 last:border-0">
      {/* Sticky Date Column */}
      <div className="lg:w-48 flex-none">
        <div className="lg:sticky lg:top-32 text-left">
          <span className="text-7xl lg:text-8xl font-bold text-gray-900 tracking-tighter leading-none block">
            {dayNum}
          </span>
          <span className="text-xl lg:text-2xl text-[#0885fe] font-bold uppercase tracking-wide block -mt-1 mb-2">
            {dayMonth}
          </span>
          <div className="h-1 w-12 bg-gray-900 rounded-full mb-3" />
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            {dayName}
          </span>
        </div>
      </div>

      {/* Modules */}
      <div className="flex-1 space-y-5">
        {dayModules.map((mod) => {
          const isOpen = expanded.has(mod.id);
          return (
            <div
              key={mod.id}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-[#0885fe]/20 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                  : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#0885fe]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              }`}
            >
              {/* Card header with photo + info */}
              <div className="flex flex-row">
                {/* Speaker photo */}
                <div className="relative flex-none w-[180px] h-[190px] bg-gray-100 overflow-hidden">
                  <Image
                    src={mod.speakerImages[0]}
                    alt={mod.speakers[0]}
                    fill
                    className="object-cover object-top"
                  />
                  {mod.speakerImages.length > 1 && (
                    <div className="absolute bottom-2 right-2 flex -space-x-2">
                      {mod.speakerImages.slice(1).map((img, i) => (
                        <div key={i} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md">
                          <Image src={img} alt={mod.speakers[i + 1]} fill className="object-cover object-top" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <button
                    onClick={() => toggle(mod.id)}
                    className="w-full text-left cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0885fe]/10 text-[#0885fe] inline-block mb-2">
                      {mod.title}
                    </span>
                    <h3 className="text-gray-900 font-bold text-base md:text-lg leading-snug mb-2 group-hover:text-[#0885fe] transition-colors">
                      {mod.subtitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                      {mod.speakers.map((speaker) => (
                        <span key={speaker} className="text-sm text-gray-500">{speaker}</span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.time}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {isOpen ? 'Ocultar ementa' : 'Ver ementa completa'}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[#0885fe]/10 rotate-180' : 'bg-gray-100'
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                    </div>
                  </button>

                  {/* Expandable topics */}
                  <div
                    className="grid transition-all duration-500 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 mt-4 border-t border-gray-100 space-y-1">
                        {mod.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 py-2.5 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0885fe]/60 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="programacao" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            14 E 15 DE MAIO
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 uppercase leading-none tracking-tight">
            Programação
          </h2>
        </div>

        {/* Days */}
        <div className="flex flex-col">
          {renderDay(day1, '14', 'DE MAIO', 'Quinta-feira')}
          {renderDay(day2, '15', 'DE MAIO', 'Sexta-feira')}
        </div>
      </div>
    </section>
  );
}
