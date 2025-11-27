
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ITEMS, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="bg-dark-950 py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl md:text-5xl text-gold-gradient mb-6 md:mb-8 leading-tight"
            >
              Luxo, estratégia e acesso exclusivo.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-4 md:space-y-6 text-gray-300 font-sans text-base md:text-lg mb-8 md:mb-10"
            >
              <p>
                Nós provamos diariamente que existe um caminho muito mais inteligente e lucrativo: o das <span className="text-white font-semibold">oportunidades silenciosas</span>.
              </p>
              <p>
                Com mais de <span className="text-gold-400 font-display text-lg md:text-xl">1.000</span> intermediações realizadas, nos tornamos referência em negociações estratégicas, seguras e vantajosas no mercado automotivo premium.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
              {ABOUT_ITEMS.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm hover:border-gold-500/30 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-400 shrink-0" />
                  <span className="text-gray-200 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-l-4 border-gold-500 pl-6"
            >
              <p className="font-serif italic text-white text-lg md:text-2xl leading-relaxed">
                "Nosso mundo não é o das vitrines. É o das oportunidades que surgem e desaparecem em minutos e só quem está no círculo certo consegue aproveitar."
              </p>
            </motion.div>
          </div>

           {/* Visual Element - Luxury Car B&W to Color Effect */}
           {/* Removido 'hidden' e ajustado altura para mobile (h-[300px]) e desktop (md:h-[600px]) */}
           <div className="w-full lg:w-1/2 relative h-[300px] md:h-[600px] block group cursor-pointer">
              {/* Decorative Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/20 to-transparent rounded-full blur-[100px] opacity-20 -z-10" />
              
              {/* Card Container */}
              <div className="relative h-full w-full border border-gold-500/20 p-2 bg-white/5 backdrop-blur-sm transition-colors duration-500 hover:border-gold-500/50 rounded-sm shadow-2xl">
                 <div className="h-full w-full bg-dark-900 relative overflow-hidden rounded-sm">
                    {/* Image with Grayscale to Color Transition */}
                    <img 
                      src={IMAGES.ABOUT_CAR} 
                      alt="Veículo Premium" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                    />
                    
                    {/* Subtle Overlay to enhance B&W contrast initially */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 pointer-events-none"></div>
                    
                    {/* Optional Label */}
                    <div className="absolute bottom-6 left-6 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="text-white text-xs uppercase tracking-[0.2em] font-medium border-l-2 border-gold-500 pl-3">
                        Acervo Exclusivo
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
