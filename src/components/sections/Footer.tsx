import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Footer() {
    return (
        <footer className="bg-[#0A0F16] text-white py-12 md:py-16 border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logo-plenum-aberta2.png"
                            alt="Instituto Plenum Brasil"
                            className="h-16 w-auto object-contain brightness-0 invert"
                        />
                    </div>

                    {/* Consultants Section */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-16 items-center flex-grow justify-center">
                        {/* Consultant 1 */}
                        <div className="text-center space-y-3">
                            <div>
                                <p className="text-[11px] text-white/50 uppercase tracking-wider mb-1">Consultora de Vendas</p>
                                <p className="text-sm font-bold text-white tracking-wide">Kelly Carolina</p>
                            </div>
                            <a
                                href="https://wa.me/5561992873844?text=Quero%20informa%C3%A7%C3%B5es%20sobre%3A%203%C2%B0%20Semin%C3%A1rio%20Nacional%20de%20Contrata%C3%A7%C3%B5es%20Publicas%20-%20Abril%202026"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#28A745] hover:bg-[#218838] text-white border-none px-8 py-5 rounded-full font-bold text-xs tracking-widest min-w-[140px] shadow-lg shadow-green-500/10 transition-all hover:scale-105 active:scale-95">
                                    WhatsApp
                                </Button>
                            </a>
                        </div>

                        {/* Consultant 2 */}
                        <div className="text-center space-y-3">
                            <div>
                                <p className="text-[11px] text-white/50 uppercase tracking-wider mb-1">Consultor de Vendas</p>
                                <p className="text-sm font-bold text-white tracking-wide">Fernando Lemos</p>
                            </div>
                            <a
                                href="https://wa.me/553199271528?text=Quero%20informa%C3%A7%C3%B5es%20sobre%3A%203%C2%B0%20Semin%C3%A1rio%20Nacional%20de%20Contrata%C3%A7%C3%B5es%20Publicas%20-%20Abril%202026"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#28A745] hover:bg-[#218838] text-white border-none px-8 py-5 rounded-full font-bold text-xs tracking-widest min-w-[140px] shadow-lg shadow-green-500/10 transition-all hover:scale-105 active:scale-95">
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Contact & Website Section */}
                    <div className="text-center md:text-right space-y-1">
                        <p className="text-lg font-bold text-white tracking-tight">(31) 2531-1776</p>
                        <p className="text-sm font-bold text-[#FBB03B] tracking-wide">plenumbrasil.com.br</p>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-light">
                        © 2025 Instituto Plenum Brasil - Todos os direitos reservados
                    </p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-light">
                        Site desenvolvido por <a href="https://www.pastelapps.dev" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">Pastel Apps</a>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
