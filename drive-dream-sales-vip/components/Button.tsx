import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold text-center py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs md:text-sm active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] hover:to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-[#F2D06B]/50",
    outline: "border border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};