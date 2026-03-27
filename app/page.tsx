"use client";

import Image from "next/image";
import { ThumbsDown, OctagonAlert, ThumbsUp, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { PremiumBenefitsSection, GradientCard } from "@/components/PremiumBenefitsSection";

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
          ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.18) 0%, rgba(10, 10, 10, 1) 100%)"
          : "radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, rgba(10, 10, 10, 1) 100%)";

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
              xPercent: -50,
              yPercent: -50,
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
    <main className="flex flex-col min-h-screen bg-[#0A0A0A] text-white max-w-[100vw]">
      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-screen flex flex-col items-center pt-8">
        {/* Background Image */}
        <div
          className="absolute contrast-115 saturate-120 brightness-85 inset-0 z-0 bg-[url('/assets/fundo.jpg')] lg:bg-[url('/assets/fundopc.jpg')] bg-cover bg-center md:bg-top opacity-90"
        />
        {/* Gradient Overlay for bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 z-0 bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none" />

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
                <span className="btn-custom-text md:!text-[22px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 md:w-8 md:h-8 mr-2 fill-white"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.2-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.2-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.3 3.6 34.8 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Entre em contato
                </span>
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
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-30 pointer-events-none" />

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

      {/* Projects Section (Transformam) */}
      <section className="w-full relative py-24 sm:py-32 pt-10 overflow-hidden bg-[#0A0A0A] font-sans">
        {/* Background Radar Circles */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-square pointer-events-none opacity-40">
          <div className="radar-line w-full h-full opacity-10" />
          <div className="radar-line w-3/4 h-3/4 opacity-20" />
          <div className="radar-line w-1/2 h-1/2 opacity-30" />
          <div className="radar-line w-1/4 h-1/4 opacity-40" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(71,173,246,0.05) 0%, transparent 70%)' }} />
        </div>



        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2 className="text-[5.5vw] md:text-5xl font-medium tracking-tight max-w-2xl mb-6">
            Veja as páginas que fazemos<br className="hidden sm:block" /> pros nossos clientes.
          </h2>


          {/* Avatar row */}
          <div className="flex items-center -space-x-4 mb-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#161616] overflow-hidden bg-neutral-900 shadow-xl"
                style={{
                  background: `linear-gradient(45deg, #161616, #222)`,
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                }}
              >
                {/* Fake avatar bg with initial */}
                <div className="w-full h-full flex items-center justify-center font-bold text-neutral-600 text-xs sm:text-sm">
                  User
                </div>
                {/* Visual ring border like the screenshot */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Dual Carousels */}
        <div className="relative w-full flex flex-col gap-6 sm:gap-10">
          {/* Row 1: Right to Left */}
          <div className="w-full overflow-hidden flex">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 sm:gap-6 shrink-0"
            >
              {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[500px] aspect-video rounded-xl bg-[#111] border border-white/[0.05] overflow-hidden shadow-2xl relative group shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-4xl">PROJETO</div>
                  <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                    <div className="w-24 h-2 bg-white/10 rounded-full" />
                    <div className="w-16 h-1.5 bg-white/5 rounded-full" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right (Reverse) */}
          <div className="w-full overflow-hidden flex">
            <motion.div
              animate={{ x: ["-50%", 0] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 sm:gap-6 shrink-0"
            >
              {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[500px] aspect-video rounded-xl bg-[#111] border border-white/[0.05] overflow-hidden shadow-2xl relative group shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.03] to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-4xl">PROJETO</div>
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/10" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/10" />
                    <div className="w-3 h-3 rounded-full bg-green-500/10" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 sm:py-32 relative z-20 overflow-hidden bg-[#0A0A0A]">
        {/* Top Beam Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[40px] bg-blue-500/10 blur-[40px] rounded-full z-20" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-white text-[7vw] md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
              Escolha um dos nossos serviços
            </h2>
            <p className="text-white/40 text-md md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Desenvolvemos a estrutura completa para o seu negócio vender mais no digital.
            </p>
          </div>

          <div className="relative border-y border-white/5 grid grid-cols-1 md:grid-cols-3">
            {/* Grid Intersections (+ signs) */}
            <div className="absolute -top-1.5 -left-1.5 text-white/20 font-light">+</div>
            <div className="absolute -top-1.5 -right-1.5 text-white/20 font-light">+</div>
            <div className="absolute -bottom-1.5 -left-1.5 text-white/20 font-light">+</div>
            <div className="absolute -bottom-1.5 -right-1.5 text-white/20 font-light">+</div>
            <div className="hidden md:block absolute -top-1.5 left-1/3 -translate-x-1/2 text-white/20 font-light">+</div>
            <div className="hidden md:block absolute -top-1.5 left-2/3 -translate-x-1/2 text-white/20 font-light">+</div>
            <div className="hidden md:block absolute -bottom-1.5 left-1/3 -translate-x-1/2 text-white/20 font-light">+</div>
            <div className="hidden md:block absolute -bottom-1.5 left-2/3 -translate-x-1/2 text-white/20 font-light">+</div>

            {[
              {
                title: "Landing Page",
                desc: "Estruturas focadas 100% em conversão, desenhadas para transformar tráfego em faturamento real.",
                tag: "Alta Conversão",
                icon: "🚀"
              },
              {
                title: "Site Institucional",
                desc: "Sua vitrine digital com autoridade máxima. Design que transmite confiança em cada clique.",
                tag: "Autoridade",
                icon: "🏛️"
              },
              {
                title: "Automações",
                desc: "Sistemas inteligentes que trabalham por você 24/7, otimizando seus processos e escala.",
                tag: "Eficiência",
                icon: "⚡"
              }
            ].map((s, i) => (
              <div
                key={i}
                className={`p-8 sm:p-12 relative flex flex-col gap-8 group hover:bg-white/[0.01] transition-colors duration-500
                  ${i !== 2 ? 'md:border-r border-white/5' : ''}
                  ${i !== 0 ? 'border-t md:border-t-0 border-white/5' : ''}
                `}
              >
                {/* Internal Glow for each item */}
                <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03)_0%,transparent_70%) opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Top Badges */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="px-3 py-1 text-[10px] rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                    {s.tag}
                  </div>
                  <span className="text-white/20 text-[10px] uppercase font-bold tracking-tighter">0{i + 1}</span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-none">{s.title}</h3>
                  <p className="text-white/40 text-sm sm:text-base leading-relaxed font-light pr-4">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Image Area (18:9) */}
                <div className="relative w-full aspect-[18/9] rounded-[12px] overflow-hidden mt-auto border border-white/10 shadow-3xl bg-[#0D0D0D] z-10">
                  {/* Placeholder for real images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/5 text-xs font-bold uppercase tracking-widest">{s.title} PREVIEW</span>
                  </div>
                  {/* Subtle Top Light on the Preview Box */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <button className="btn-custom group relative md:!w-[420px] md:!p-6">
              <div className="absolute -inset-[30px] rounded-[40px] bg-[rgba(255,255,255,0.64)] blur-[24px] pointer-events-none opacity-0 transition-opacity duration-500 block" />
              <span className="btn-custom-text md:!text-[24px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 md:w-8 md:h-8 mr-3 fill-white"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.2-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.2-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.3 3.6 34.8 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Pedir orçamento agora
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Process Section (Latest Reference Style) */}
      <section className="w-full px-6 md:px-12 py-24 md:py-32 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Header following the photo exactly */}
          <div className="text-left md:text-center mb-16 md:mb-24">
            <h2 className="text-white text-[6vw] md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
              Estruturas que fazem a diferença pro seu negócio.
            </h2>
            <p className="text-white/40 text-md md:text-xl font-light tracking-wide">Veja como funciona o processo em 4 etapas simples e rápidas:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Briefing Inteligente",
                desc: "Coletamos as informações essenciais para acelerar o design da sua página sem enrolação.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                )
              },
              {
                title: "Design estratégico",
                desc: "Layout focado em performance e conversão, desenhado sob medida para sua oferta.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.5 1.5" /><path d="M7.08 11.2a12.8 12.8 0 0 1 0-8.32" /></svg>
                )
              },
              {
                title: "Aprovação e ajustes",
                desc: "Receba o layout, dê seu feedback e ajustamos os detalhes finais em conjunto.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                )
              },
              {
                title: "Página no ar",
                desc: "Sua página configurada, otimizada e pronta para rodar com performance máxima.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                )
              }
            ].map((p, i) => (
              <GradientCard
                key={i}
                delay={i * 0.1}
                className="p-6 h-full flex flex-col gap-6"
              >
                {/* Icon box (Matching the buttons' gradient and style) */}
                <div
                  className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #9ff1f6 0%, #47adf6 100%)',
                    boxShadow: '0px 8px 16px rgba(159, 189, 246, 0.12), inset 0px 0px 12px rgba(255, 255, 255, 0.25), inset 0px -24px 32px rgba(255, 255, 255, 0.22)'
                  }}
                >
                  {p.icon}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{p.title}</h3>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed group-hover:text-white/60 transition-colors">{p.desc}</p>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      {/* Interactive Problem Section */}
      <div ref={triggerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Smooth Top/Bottom Section Fades */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Animated Background Glow */}
        <div className="glow-bg absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.12) 0%, rgba(10, 10, 10, 1) 100%)"
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
        <div className="solution-card absolute z-30 w-[90%] md:w-[600px] left-1/2 top-1/2 p-8 md:p-10 rounded-[15px] border border-[3px] border-white/05 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Layer 1: Black Base */}
          <div className="absolute inset-0 bg-[#0A0A0A] -z-20" />

          {/* Layer 2: Animated Blue Glows (Tailwind + JS/Framer Motion) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-[100px]"
                style={{
                  width: '320px',
                  height: '320px',
                  background: i === 0 ? '#4b9eeb33' : i === 1 ? '#47adf622' : '#3b6aec33',
                  left: `${(i - 1) * 35}%`,
                  bottom: '-160px',
                  transform: 'translateX(50%)',
                }}
                animate={{
                  y: [0, -40, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.7
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
              <span className="btn-custom-text !text-md md:!text-2xl font-medium flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 md:w-8 md:h-8 mr-2 fill-white"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.2-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.2-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.3 3.6 34.8 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Quero converter mais
              </span>
            </button>
          </div>
        </div>
      </div>


    </main>
  );
}
