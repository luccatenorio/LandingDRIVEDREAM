import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Official Logo - INCREASED SIZE */}
        <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <img 
            src="https://drivedreamsales.com.br/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-09_at_15.10.40-transformed2.png" 
            alt="DDS Logo" 
            className="h-24 w-auto object-contain"
          />
        </div>
        
        <p className="text-gray-600 text-sm font-sans mb-6">
          Drive Dream Sales © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-700 uppercase tracking-widest">
           <span className="cursor-pointer hover:text-gold-500 transition-colors">Termos de Uso</span>
           <span className="cursor-pointer hover:text-gold-500 transition-colors">Privacidade</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;