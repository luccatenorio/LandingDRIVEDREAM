
import { ShieldCheck, Zap, TrendingDown, Users, BellRing, Lock, Star, Percent } from 'lucide-react';
import { BenefitItem, TestimonialItem } from './types';

export const IMAGES = {
  // Atualizado para um carro esportivo em ambiente muito escuro (Low Key) para efeito de fusão/transparência
  HERO: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2887&auto=format&fit=crop", 
  ABOUT_BG: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
  // Nova imagem para o card da seção Sobre (Carro de Luxo para efeito B&W -> Color)
  ABOUT_CAR: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974&auto=format&fit=crop",
  // Imagens de Prova Social (Prints reais)
  TESTIMONIAL_1: "https://i.ibb.co/MDXR2sHc/ddss.jpg", 
  TESTIMONIAL_2: "https://i.ibb.co/1YP9DKQW/ddss2.jpg", 
  TESTIMONIAL_3: "https://i.ibb.co/Y4SVZ217/ddss1.jpg", 
};

export const ABOUT_ITEMS: BenefitItem[] = [
  { icon: ShieldCheck, text: "Intermediação profissional e transparente" },
  { icon: Lock, text: "Acesso antecipado a veículos de alto padrão" },
  { icon: TrendingDown, text: "Condições reais abaixo da FIPE tradicional" },
  { icon: Zap, text: "Negociações rápidas e confiáveis" },
  { icon: Users, text: "Rede sólida no mercado automotivo de luxo" },
  { icon: Star, text: "Feedbacks consistentes e reais" },
];

export const BENEFITS_LIST: BenefitItem[] = [
  { icon: Lock, text: "Oportunidades antecipadas — você vê antes do público geral" },
  { icon: TrendingDown, text: "Ofertas reais abaixo do valor de mercado" },
  { icon: Zap, text: "Negociações diretas e rápidas" },
  { icon: ShieldCheck, text: "Intermediação profissional com segurança total" },
  { icon: BellRing, text: "Alertas imediatos de oportunidades urgentes" },
  { icon: Users, text: "Comunidade filtrada — só gente séria" },
  { icon: Percent, text: "Desconto exclusivo de 15% na primeira intermediação" },
  { icon: Star, text: "Vagas extremamente limitadas" },
];

// Apenas as imagens para a seção de prova social, conforme solicitado
export const SOCIAL_PROOF_IMAGES = [
  IMAGES.TESTIMONIAL_1,
  IMAGES.TESTIMONIAL_2,
  IMAGES.TESTIMONIAL_3
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "",
    author: "",
    location: "",
    carImage: IMAGES.TESTIMONIAL_1
  },
  {
    quote: "",
    author: "",
    location: "",
    carImage: IMAGES.TESTIMONIAL_2
  },
  {
    quote: "",
    author: "",
    location: "",
    carImage: IMAGES.TESTIMONIAL_3
  }
];