import React from 'react';
import { Users, Clock, CheckCircle2 } from 'lucide-react';

export const StatusWidget: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-full max-w-[320px] shadow-2xl animate-fade-in-up">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Status do Grupo</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-bold tracking-wide">ATIVO</span>
          </div>
        </div>
        <Users className="w-5 h-5 text-primary/80" />
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-3xl font-bold text-white leading-none">98%</span>
          <span className="text-xs font-medium text-gray-400 mb-1">Capacidade</span>
        </div>
        
        <div className="w-full bg-gray-800/50 rounded-full h-1.5 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/80 to-primary h-1.5 rounded-full w-[98%] shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
        </div>
        
        <div className="flex items-start gap-2 pt-2 border-t border-white/5">
            <Clock className="w-3.5 h-3.5 text-gray-500 mt-0.5 shrink-0" />
            <p className="text-[11px] text-gray-400 leading-tight">          
Limitamos os grupos para manter a qualidade das oportunidades e a velocidade das negociações..
            </p>
        </div>
      </div>
    </div>
  );
};