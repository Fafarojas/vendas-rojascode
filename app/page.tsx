import Image from "next/image";
import { ThumbsDown, OctagonAlert, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0F0F0F] text-white overflow-hidden max-w-[100vw]">
      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-screen flex flex-col items-center pt-8">
        {/* Background Image */}
        <div
          className="absolute contrast-115 brightness-85 inset-0 z-0 bg-cover bg-center md:bg-top opacity-90"
          style={{ backgroundImage: 'url(/assets/fundo.jpg)' }}
        />
        {/* Gradient Overlay for bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 z-0 bg-gradient-to-b from-transparent to-[#0F0F0F] pointer-events-none" />

        {/* Header Logo */}
        <div className="relative z-10 flex items-center justify-center gap-2 mb-12 md:mb-0 md:mt-12 drop-shadow-md">
          <img src="/assets/logo.png" alt="Logo" className="h-[20px] md:h-[30px] w-[20px] md:w-[30px]" />
          <span className="font-semibold text-sm md:text-[25px]">RojasCode</span>
        </div>

        {/* Hero Content Area - Vertical Center on Desktop */}
        <div className="relative z-10 flex flex-col items-center  md:flex-grow md:justify-center flex-col md:flex-row w-full px-6 md:px-16 lg:px-24">
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
          <div className="md:hidden relative w-full h-[300px] mt-6 z-10 pointer-events-none">
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
      <section className="w-full overflow-hidden bg-transparent mb-20 mt-10 relative z-20">
        <div className="relative w-full py-6">
          {/* Top and Bottom Gradient Lines (Fading Strokes) */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
      <section className="w-full flex flex-col items-center px-6 md:px-12 mb-32 relative z-20">
        <h2 className="text-[5.5vw] md:text-3xl font-medium text-center mb-12 flex flex-col items-center">
          Veja as páginas que fazemos <br />
          pros nossos clientes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
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



    </main>
  );
}
