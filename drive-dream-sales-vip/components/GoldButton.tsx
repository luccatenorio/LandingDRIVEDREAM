import React from 'react';
import { motion } from 'framer-motion';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isFullWidth?: boolean;
}

const GoldButton: React.FC<GoldButtonProps> = ({ children, onClick, className = "", isFullWidth = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden group
        bg-gold-gradient text-dark-950 font-sans font-bold uppercase tracking-wider
        py-4 px-8 border border-gold-300
        transition-all duration-300 ease-out
        ${isFullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default GoldButton;