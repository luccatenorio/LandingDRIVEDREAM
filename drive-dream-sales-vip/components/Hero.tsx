
import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import GoldButton from './GoldButton';
import { ChevronRight, EyeOff, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black selection:bg-gold-500 selection:text-black bg-cover bg-[center_right] md:bg-right bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${IMAGES.HERO})` }}
    >
      
      {/* OVERLAY */}
      {/* Increased overlay opacity slightly to blend the new car image better */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-0 pointer-events-none" />
      {/* Gradient to darken the left side specifically for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0 pointer-events-none" />

      {/* MAIN CONTENT */}
      {/* Reduced padding top to move elements up */}
      <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-20 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* TEXT COLUMN */}
          <div className="lg:col-span-7 relative">

            {/* LARGE HERO LOGO ADDITION - RESIZED SMALLER AND MOVED UP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <img 
                src="https://drivedreamsales.com.br/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-09_at_15.10.40-transformed2.png" 
                alt="Drive Dream Sales Large Logo" 
                // Reduced height classes to make logo smaller
                className="h-16 md:h-28 w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* LABEL */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-4 pl-1"
            >
              <span className="h-[1px] w-8 bg-gold-500/50"></span>
              <span className="text-gold-300 uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium bg-black/40 px-3 py-1 backdrop-blur-sm rounded">
                Comunidade Automotiva VIP
              </span>
            </motion.div>

            {/* TITLE - TYPOGRAPHY MATCHING REFERENCE IMAGE */}
            {/* Reduced text sizes: text-4xl -> text-3xl, md:text-7xl -> md:text-6xl */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-3xl leading-[1.15] md:text-6xl md:leading-[1.1] text-white text-left mb-5 md:mb-8 drop-shadow-xl"
            >
              <span className="font-medium tracking-tight">Essa comunidade é para quem</span> <br className="hidden md:block" />
              {/* "não aceita" in Italic Serif Grey - Adjusted for better legibility */}
              <span className="font-serif italic text-gray-300 mr-2 md:mr-3">não aceita</span> 
              {/* "pagar o preço do" in Sans Normal White */}
              <span className="font-medium tracking-tight">pagar o preço do</span> <br/>
              {/* "mercado comum" in ExtraBold Gold */}
              <span className="text-gold-500 font-extrabold tracking-tight">mercado comum.</span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-6 mb-8 md:mb-10"
            >
              <div className="hidden md:block w-[2px] bg-gradient-to-b from-gold-500 via-gold-500/30 to-transparent"></div>

              <div className="space-y-5 md:space-y-6">

                {/* Reduced text size: text-lg -> text-base, md:text-2xl -> md:text-xl */}
                <p className="text-base leading-relaxed md:text-xl text-gray-100 font-medium drop-shadow-md">
                  É para quem sabe que sempre existe um acesso melhor.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <EyeOff className="w-5 h-5 text-gold-500 shrink-0 mt-0.5 drop-shadow-lg" />
                    {/* Reduced text size: text-base -> text-sm, md:text-lg -> md:text-base */}
                    <p className="text-sm leading-snug md:text-base text-gray-300 drop-shadow-md">
                      As melhores oportunidades <strong className="text-white font-normal">não aparecem no Google</strong>.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* CTA - ADDED STRONG SHADOW/GLOW */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-full md:w-auto relative group">
                {/* Glow effect layer behind button */}
                <div className="absolute inset-0 bg-gold-500 rounded blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                
                <GoldButton className="relative w-full md:w-auto px-8 py-4 shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_-5px_rgba(212,175,55,0.7)] z-10">
                  {/* Reduced button text size */}
                  <span className="flex items-center justify-center gap-3 text-sm md:text-base font-bold">
                    QUERO GARANTIR MEU ACESSO VIP
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GoldButton>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-gold-200 uppercase tracking-widest border border-gold-500/10 px-4 py-2 rounded bg-black/60 backdrop-blur-md w-fit">
                    <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                    Vagas limitadas para 2026
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 italic max-w-sm">
                    Limitamos os grupos para manter a qualidade das oportunidades e a velocidade das negociações.
                </p>
              </div>
            </motion.div>

          </div>

          {/* STATUS CARD */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 right-0 bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-sm max-w-[240px] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Status do Grupo</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <div className="text-gold-400 font-display text-xl font-bold mb-2">98% Cheio</div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gold-500 w-[98%]"></div>
              </div>
              <p className="text-[9px] text-gray-500 mt-3 leading-tight">
                Aguardando aprovação de novos membros.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-0 w-full z-20 bg-gradient-to-t from-black to-transparent h-24 md:h-32 pointer-events-none"></div>

    </div>
  );
};

export default Hero;
