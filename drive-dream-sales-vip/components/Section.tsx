import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgDarker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', bgDarker = false }) => {
  return (
    <section className={`py-12 px-6 md:py-16 md:px-8 max-w-7xl mx-auto ${bgDarker ? 'bg-dark-900' : ''} ${className}`}>
      {children}
    </section>
  );
};