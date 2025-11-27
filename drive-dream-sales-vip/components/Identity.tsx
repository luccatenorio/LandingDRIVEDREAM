
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';

const Identity: React.FC = () => {
  return (
    <section className="bg-dark-950 py-20 md:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-white mb-6"
            >
              Mais que intermediadores.<br />
              <span className="text-gold-gradient">Somos curadores de ativos de luxo.</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-300 font-sans text-lg leading-relaxed max-w-2xl mx-auto"
            >
              <p>
                A Drive Dream Sales nasceu para preencher uma lacuna clara no mercado automotivo premium: o acesso às melhores oportunidades acontece antes do anúncio público. E a maioria das pessoas jamais vê essas negociações acontecendo.
              </p>
              <p>
                Hoje, o nosso trabalho é direcionado a um grupo seleto de membros que entendem valor, reconhecem oportunidades e buscam vantagem estratégica no mercado premium.
              </p>
            </motion.div>
          </div>

          {/* Grid de Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-sm"
            >
              <TrendingUp className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-xl text-white font-serif mb-3">Histórico Comprovado</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Com mais de <span className="text-gold-400 font-bold">1.000 intermediações realizadas</span>, construímos uma reputação baseada em resultado, não em promessa. Entregamos negócios que o público comum nem chega a saber que existiram.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-900/50 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-sm"
            >
              <Users className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-xl text-white font-serif mb-3">Networking Estratégico</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                O que começou como uma operação discreta entre poucos contatos se tornou, ao longo dos anos, uma rede sólida de informações, parceiros estratégicos e acesso antecipado a ativos de alto padrão.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-900/50 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-sm"
            >
              <ShieldCheck className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-xl text-white font-serif mb-3">Segurança e Curadoria</h3>
              <div className="text-gray-400 text-sm leading-relaxed">
                <p className="mb-2">
                  Nós não somos apenas intermediadores. Somos curadores de ativos, conectados diretamente às fontes. Priorizamos sempre:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-gray-500">
                  <li>Liquidez</li>
                  <li>Margem de oportunidade</li>
                  <li>Segurança</li>
                  <li>Procedência do ativo</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-dark-900/50 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-sm"
            >
              <Award className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-xl text-white font-serif mb-3">Bastidores Especializados</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Por trás da plataforma existe uma equipe que monitora o mercado 24/7, analisando movimentações, entrada de veículos, oportunidades e assimetria de preço. Quando surge uma vantagem real, nós estamos lá antes de qualquer vitrine.
              </p>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center border-t border-white/10 pt-10"
          >
            <p className="text-gold-200 font-serif italic text-lg md:text-xl leading-relaxed">
              "Nosso compromisso é simples: conectar você aos negócios que ninguém mais vê — e entregar acesso onde o público comum não é convidado."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Identity;
