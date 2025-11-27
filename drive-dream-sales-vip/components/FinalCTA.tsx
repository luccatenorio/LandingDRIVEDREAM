
import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from './GoldButton';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Receber oportunidades antes do público",
  "Conseguir valores que o mercado aberto nunca oferece",
  "Negociar com segurança e vantagem",
  "Entrar em um circuito que a maioria nem sabe que existe"
];

const FinalCTA: React.FC = () => {
  return (
    <section className="relative bg-dark-950 py-20 md:py-32 overflow-hidden flex items-center justify-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-gold-500/20 bg-dark-900/80 backdrop-blur-md p-8 md:p-16 shadow-[0_0_100px_-20px_rgba(212,175,55,0.1)]"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Poucos têm acesso à <br/><span className="text-gold-gradient">Comunidade VIP Drive Dream Sales</span>.
          </h2>

          <p className="text-gray-300 font-sans text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Essa não é uma comunidade aberta ao público. 
            É para homens que valorizam <span className="text-white font-medium">exclusividade, inteligência financeira</span> e querem oportunidades reais no mercado automotivo premium.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-left bg-black/40 px-4 py-2 rounded border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
             <GoldButton isFullWidth={false} className="w-full md:w-auto md:px-16 text-lg" onClick={() => console.log("Final Join")}>
               Quero fazer parte do círculo fechado
             </GoldButton>
             <div className="flex flex-col items-center mt-6 gap-2">
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Acesso Restrito • Vagas Limitadas</p>
                <p className="text-[10px] md:text-xs text-gold-600/70 italic">
                  Limitamos o grupo para manter a qualidade absoluta das negociações.
                </p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
