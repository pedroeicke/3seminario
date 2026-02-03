"use client";

import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Container } from '../ui/Container';

const PARTNERS = [
    { name: "Partner 1", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+1" },
    { name: "Partner 2", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+2" },
    { name: "Partner 3", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+3" },
    { name: "Partner 4", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+4" },
    { name: "Partner 5", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+5" },
    { name: "Partner 6", logo: "https://placehold.co/200x80/ffffff/000000?text=LOGO+6" },
];

export function Partners() {
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
        AutoScroll({ speed: 1, stopOnInteraction: false })
    ]);

    return (
        <section className="py-20 bg-black border-y border-white/5 relative z-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <Container className="space-y-12">

                {/* Row 1: Forward */}
                <div className="overflow-hidden mask-linear-gradient" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <div key={`row1-${index}`} className="flex-[0_0_180px] md:flex-[0_0_240px] mx-6 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 group">
                                <div className="h-16 w-full flex items-center justify-center bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all p-4">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain invert brightness-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </Container >

            <style jsx>{`
                .mask-linear-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section >
    );
}
