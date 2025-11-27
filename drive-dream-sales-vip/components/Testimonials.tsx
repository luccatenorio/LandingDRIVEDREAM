
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_PROOF_IMAGES } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção - Reestruturado para maior impacto e organização */}
        <div className="mb-16 md:mb-24 text-center max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-[1.1] tracking-tight drop-shadow-2xl"
          >
            Homens que conhecem o <br className="hidden md:block" />
            <span className="text-gold-gradient font-medium">valor do acesso certo</span> já estão dentro.
          </motion.h2>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gold-500 mx-auto mb-8 md:mb-10 rounded-full"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 font-sans text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Nada fala mais alto que quem já aproveitou oportunidades reais.
            Aqui, nossos membros não estão pesquisando carros — estão fechando negócios inteligentes.
          </motion.p>
        </div>

        {/* Grid de Cards - Altura Automática baseada na Imagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {SOCIAL_PROOF_IMAGES.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              // h-auto: O card cresce conforme a imagem.
              // w-full: Ocupa a largura da coluna.
              // overflow-hidden: Mantém a borda arredondada e o zoom dentro do card.
              className="group relative w-full h-auto bg-transparent rounded-xl border border-white/10 overflow-hidden shadow-2xl hover:border-gold-500/40 transition-all duration-500"
            >
              {/* 
                  Configuração exata para "colar" no card:
                  - w-full: 100% da largura
                  - h-auto: Proporção natural
                  - block: Remove espaçamento de linha (line-height) comum em imagens inline
                  - SEM object-fit (usa o tamanho real renderizado)
              */}
              <img 
                src={imgSrc} 
                alt={`Prova Social ${index + 1}`} 
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay sutil apenas no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
