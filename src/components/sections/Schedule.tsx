"use client";

"use client";

import React from 'react';
import { Container } from '../ui/Container';
import { Clock, Calendar, MessageSquare, Mic, Sparkles, Coffee, Ticket, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const DAYS_CONFIG = [
    { id: '15', label: '15 DE ABRIL', subLabel: 'QUARTA-FEIRA' },
    { id: '16', label: '16 DE ABRIL', subLabel: 'QUINTA-FEIRA' },
    { id: '17', label: '17 DE ABRIL', subLabel: 'SEXTA-FEIRA' },
];

const FULL_SCHEDULE = {
    '15': [
        { time: "11H - 14H", title: "Credenciamento", type: "checkin" },
        { time: "14H", title: "Palestra 01 - O Futuro das Compras Públicas", description: "Cristiana Fortini (MG)", type: "lecture" },
        { time: "15H", title: "Palestra 02 - Pregão Eletrônico, Plataformas e IA", description: "Antônio Lima (SP)", type: "lecture" },
        { time: "16H", title: "Palestra 03 - Contratação Direta: Dispensa", description: "José Roberto Tiossi Junior (PR)", type: "lecture" },
        { time: "17H", title: "Palestra 04 - Sanções administrativas", description: "Viviane Mafissoni (DF)", type: "lecture" },
        { time: "18H", title: "Encerramento", type: "closing" },
    ],
    '16': [
        { time: "08H", title: "Abertura", type: "checkin" },
        { time: "08H30", title: "Palestra 05 - Credenciamento e gestão", description: "Raquel Carvalho (MG)", type: "lecture" },
        { time: "09H30", title: "Palestra 06 - SICX e Mercados Fluidos", description: "Eduardo Grossi (MG)", type: "lecture" },
        { time: "10H45", title: "Palestra 07 - O olhar do Tribunal de Contas", description: "Pedro Azevedo (MG)", type: "lecture" },
        { time: "12H", title: "Intervalo Almoço", type: "break" },
        { time: "14H", title: "Palestra 08 - Governança pública e compliance", description: "Igor Pinheiro (CE)", type: "lecture" },
        { time: "15H", title: "Palestra 09 - Planejamento e agentes de contratação", description: "Jacoby Fernandes (DF)", type: "lecture" },
        { time: "16H", title: "Palestra 10 - Controle externo e Lei 14.133/21", description: "Min. Benjamin Zymler (DF)", type: "lecture" },
        { time: "17H", title: "Palestra 11 - Parecer jurídico com IA", description: "Raphael Ferreira (MG)", type: "lecture" },
        { time: "18H", title: "Encerramento", type: "closing" },
    ],
    '17': [
        { time: "08H", title: "Abertura", type: "checkin" },
        { time: "08H30", title: "Palestra 12 - Desafio da Lei nº 14.133/2021", description: "Carlos Tiago (MG)", type: "lecture" },
        { time: "09H10", title: "Palestra 13 - Controladorias e Controle Interno", description: "Christianne Stroppa (SP)", type: "lecture" },
        { time: "10H10", title: "Palestra 14 - Entendimentos do STJ", description: "Min. Teodoro Silva Santos (DF)", type: "lecture" },
        { time: "11H", title: "Palestra 15 - 5 anos da Lei 14.133/2021", description: "Min. Antonio Anastasia (TCU)", type: "lecture" },
        { time: "12H", title: "Encerramento", type: "closing" },
    ]
};

const getIcon = (type: string) => {
    switch (type) {
        case 'lecture': return <Mic className="w-4 h-4" />;
        case 'checkin': return <Ticket className="w-4 h-4" />;
        case 'break': return <Coffee className="w-4 h-4" />;
        case 'closing': return <Sparkles className="w-4 h-4" />;
        default: return <Clock className="w-4 h-4" />;
    }
};

export function Schedule() {
    return (
        <section className="py-20 lg:py-32 bg-white relative" id="programacao">
            <Container>
                <div className="text-left mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
                        <Calendar className="w-4 h-4" />
                        15, 16 E 17 DE ABRIL
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-sequel-medium font-normal text-black uppercase leading-none tracking-tight">
                        Programação<br />do Evento
                    </h2>
                </div>

                {/* Days Grid -> Vertical Stack */}
                <div className="flex flex-col gap-8">
                    {DAYS_CONFIG.map((day) => {
                        const schedule = FULL_SCHEDULE[day.id as keyof typeof FULL_SCHEDULE];

                        return (
                            <div key={day.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
                                {/* Header - Static */}
                                <div className="w-full p-6 bg-white border-b border-gray-100">
                                    <h3 className="text-[#D97706] text-sm font-bold uppercase tracking-wide">
                                        {day.label} <span className="text-gray-400">·</span> {day.subLabel}
                                    </h3>
                                </div>

                                {/* List Content - Always visible */}
                                <div className="block">
                                    <div className="p-6 space-y-5">
                                        {schedule.map((item, index) => (
                                            <div key={index} className="flex items-start gap-4 text-sm group">
                                                {/* Icon */}
                                                <div className="text-gray-400 group-hover:text-[#D97706] transition-colors mt-0.5">
                                                    {getIcon(item.type)}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <span className="font-medium text-gray-700 group-hover:text-black transition-colors leading-tight">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-gray-400 font-bold whitespace-nowrap text-xs">{item.time}</span>
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-400 font-light mt-1">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
