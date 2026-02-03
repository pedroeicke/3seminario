import React from 'react';
import { Container } from '../ui/Container';
import { AlertCircle } from 'lucide-react';

export function Policy() {
    return (
        <section className="py-12 bg-black border-t border-white/5">
            <Container>
                <div className="max-w-4xl mx-auto space-y-6 text-sm text-white/50 font-light">
                    <h3 className="text-lg font-bold text-white mb-2">Política de Cancelamento e Observações</h3>

                    <p>
                        O não comparecimento ao curso com inscrição confirmada gerará a cobrança de <strong className="text-white/80">50% do valor</strong> para custeio do material utilizado e da vaga não preenchida, exceto se o cancelamento for solicitado até <strong className="text-white/80">72 horas antes</strong> da data de início.
                    </p>

                    <p>
                        O Instituto Plenum Brasil reserva-se o direito de cancelar o evento em caso fortuito, força maior ou falta de quórum.
                    </p>

                    <div className="bg-amber-900/20 border border-amber-500/20 p-4 rounded-xl text-amber-200/80 flex gap-3 items-start mt-6">
                        <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="block text-amber-400 mb-1">Importante:</strong>
                            Confirme previamente a realização do curso antes de comprar passagens aéreas ou pagar hospedagem.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
