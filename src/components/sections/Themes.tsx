import React from 'react';
import { Container } from '../ui/Container';
import { Lightbulb, Gavel, ShieldAlert, Scale, Cpu, BookOpen } from 'lucide-react';

const THEMES = [
    {
        title: "Mercado Digital e Inovação",
        description: "O futuro das compras públicas, o impacto do mercado digital e a ruptura do modelo tradicional.",
        icon: Lightbulb,
    },
    {
        title: "Pregão Eletrônico e Procedimentos",
        description: "Pregão eletrônico, plataformas, inteligência artificial, credenciamento e critérios de seleção.",
        icon: Gavel,
    },
    {
        title: "Contratação Direta e Sanções",
        description: "Formas de contratação direta (dispensa e inexigibilidade) e sanções aplicáveis a licitantes.",
        icon: ShieldAlert,
    },
    {
        title: "Governança e Compliance",
        description: "Boas práticas de governança, compliance licitatório, planejamento e controle interno.",
        icon: Scale,
    },
    {
        title: "SICX e Tecnologia Aplicada",
        description: "Sistema SICX, mercados fluidos, colapso da lógica tradicional e tecnologias emergentes.",
        icon: Cpu,
    },
    {
        title: "Controle Externo e Legislação",
        description: "Visão do TCU e STJ sobre licitações e reflexões sobre os cinco anos da Lei 14.133/2021.",
        icon: BookOpen,
    },
];

import Image from 'next/image';

export function Themes() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden" id="trilhas">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/fundoeixo_v2.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>



            <Container className="relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[#FBB03B] font-bold tracking-widest uppercase text-xs font-inter border border-[#FBB03B]/30 px-3 py-1 rounded-full bg-[#FBB03B]/10">Trilhas de Conteúdo</span>
                    <h2 className="text-3xl lg:text-5xl font-bold font-sequel-medium text-white uppercase">
                        Eixos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB03B] to-[#FCBC2A]">Temáticos</span>
                    </h2>
                    <div className="h-1 w-20 bg-[#FBB03B] mx-auto rounded-full shadow-[0_0_15px_#FBB03B]"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {THEMES.map((theme, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 -translate-y-2 hover:bg-white/10 hover:border-[#FBB03B]/30 hover:shadow-[0_0_30px_rgba(251,176,59,0.2)]">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FBB03B] to-[#FCBC2A] flex items-center justify-center mb-6 transition-transform shadow-lg group-hover:shadow-[#FBB03B]/50">
                                <theme.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-sequel-medium text-white group-hover:text-[#FBB03B] transition-colors uppercase">{theme.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300">
                                {theme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
