
import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS_LIST } from '../constants';
import GoldButton from './GoldButton';

const Benefits: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-dark-900 overflow-hidden">
        {/* Diagonal Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 transform skew-y-3 scale-110 origin-top-left -z-10 border-t border-b border-white/5" />

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-6"
            >
              Por que entrar na <span className="text-gold-gradient">Comunidade VIP</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg"
            >
              A Comunidade VIP não é um canal comum de ofertas.
              <br className="hidden md:block" />
              É um ambiente restrito para pessoas que valorizam vantagem, inteligência e oportunidades reais.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {BENEFITS_LIST.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-dark-950 p-6 md:p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-900/20 flex items-center justify-center mb-4 md:mb-6 border border-gold-500/20 group-hover:bg-gold-500/10 transition-colors">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
                </div>
                
                <p className="text-gray-200 font-sans font-medium text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <GoldButton onClick={() => console.log('Benefits CTA')}>
              Quero acessar as oportunidades antecipadas
            </GoldButton>
          </div>

        </div>
    </section>
  );
};

export default Benefits;
