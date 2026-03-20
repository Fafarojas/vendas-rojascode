"use client";

import Image from "next/image";
import { ThumbsDown, OctagonAlert, ThumbsUp, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    // We use a slight delay to ensure the DOM and Lenis are ready and stable
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=150%", // Faz a animação terminar mais rápido
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Background transition
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
        const targetGlow = isDesktop 
          ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(15, 15, 15, 1) 45%)"
          : "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(15, 15, 15, 1) 70%)";

        tl.to(".glow-bg", {
          background: targetGlow,
          duration: 1,
        }, 0)
          .to(".icon-left", {
            x: -500,
            opacity: 0,
            duration: 1,
          }, 0)
          .to(".icon-right", {
            x: 500,
            opacity: 0,
            duration: 1,
          }, 0)
          .to(".problem-title", {
            opacity: 0,
            y: -100,
            scale: 0.8,
            duration: 0.5, // Mais rápido
          }, 0)
          .fromTo(".solution-card",
            {
              y: "100vh",
              xPercent: -50,
              yPercent: -50,
              opacity: 0,
              scale: 0.8
            },
            {
              y: "0",
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power3.out"
            },
            0.2
          );

        ScrollTrigger.refresh();
      }, triggerRef);

      return () => ctx.revert();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#0F0F0F] text-white max-w-[100vw]">
      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-screen flex flex-col items-center pt-8">
        {/* Background Image */}
        <div
          className="absolute contrast-115 brightness-85 inset-0 z-0 bg-[url('/assets/fundo.jpg')] lg:bg-[url('/assets/fundopc.jpg')] bg-cover bg-center md:bg-top opacity-90"
        />
        {/* Gradient Overlay for bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 z-0 bg-gradient-to-b from-transparent to-[#0F0F0F] pointer-events-none" />

        {/* Header Logo */}
        <div className="relative z-10 flex items-center justify-center gap-2 mb-12 md:mb-0 md:mt-12 drop-shadow-md">
          <img src="/assets/logo.png" alt="Logo" className="h-[20px] md:h-[30px] w-[20px] md:w-[30px]" />
          <span className="font-semibold text-sm md:text-[25px]">RojasCode</span>
        </div>

        {/* Hero Content Area - Vertical Center on Desktop */}
        <div className="relative z-10 flex flex-col items-center  md:flex-grow md:justify-center flex-col md:flex-row w-full px-6 md:px-16 lg:px-24 mt-20 md:mt-0">
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left z-20">
            <h1 className="text-[7.7vw] md:text-[5xl] lg:text-[3.5vw] leading-[1.1] mb-6 drop-shadow-xl tracking-tight font-medium">
              Criamos websites e <br className="hidden md:block" />
              landing pages pro seu <br className="hidden md:block" />
              negócio se <span className="italic font-bold">destacar</span>
            </h1>

            <div className="w-full flex justify-center md:justify-start">
              <button className="btn-custom group relative md:!w-[380px] md:!p-4">
                <div className="absolute -inset-[30px] rounded-[40px] bg-[rgba(255,255,255,0.64)] blur-[24px] pointer-events-none opacity-0 transition-opacity duration-500 block" />
                <span className="btn-custom-text md:!text-[22px]">Entre em contato</span>
              </button>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-10 md:max-w-md drop-shadow-md mt-6 text-center md:text-left">
              O design do seu site é o seu vendedor. Ele está
              <span className="text-white"> fechando vendas</span>
              <span> ou </span>
              <span className="text-white">dando desculpas?</span>
            </p>
          </div>

          {/* Right Phone Mockup Desktop */}
          <div className="hidden md:flex relative flex-1 items-center justify-center w-[100%] h-[70vh] z-10 pointer-events-none">
            <Image
              src="/assets/phone-mockup.png"
              alt="Phone Mockup"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Right Phone Mockup Mobile */}
          <div className="md:hidden relative w-full h-[300px] mt-10 z-10 pointer-events-none">
            <Image
              src="/assets/phone-mockup.png"
              alt="Phone Mockup"
              fill
              className="object-contain drop-shadow-2xl scale-150 origin-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full overflow-hidden bg-transparent mb-20 mt-20 md:mt-10 relative z-20">
        <div className="relative w-full py-6">
          {/* Top and Bottom Gradient Lines (Fading Strokes) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Side Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-30 pointer-events-none" />

          <div
            className="w-fit flex animate-marquee text-white/40 font-semibold text-[10px] md:text-sm tracking-[0.2em] uppercase items-center whitespace-nowrap"
            style={{ animationDuration: '60s' }}
          >
            {Array.from({ length: 8 }).map((_, setIndex) => (
              <div key={setIndex} className="flex items-center shrink-0">
                {["Mais Vendas", "Mais Leads", "Mais Conversões"].map((text, i) => (
                  <span key={i} className="flex items-center">
                    <span className="mx-8 md:mx-16">{text}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </span>
                ))}
              </div>
            ))}
            {/* Segundo set idêntico para loop infinito fluido */}
            {Array.from({ length: 8 }).map((_, setIndex) => (
              <div key={`dup-${setIndex}`} className="flex items-center shrink-0">
                {["Mais Vendas", "Mais Leads", "Mais Conversões"].map((text, i) => (
                  <span key={i} className="flex items-center">
                    <span className="mx-8 md:mx-16">{text}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full flex flex-col items-center px-6 md:px-12 relative z-20">
        <h2 className="text-[5.5vw] md:text-3xl font-medium text-center mb-12 flex flex-col items-center">
          Veja as páginas que fazemos <br />
          pros nossos clientes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Box 1 */}
          <div className="w-full aspect-[16/9] bg-[#D9D9D9] rounded-xl flex items-center justify-center text-[#999999] font-bold text-2xl drop-shadow-lg">
            FOTO
          </div>
          {/* Box 2 */}
          <div className="w-full aspect-[16/9] bg-[#D9D9D9] rounded-xl flex items-center justify-center text-[#999999] font-bold text-2xl drop-shadow-lg opacity-90 hidden md:flex">
            FOTO
          </div>
          {/* Box 3 */}
          <div className="w-full aspect-[16/9] bg-[#D9D9D9] rounded-xl flex items-center justify-center text-[#999999] font-bold text-2xl drop-shadow-lg opacity-80 mt-8 md:mt-0">
            FOTO
          </div>
          {/* Box 4 */}
          <div className="w-full aspect-[16/9] bg-[#D9D9D9] rounded-xl flex items-center justify-center text-[#999999] font-bold text-2xl drop-shadow-lg opacity-70 hidden md:flex">
            FOTO
          </div>
        </div>
      </section>

      {/* Interactive Problem Section */}
      <div ref={triggerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="glow-bg absolute inset-0 z-0 opacity-40 md:opacity-30"
          style={{ 
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(15, 15, 15, 1) 60%)" 
          }} 
        />

        {/* Floating Icons */}
        <div className="icon-left absolute left-[3%] md:left-[10%] top-[30%] md:top-[20%] blur-[3px] rotate-[-15deg] z-10 w-[120px] md:w-[300px]">
          <img src="/assets/negativo1.png" alt="Icon Negativo 1" className="w-full h-auto drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        </div>
        <div className="icon-right absolute right-[3%] md:right-[10%] bottom-[30%] md:bottom-[20%] blur-[3px] rotate-[-220deg] z-10 w-[120px] md:w-[300px]">
          <img src="/assets/negativo2.png" alt="Icon Negativo 2" className="w-full h-auto drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        </div>

        {/* Problem Text */}
        <div className="problem-title relative z-20 text-center px-6 max-w-4xl">
          <h2 className="text-[4.6vw] md:text-5xl font-medium leading-tight tracking-tight">
            De que adianta um bom anúncio, <br />
            se a sua página não segura o lead <br />
            e nem guia pra venda?
          </h2>
        </div>

        {/* Solution Card (Entrance) */}
        <div className="solution-card absolute z-30 w-[90%] md:w-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 md:p-10 rounded-[15px] border border-[3px] border-white/05 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Layer 1: Black Base */}
          <div className="absolute inset-0 bg-black -z-20" />

          {/* Layer 2: Animated Blue Glows (Tailwind + JS/Framer Motion) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-[60px]"
                style={{
                  width: '300px',
                  height: '300px',
                  background: i === 0 ? '#4b9eebff' : i === 1 ? '#47adf6' : '#3b6aecff',
                  left: `${i * 30}%`,
                  bottom: '-150px',
                }}
                animate={{
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          <h3 className="relative z-10 text-[4.4vw] md:text-[30px] font-medium mb-6 leading-tight">
            Criamos estruturas que guiam o <br />
            seu cliente direto <span className="bg-gradient-to-r from-white to-[#47ADF6] bg-clip-text text-transparent">para a compra</span>
          </h3>
          <p className="relative z-10 text-white/85 text-[3.2vw] md:text-[22px] mb-10 font-light">
            Pare de queimar dinheiro com anúncios que levam para páginas lentas e confusas. Tenha uma estrutura que realmente converte.
          </p>
          <div className="relative z-10">
            <button className="btn-custom !w-full !p-3 md:!p-5">
              <span className="btn-custom-text !text-md md:!text-2xl font-medium">Quero converter mais</span>
            </button>
          </div>
        </div>
      </div>

      {/* Espaçador invisível maior para permitir o scroll da animação final */}
      <div className="h-[100vh]" />
    </main>
  );
}
