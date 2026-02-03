"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function About() {
    // 1. Define Content aligned with Images
    const SLIDES = [
        {
            category: "O Evento",
            title: "3ª Edição",
            text: "É com grande satisfação que convidamos você para a 3ª edição do Seminário Nacional de Compras Públicas. Um evento consolidado como referência para gestores e profissionais que atuam nas contratações governamentais em todo o Brasil.",
            image: "/about1.jpg"
        },
        {
            category: "Contexto",
            title: "Cenário Atual",
            text: "Em um cenário de mudanças contínuas e exigência por decisões fundamentadas, oferecemos um espaço qualificado para debate técnico e estratégico, promovendo a troca de experiências sobre boas práticas, inovação e integridade.",
            image: "/about2.jpg"
        },
        {
            category: "Especialistas",
            title: "Debate Técnico",
            text: "Com a presença de autoridades e doutrinadores reconhecidos, o encontro assegura uma abordagem prática sobre temas essenciais: planejamento, seleção do fornecedor, execução contratual, sanções e inovações com o SICX.",
            image: "/about3.jpg"
        },
        {
            category: "Destaque",
            title: "Lei 14.133/2021",
            text: "Nesta edição, o foco será os 5 anos da Lei 14.133/2021, seus aprendizados e os caminhos para ampliar eficiência e segurança jurídica, fortalecendo a governança e a entrega de resultados à Administração Pública.",
            image: "/about4.jpg"
        }
    ];

    // 2. Initialize State for Carousel
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Navigation Logic
    const scrollPrev = useCallback(() => {
        setSelectedIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    }, [SLIDES.length]);

    const scrollNext = useCallback(() => {
        setSelectedIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, [SLIDES.length]);

    // 3. Auto-play logic (10 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            scrollNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [scrollNext]);

    return (
        <section className="relative py-20 lg:py-32 bg-black overflow-hidden min-h-[80vh] flex items-center" id="sobre">

            {/* Background Image Slider (Cross-fade) */}
            <div className="absolute inset-0 z-0">
                {SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === selectedIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                    </div>
                ))}
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="min-h-[400px] flex flex-col justify-center">
                        {/* Animated Content Wrapper */}
                        <div key={selectedIndex} className="animate-fade-in space-y-8">
                            {/* Tag */}
                            <div className="inline-block">
                                <span className="text-[#FBB03B] font-bold tracking-widest uppercase text-xs font-inter border border-[#FBB03B]/30 px-3 py-1 rounded-full bg-[#FBB03B]/10 shadow-[0_0_15px_rgba(251,176,59,0.2)]">
                                    {SLIDES[selectedIndex].category}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl lg:text-7xl font-sequel-medium text-white uppercase leading-[0.9]">
                                {SLIDES[selectedIndex].title.split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB03B] to-[#FCBC2A]">
                                    {SLIDES[selectedIndex].title.split(' ').slice(1).join(' ')}
                                </span>
                            </h2>

                            {/* Text Content */}
                            <p className="text-gray-300 font-inter leading-relaxed text-lg lg:text-xl transform origin-left max-w-2xl">
                                {SLIDES[selectedIndex].text}
                            </p>

                            {/* Progress Bar (Visual) */}
                            <div className="w-full max-w-xs h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                                <div
                                    className="h-full bg-[#FBB03B] transition-all duration-500 ease-out"
                                    style={{ width: `${((selectedIndex + 1) / SLIDES.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-12">
                        <Button
                            onClick={scrollPrev}
                            className="h-14 w-14 rounded-full p-0 bg-white/5 hover:bg-[#FBB03B] border border-white/10 text-white backdrop-blur-md transition-all group"
                        >
                            <ChevronLeft className="h-6 w-6 transition-transform" />
                        </Button>
                        <Button
                            onClick={scrollNext}
                            className="h-14 w-14 rounded-full p-0 bg-white/5 hover:bg-[#FBB03B] border border-white/10 text-white backdrop-blur-md transition-all group"
                        >
                            <ChevronRight className="h-6 w-6 transition-transform" />
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
