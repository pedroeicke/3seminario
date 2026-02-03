"use client";

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Check, ArrowRight, CreditCard, Info, ChevronDown, ChevronUp, Mail, Globe, MapPin, Phone, Building2, AlertCircle, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Investment() {
    const [expandedInfo, setExpandedInfo] = useState<string | null>(null);

    const toggleInfo = (id: string) => {
        setExpandedInfo(expandedInfo === id ? null : id);
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="investimento">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: 'url(/fundoprice.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block">Escolha a melhor opção</span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white font-sequel-medium mb-4">
                        Ingressos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Disponíveis</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">Garanta sua participação no maior evento de contratações públicas do Brasil.</p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-20">
                    {/* Presencial Card */}
                    <div className="relative group h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-900/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-8 border border-blue-400/30 shadow-2xl overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                            <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Inscrição Presencial</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                        <p className="text-white/80 text-sm mb-1">Lote especial</p>
                                        <p className="text-white/70 text-xs mb-2">Até 28/02</p>
                                        <p className="text-4xl font-bold text-white">R$ 2490<span className="text-2xl">,00</span></p>
                                        <p className="text-white/60 text-sm mt-1">Por Inscrição</p>
                                    </div>
                                    <div className="h-px bg-white/20" />
                                    <div>
                                        <p className="text-white/80 text-sm mb-2">Valor Normal</p>
                                        <p className="text-3xl font-bold text-white">R$ 3190<span className="text-xl">,00</span></p>
                                        <p className="text-white/60 text-sm mt-1">Por Inscrição</p>
                                    </div>
                                    <p className="text-xs text-white/50 italic">*Desconto para grupos a partir de 04 servidores do mesmo órgão</p>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-4">Incluso na inscrição</h4>
                                    <ul className="space-y-3">
                                        {['Kit do participante', 'Material de apoio impresso', 'Coffee break todos os dias do evento', 'Networking e interação com o instrutor', 'Certificado de conclusão'].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-white/90 text-sm">
                                                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="https://plenumbrasil.com.br/inscricao.aspx?id=NjhsaFhDTzBrRU1XZUhmNzBmcDQrZz09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-auto"
                                >
                                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full py-6 text-lg font-bold uppercase tracking-wider backdrop-blur-sm group/btn">
                                        Inscreva-se Agora <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Online Card */}
                    <div className="relative group h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-blue-600/20 to-blue-900/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 border border-cyan-500/30 shadow-2xl overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Inscrição Online - Ao Vivo</h3>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                                        <p className="text-white/80 text-sm mb-2">Lote único</p>
                                        <p className="text-5xl font-bold text-white">R$ 1890<span className="text-3xl">,00</span></p>
                                        <p className="text-white/60 text-sm mt-2">Por Inscrição</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-4">Incluso na inscrição</h4>
                                    <ul className="space-y-3">
                                        {['Acesso a plataforma de transmissão', 'Ao vivo do evento', 'Apostila Digital', 'Acesso a gravação por 30 dias', 'Certificado de conclusão'].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-white/90 text-sm">
                                                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="https://plenumbrasil.com.br/inscricao.aspx?id=NjhsaFhDTzBrRU1XZUhmNzBmcDQrZz09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-auto"
                                >
                                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-none rounded-full py-6 text-lg font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.3)] group/btn">
                                        Inscreva-se Agora <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formas de Pagamento Bar */}
                <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-10 shadow-2xl mb-12">
                    <div className="flex items-center gap-5 flex-1 w-full">
                        <div className="bg-[#FBB03B]/10 p-4 rounded-2xl border border-[#FBB03B]/20">
                            <CreditCard className="w-8 h-8 text-[#FBB03B]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-base mb-1 tracking-wide">Formas de Pagamento</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Boleto bancário, transferência, cheque ou dinheiro. <br />
                                Depósito, TED ou ordem bancária.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/10" />

                    <div className="flex flex-col items-center text-center px-4 w-full md:w-auto">
                        <p className="text-white/40 text-[11px] uppercase font-bold mb-3 tracking-widest">Solicite informações no financeiro:</p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=553125311750&text=Quero+Informa%C3%A7%C3%B5es+sobre+pagamento.%0A&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full bg-[#28A745] hover:bg-[#218838] text-white border-none px-10 py-5 rounded-full font-bold text-sm tracking-widest shadow-lg shadow-[#28A745]/20 hover:shadow-[#28A745]/30 transition-all uppercase">
                                Setor Financeiro
                            </Button>
                        </a>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/10" />

                    <div className="flex flex-col items-center gap-2 w-full md:w-auto">
                        <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                            <span className="text-white/80 font-bold text-xs uppercase tracking-widest italic">Pix</span>
                        </div>
                        <span className="text-white/40 font-bold text-[10px] uppercase tracking-widest">Consulte</span>
                    </div>
                </div>

                {/* FAQ Style Policies */}
                <div className="max-w-5xl mx-auto space-y-4">
                    {/* Cancellation Policy */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all hover:border-white/20">
                        <button
                            onClick={() => toggleInfo('cancellation')}
                            className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#FBB03B]/10 p-2.5 rounded-xl border border-[#FBB03B]/20">
                                    <Info className="w-5 h-5 text-[#FBB03B]" />
                                </div>
                                <h3 className="text-white font-bold uppercase text-sm tracking-widest">Política de Cancelamento</h3>
                            </div>
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                                {expandedInfo === 'cancellation' ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
                            </div>
                        </button>
                        <div className={cn(
                            "overflow-hidden transition-all duration-500 ease-in-out",
                            expandedInfo === 'cancellation' ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        )}>
                            <div className="p-8 pt-2 space-y-6 text-base text-gray-400 font-light border-t border-white/5 leading-relaxed">
                                <div className="pl-4 border-l-2 border-[#FBB03B]/30">
                                    <p className="italic">"O não comparecimento ao curso no qual você tem inscrição confirmada irá gerar a cobrança de <span className="text-white font-medium">50% do valor</span> para custeio do material utilizado, exceto se houver o cancelamento até <span className="text-[#FBB03B] font-bold">72 horas antes</span> do início."</p>
                                </div>
                                <p>O Instituto Plenum Brasil reserva-se o direito de cancelar qualquer evento em caso fortuito, por força maior, ou por falta de quórum.</p>
                                <div className="bg-[#FBB03B]/10 p-4 rounded-xl border border-[#FBB03B]/20 flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-[#FBB03B] shrink-0 mt-0.5" />
                                    <p className="text-white/80 text-sm">
                                        <strong className="text-[#FBB03B] mr-2">Atenção:</strong>
                                        Confirme, previamente, a realização do curso antes de efetuar a compra de passagens aéreas e o pagamento da hospedagem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all hover:border-white/20">
                        <button
                            onClick={() => toggleInfo('company')}
                            className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500/10 p-2.5 rounded-xl border border-blue-500/20">
                                    <Building2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-white font-bold uppercase text-sm tracking-widest">Dados da Empresa</h3>
                            </div>
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                                {expandedInfo === 'company' ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
                            </div>
                        </button>
                        <div className={cn(
                            "overflow-hidden transition-all duration-500 ease-in-out",
                            expandedInfo === 'company' ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        )}>
                            <div className="p-8 pt-2 space-y-8 border-t border-white/5">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                                                <MapPin className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Endereço</p>
                                                <p className="text-sm text-gray-300 leading-relaxed font-light">
                                                    Rua Espírito Santo, nº 1204, 2º andar - sala 1 <br />
                                                    Bairro Lourdes - BH/MG - CEP: 30.160-033
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                                                <Phone className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Contatos</p>
                                                <div className="flex flex-col gap-1">
                                                    <a href="tel:3125311776" className="text-sm text-gray-300 hover:text-blue-400 transition-colors font-light">31 2531-1776</a>
                                                    <a href="tel:3125311750" className="text-sm text-gray-300 hover:text-blue-400 transition-colors font-light">31 2531-1750</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                                                <Globe className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Website</p>
                                                <a href="https://www.plenumbrasil.com.br" target="_blank" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">www.plenumbrasil.com.br</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                                                <Mail className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">E-mails</p>
                                                <div className="flex flex-col gap-1">
                                                    <a href="mailto:plenumgestaooficial@gmail.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors font-light">plenumgestaooficial@gmail.com</a>
                                                    <a href="mailto:financeiro@plenumbrasil.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors font-light">financeiro@plenumbrasil.com</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-500/5 p-5 rounded-2xl border border-blue-500/20 shadow-inner">
                                            <div className="flex gap-3 items-center mb-2">
                                                <FileText className="w-4 h-4 text-blue-400" />
                                                <span className="text-xs font-bold text-white uppercase tracking-widest">Contratação</span>
                                            </div>
                                            <p className="text-[13px] text-gray-400 leading-relaxed font-light italic">
                                                "Solicite os documentos e demais informações para contratação."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
