import React from 'react';
import { Container } from '../ui/Container';

export function Presentation() {
    return (
        <section className="py-20 lg:py-32 bg-black relative border-t border-white/5">
            <Container>
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs font-inter border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-900/10">3º Edição</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white font-sequel-medium">Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Seminário</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-lg lg:text-xl text-white/70 leading-relaxed font-light text-justify">
                        <div className="space-y-8">
                            <p>
                                Vivemos em um cenário de <span className="text-white font-medium">mudanças contínuas</span> nas rotinas de contratação, exigindo decisões cada vez mais fundamentadas.
                                O seminário se apresenta como um espaço fundamental para debate técnico e estratégico, promovendo boas práticas, inovação, integridade e soluções aplicáveis à realidade dos órgãos públicos.
                            </p>
                            <p>
                                Contaremos com a presença de autoridades, doutrinadores e especialistas reconhecidos nacionalmente, incluindo representantes do controle externo e do Judiciário, garantindo uma visão plural e aprofundada.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p className="border-l-2 border-cyan-500/50 pl-6">
                                O foco central desta edição são os <strong className="text-cyan-400 font-bold">cinco anos da Lei 14.133/2021</strong>.
                                Abordaremos os principais aprendizados desse período e apontaremos os caminhos para aumentar a eficiência, transparência e segurança jurídica nas contratações.
                            </p>
                            <p>
                                Nosso objetivo é fortalecer a governança e capacitar os agentes públicos para a entrega de resultados concretos e positivos à Administração Pública e à sociedade.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
