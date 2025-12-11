import React, { useRef, useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  TrendingDown, 
  Zap, 
  Share2, 
  Star, 
  Users, 
  Hourglass, 
  History, 
  Network, 
  Shield, 
  Headset, 
  Volume2, 
  VolumeX, 
  Play,
  EyeOff,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './components/Button';
import { StatusWidget } from './components/StatusWidget';
import { Section } from './components/Section';

// Utility component for scroll animations
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }> = ({ 
  children, 
  delay = 0, 
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const animationClass = direction === 'up' ? 'animate-fade-in-up' : direction === 'left' ? 'animate-fade-in-left' : 'animate-fade-in-right';

  return (
    <div
      ref={domRef}
      className={`${isVisible ? animationClass : 'opacity-0'} transition-all duration-1000`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Realistic iPhone Mockup Component with Carousel
interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

const IphoneMockup: React.FC<{ items: MediaItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
        {/* Side Buttons */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-dark-900 relative border border-gray-800">
             {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[28px] w-[100px] bg-black z-30 rounded-b-[1rem] flex items-center justify-center">
                 <div className="w-16 h-3 bg-gray-900/50 rounded-full"></div>
            </div>
            
            {/* Status Bar Fake */}
            <div className="absolute top-1 px-8 w-full flex justify-between text-[10px] text-white font-medium z-20 pt-2">
                <span>14:06</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
                    <div className="w-4 h-3 bg-white/20 rounded-sm"></div>
                </div>
            </div>

            {/* Sound Toggle */}
            <button 
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-8 right-4 z-40 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/90 hover:bg-black/60 transition-colors cursor-pointer"
            >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Media Carousel */}
            {items.map((item, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {item.type === 'video' ? (
                        <video 
                            src={item.src} 
                            className="w-full h-full object-cover" 
                            autoPlay 
                            muted={isMuted || index !== currentIndex} // Only unmute if it's the current video and sound is on
                            loop 
                            playsInline
                        />
                    ) : (
                        <img 
                            src={item.src} 
                            alt="Screen Content" 
                            className="w-full h-full object-cover" 
                        />
                    )}
                </div>
            ))}
            
            {/* Home Bar */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[120px] h-[4px] bg-white/50 rounded-full z-30"></div>
        </div>
    </div>
  );
};

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentFounderIndex, setCurrentFounderIndex] = useState(0);
  const WHATSAPP_LINK = "https://chat.whatsapp.com/DqIm09jrP7y9T2UlwlbihS";

  const videos = [
    {
      url: "https://res.cloudinary.com/dxx35zhn6/video/upload/v1764918274/4_vfcbsw.mp4",
      quote: '"Foram eles que me ajudaram a adquirir meu carro novo."',
      label: " Lulinha, Cantor"
    },
    {
      url: "https://res.cloudinary.com/dxx35zhn6/video/upload/v1764716943/WhatsApp_Video_2025-11-28_at_09.03.28_ere4db.mp4",
      quote: '"Obrigado João pela oportunidade e pelo carro que agente fez negócio."',
      label: "Feedback Real"
    },
    {
      url: "https://res.cloudinary.com/dxx35zhn6/video/upload/v1764918244/1_ow8hwd.mp4",
      quote: '"VIm fazer um testemunho, do ótimo atendimento que eu tive"',
      label: "Atendimento de qualidade"
    },
    {
      url: "https://res.cloudinary.com/dxx35zhn6/video/upload/v1764918267/3_xhs9si.mp4",
      quote: '"Fui super bem atendida, carro veio em perfeito estado"',
      label: "Cliente satistfeita"
    },
    {
      url: "https://res.cloudinary.com/dxx35zhn6/video/upload/v1764918259/2_kixtjp.mp4",
      quote: '"Assino em baixo."',
      label: "Compra verificada"
    }
  ];

  const phoneContent: MediaItem[] = [
    { type: 'image', src: 'https://i.ibb.co/kgdhvJr9/Whats-App-Image-2025-12-03-at-16-50-21.jpg' },
    { type: 'video', src: 'https://res.cloudinary.com/dxx35zhn6/video/upload/v1764919456/2_wajfal.mp4' },
    { type: 'video', src: 'https://res.cloudinary.com/dxx35zhn6/video/upload/v1764919456/1_ugemv1.mp4' },
    { type: 'video', src: 'https://res.cloudinary.com/dxx35zhn6/video/upload/v1764919457/3_wr4rdg.mp4' },
  ];

  const founderImages = [
    "https://i.ibb.co/BVJptKXh/Whats-App-Image-2025-11-28-at-09-01-09.jpg",
    "https://i.ibb.co/8DQYHbZx/Whats-App-Image-2025-12-10-at-21-32-58.jpg",
    "https://i.ibb.co/XZXXzZjX/a.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFounderIndex((prev) => (prev + 1) % founderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentVideo = videos[currentVideoIndex];

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    setIsMuted(true); // Always start muted when changing video for better UX
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsMuted(true);
  };

  const handleJoin = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="bg-dark-900 min-h-screen pb-32 font-sans text-gray-200 selection:bg-primary selection:text-black">
      
      {/* HERO SECTION */}
      <div className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
        >
            {/* Mobile Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-[65%_center] bg-no-repeat md:hidden"
              style={{ 
                backgroundImage: `url('https://i.ibb.co/sJszmdjc/Gemini-Generated-Image-gpkpk3gpkpk3gpkp.png')`,
              }}
            />

            {/* Desktop Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse-slow hidden md:block"
              style={{ 
                backgroundImage: `url('https://i.ibb.co/270mncks/unnamed-7.jpg')`,
              }}
            />

            {/* Gradients for readability - Darker on left for text, lighter on bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/40" />
        </div>

        {/* Content Container - Shifted Left */}
        <div className="relative z-10 w-full max-w-[1600px] ml-0 md:ml-12 lg:ml-24 px-6 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-full pt-20 md:pt-0">
          
          {/* Left Column: Text */}
          <div className="md:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 animate-fade-in-left">
            
            {/* Logo */}
            <img 
              src="https://i.ibb.co/8g9C1chV/Whats-App-Image-2024-09-09-at-15-10-40-transformed2.png" 
              alt="Drive Dream Sales" 
              className="h-12 md:h-16 object-contain mb-4 md:mb-8 opacity-90"
            />

            <div className="space-y-2">
                <span className="inline-block text-primary/80 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase border-b border-primary/30 pb-1 mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    Comunidade Automotiva VIP
                </span>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-left animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  Essa comunidade é para quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#F2D06B]">não aceita</span> pagar o preço do <span className="text-white decoration-primary/50 underline decoration-2 underline-offset-4">mercado comum</span>.
                </h1>
            </div>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light text-left max-w-xl border-l-2 border-primary/50 pl-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              É para quem sabe que sempre existe um acesso melhor, longe dos olhos do público geral.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
               <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <p className="text-primary text-xs md:text-sm font-medium flex items-center gap-2">
                    <EyeOff className="w-4 h-4" />
                    As melhores oportunidades não aparecem no Google.
                  </p>
               </div>
            </div>

            <div className="pt-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
               <Button onClick={handleJoin} className="shadow-[0_0_30px_rgba(212,175,55,0.15)] animate-pulse hover:animate-none w-full sm:w-auto">
                QUERO GARANTIR MEU ACESSO VIP
              </Button>
              <p className="text-[10px] text-gray-500 mt-3 uppercase tracking-widest pl-1">Acesso Gratuito • Vagas Limitadas</p>
            </div>
          </div>

          {/* Right Column: Widget (Desktop) - Adjusted Alignment */}
          <div className="md:col-span-5 flex justify-center md:justify-start md:pl-12 items-end md:h-full md:pb-20 animate-fade-in-right" style={{ animationDelay: '1200ms' }}>
             <div className="transform md:translate-y-0 translate-y-4">
                <StatusWidget />
             </div>
          </div>

        </div>
      </div>

      {/* VIDEO PROOF SECTION */}
      <Section className="relative z-20 -mt-10 md:-mt-20">
         <div className="max-w-5xl mx-auto">
            <FadeIn delay={200}>
              
              {/* Added Section Title for Video */}
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Quem entende o jogo <span className="text-primary">já está dentro.</span>
                </h2>
              </div>

              {/* Video Carousel Container */}
              <div className="relative max-w-[280px] md:max-w-[300px] mx-auto group">
                  
                  {/* Previous Button (Desktop) */}
                  <button 
                    onClick={handlePrevVideo}
                    className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors z-20"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <div className="bg-dark-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
                      {/* Aspect ratio 9/16 for portrait video look */}
                      <div className="relative aspect-[9/16] bg-black">
                        <video 
                          key={currentVideo.url}
                          ref={videoRef}
                          src={currentVideo.url}
                          className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                        
                        {/* Custom Controls Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Mute Button - Positioned with z-index to stay clickable */}
                        <button 
                          onClick={toggleMute}
                          className="absolute bottom-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors z-30 cursor-pointer"
                        >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        {/* Text Content - Added padding-right to avoid overlap with button */}
                        <div className="absolute bottom-4 left-4 right-14 z-20 text-left pointer-events-none">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{currentVideo.label}</span>
                            </div>
                            {/* Smaller font size as requested */}
                            <p className="text-white text-xs font-medium leading-tight opacity-90">
                            {currentVideo.quote}
                            </p>
                        </div>
                      </div>
                  </div>

                  {/* Next Button (Desktop) */}
                  <button 
                    onClick={handleNextVideo}
                    className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-primary transition-colors z-20"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex justify-center items-center gap-2 mt-4">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentVideoIndex(index);
                          setIsMuted(true);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentVideoIndex 
                            ? 'w-4 h-2 bg-primary' 
                            : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>

              </div>
            </FadeIn>

            {/* Secondary Proof Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
               <FadeIn delay={300}>
                 <div className="bg-dark-800/50 p-4 rounded-xl border border-gray-800 flex flex-col items-center text-center gap-2 h-full hover:bg-dark-800 transition-colors">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-2xl font-bold text-white">1.000+</span>
                    <span className="text-xs text-gray-500 uppercase">Intermediações</span>
                 </div>
               </FadeIn>
               <FadeIn delay={400}>
                 <div className="bg-dark-800/50 p-4 rounded-xl border border-gray-800 flex flex-col items-center text-center gap-2 h-full hover:bg-dark-800 transition-colors">
                    <TrendingDown className="w-5 h-5 text-primary" />
                    <span className="text-lg md:text-xl font-bold text-white leading-tight">Preço Especial</span>
                    <span className="text-xs text-gray-500 uppercase">Abaixo da FIPE</span>
                 </div>
               </FadeIn>
               <FadeIn delay={500}>
                 <div className="bg-dark-800/50 p-4 rounded-xl border border-gray-800 flex flex-col items-center text-center gap-2 h-full hover:bg-dark-800 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-white">100%</span>
                    <span className="text-xs text-gray-500 uppercase">Seguro & Verificado</span>
                 </div>
               </FadeIn>
               <FadeIn delay={600}>
                 <div className="bg-dark-800/50 p-4 rounded-xl border border-gray-800 flex flex-col items-center text-center gap-2 h-full hover:bg-dark-800 transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-white">Vip</span>
                    <span className="text-xs text-gray-500 uppercase">Networking Elite</span>
                 </div>
               </FadeIn>
            </div>
         </div>
      </Section>

      {/* VALUE PROPOSITION */}
      <Section className="py-20">
        <FadeIn>
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Luxo, estratégia e <span className="text-primary italic">acesso exclusivo.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Nós provamos diariamente que existe um caminho muito mais inteligente e lucrativo: o das <span className="text-white font-semibold">oportunidades silenciosas.</span>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={ShieldCheck} 
            title="Intermediação Profissional"
            desc="Transparência total em cada etapa do processo."
            delay={0}
          />
          <FeatureCard 
            icon={Lock} 
            title="Acesso Antecipado"
            desc="Acesso antecipado à veículos de alto padrão."
            delay={100}
          />
          <FeatureCard 
            icon={TrendingDown} 
            title="Abaixo da FIPE"
            desc="Condições reais e vantajosas."
            delay={200}
          />
          <FeatureCard 
            icon={Zap} 
            title="Agilidade Extrema"
            desc="Negociações rápidas e confiáveis"
            delay={300}
          />
          <FeatureCard 
            icon={Network} 
            title="Networking Sólido"
            desc="Conexão com os maiores players do mercado de luxo."
            delay={400}
          />
          <FeatureCard 
            icon={Star} 
            title="Feedbacks Reais"
            desc="Histórico consistente de satisfação e resultados."
            delay={500}
          />
        </div>
      </Section>

      {/* WHY JOIN SECTION */}
      <div className="bg-dark-800/30 border-y border-white/5 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Por que entrar na <br/><span className="text-primary">Comunidade VIP?</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  A Comunidade VIP não é um canal comum de ofertas. É um ambiente restrito para pessoas que valorizam vantagem, inteligência e oportunidades reais.
                </p>
              </FadeIn>
              
              <div className="space-y-4">
                <BenefitRow icon={Lock} text="Oportunidades antecipadas, você vê antes do público geral" delay={100} />
                <BenefitRow icon={TrendingDown} text="Ofertas reais abaixo do valor de mercado" delay={200} />
                <BenefitRow icon={ShieldCheck} text="Intermediação profissional com segurança total" delay={300} />
                <BenefitRow icon={Users} text="Comunidade filtrada,  só gente séria" delay={400} />
              </div>

              <FadeIn delay={500}>
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm font-medium">
                    <Hourglass className="w-4 h-4" />
                    Vagas extremamente limitadas
                 </div>
              </FadeIn>
            </div>

            {/* Replaced Mockup Image with Realistic IphoneMockup Carousel */}
            <FadeIn direction="right" delay={300}>
               <div className="relative group max-w-sm mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="transform transition-transform duration-500 hover:scale-[1.01]">
                    <IphoneMockup items={phoneContent} />
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* FOUNDER SECTION */}
      <Section className="py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Column - Adjusted for 50/50 Split and Taller Aspect Ratio */}
          <div className="md:col-span-6 relative group order-2 md:order-1 h-full">
            <FadeIn direction="right">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl aspect-[3/4] max-h-[600px] w-full bg-dark-800 mx-auto">
                {founderImages.map((src, index) => (
                    <img 
                        key={index}
                        src={src}
                        alt="João Gomes" 
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                            index === currentFounderIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 z-10">
                   <p className="text-white font-bold text-lg">João Gomes</p>
                   <p className="text-primary text-xs tracking-wider uppercase"> CEO & FUNDADOR </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Content Column - Adjusted for 50/50 Split */}
          <div className="md:col-span-6 space-y-8 order-1 md:order-2">
            <FadeIn direction="left">
              <div>
                <span className="text-primary/80 text-sm font-bold tracking-[0.2em] uppercase border-l-2 border-primary pl-3">A Mente por trás da DDS</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                  O Conector de <br/>
                  <span className="text-gray-500">Oportunidades.</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  Minha trajetória no setor automotivo me permitiu construir uma rede sólida de contatos. Hoje, coloco essa rede a serviço dos membros da Drive Dream Sales.
                </p>
                <p>
                  Não sou um vendedor tradicional. Eu lidero um ecossistema onde faço o intermédio seguro de veículos de alto padrão. Minha missão é filtrar a qualidade e apresentar, em primeira mão para o nosso grupo, negociações reais e vantajosas antes que elas se tornem públicas.
                </p>
                <blockquote className="text-lg md:text-xl text-white italic border-l-4 border-primary pl-6 py-2 my-8 bg-white/5 rounded-r-lg leading-relaxed">
                  "Nosso mundo não é o das vitrines. É o das oportunidades que surgem e desaparecem em minutos e só quem está no círculo certo consegue aproveitar."
                </blockquote>
              </div>
              
              <div className="flex items-center gap-4 mt-12">
                 <div className="h-px bg-gray-800 flex-1"></div>
                 <img src="https://i.ibb.co/8g9C1chV/Whats-App-Image-2024-09-09-at-15-10-40-transformed2.png" alt="Signature" className="h-8 opacity-50 grayscale" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* NEW CLOSING SECTION */}
      <Section className="py-24 border-t border-white/5">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Poucos têm acesso à <br />
              <span className="text-primary">Comunidade VIP Drive Dream Sales.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Essa não é uma comunidade aberta ao público. É para quem valoriza <strong className="text-white">exclusividade, inteligência financeira</strong> e querem oportunidades reais no mercado automotivo premium.
            </p>

            <div className="max-w-xl mx-auto space-y-4 mb-16 text-left">
               <CheckListItem text="Receber oportunidades antes do público" />
               <CheckListItem text="Conseguir valores que o mercado aberto nunca oferece" />
               <CheckListItem text="Negociar com segurança e vantagem" />
               <CheckListItem text="Entrar em um circuito que a maioria nem sabe que existe" />
            </div>

            <div className="flex flex-col items-center gap-6">
                <Button onClick={handleJoin} className="py-4 px-10 text-base shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-pulse hover:animate-none w-full md:w-auto">
                  QUERO FAZER PARTE DO CÍRCULO FECHADO
                </Button>
                
                <div className="text-center space-y-2">
                    <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">Acesso Restrito • Vagas Limitadas</p>
                    <p className="text-primary/60 text-sm italic">Limitamos o grupo para manter a qualidade absoluta das negociações.</p>
                </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* STICKY CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-dark-900/80 backdrop-blur-xl border-t border-white/10 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 animate-fade-in-up" style={{ animationDelay: '2000ms' }}>
        <div className="max-w-4xl mx-auto flex flex-row items-center justify-between gap-4">
          <div className="hidden md:block">
             <p className="text-white font-bold text-sm">Comunidade Automotiva VIP</p>
             <p className="text-xs text-gray-500">Vagas limitadas • Encerramento em breve</p>
          </div>
          <div className="flex-1 md:flex-none w-full md:w-auto">
            <Button fullWidth onClick={handleJoin} className="py-3 shadow-lg">
              QUERO GARANTIR MEU ACESSO
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- Helper Components ---

const FeatureCard: React.FC<{ icon: any, title: string, desc: string, delay?: number }> = ({ icon: Icon, title, desc, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="group p-6 rounded-xl bg-dark-800/40 border border-white/5 hover:bg-dark-800 hover:border-primary/30 transition-all duration-300 h-full">
      <Icon className="text-primary w-8 h-8 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={1.5} />
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </FadeIn>
);

const BenefitRow: React.FC<{ icon: any, text: string, delay?: number }> = ({ icon: Icon, text, delay = 0 }) => (
  <FadeIn delay={delay} direction="left">
    <div className="flex items-start gap-3">
      <div className="p-1 rounded bg-primary/10 mt-0.5">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  </FadeIn>
);

const CheckListItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-4 bg-dark-800/30 border border-white/5 p-4 rounded-lg hover:border-primary/20 hover:bg-dark-800/60 transition-colors group">
        <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
            <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
        </div>
        <span className="text-white font-medium">{text}</span>
    </div>
);

export default App;