"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   GradientCard
─────────────────────────────────────────────────────────── */
export function GradientCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay }}
            className="realism-card group relative"
        >
            {/* Realism blob glow */}
            <div className="realism-blob" />

            {/* Card inner surface */}
            <div
                className={`realism-inner flex flex-col gap-4 overflow-hidden ${className}`}
            >
                {children}
            </div>
        </motion.div>
    );
}

/* ─── Animated Tech Stack Icons ───────────────────────────── */
const TECH_ICONS = [
    /* Next.js */
    <svg key="next" viewBox="0 0 24 24" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <path d="M17.4 18.5L9.5 8H8v8h1.5v-5.8l6.6 8.3z" fill="#000" />
    </svg>,
    /* React */
    <svg key="react" viewBox="0 0 24 24" className="w-7 h-7 fill-[#61DAFB]">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>,
    /* Tailwind */
    <svg key="tw" viewBox="0 0 24 24" className="w-7 h-7 fill-[#38BDF8]">
        <path d="M12 6c-2.5 0-4 1.25-4.5 3.75C8.25 8 9.25 7.5 10.5 7.75c.72.13 1.24.65 1.81 1.23C13.26 9.95 14.38 11 16.5 11 19 11 20.5 9.75 21 7.25 20.25 9 19.25 9.5 18 9.25c-.72-.13-1.24-.65-1.81-1.23C15.24 7.05 14.12 6 12 6zM7.5 11C5 11 3.5 12.25 3 14.75c.75-1.75 1.75-2.25 3-2 .72.13 1.24.65 1.81 1.23C8.76 14.95 9.88 16 12 16c2.5 0 4-1.25 4.5-3.75C15.75 14 14.75 14.5 13.5 14.25c-.72-.13-1.24-.65-1.81-1.23C10.74 12.05 9.62 11 7.5 11z" />
    </svg>,
    /* TypeScript */
    <svg key="ts" viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M14 12h2v6h-2v-6zm-2 0H8v2h2v4h2v-6z" fill="#fff" />
    </svg>,
    /* Vercel */
    <svg key="vercel" viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M12 2L24 22H0z" />
    </svg>,
    /* Framer */
    <svg key="framer" viewBox="0 0 24 24" className="w-7 h-7 fill-[#0055FF]">
        <path d="M4 4h16v8h-8zM4 12h8l8 8H4z" />
    </svg>,
];

/* ─── Section ──────────────────────────────────────────── */
export function PremiumBenefitsSection() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden font-sans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-5">

                {/* Header */}
                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium mb-5">
                        <svg viewBox="0 0 16 16" className="w-3 h-3 fill-current"><path d="M8 0l1.8 5.5H16l-4.9 3.5 1.9 5.5L8 11l-5 3.5 1.9-5.5L0 5.5h6.2z" /></svg>
                        Alta Performance
                    </div>
                    <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
                        O que uma boa Landing Page<br className="hidden md:block" />
                        pode fazer pelo seu negócio
                    </h2>
                </div>

                {/* ROW 1 — 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                    {/* A – Designers Especialistas */}
                    <GradientCard delay={0} className="p-6 min-h-[280px]">
                        <div className="z-10">
                            <p className="text-white font-semibold text-lg mb-1">Designers Especialistas</p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Criamos experiências digitais que impressionam e vendem desde o primeiro scroll.
                            </p>
                        </div>
                        {/* Animated orbit chart */}
                        <div className="z-10 relative flex-1 flex items-end justify-center pb-2">
                            <div className="relative w-44 h-36">
                                {/* Central glowing node */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.7)] z-20">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="1.5">
                                        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                                    </svg>
                                </div>

                                {/* Animated avatars */}
                                {[
                                    { top: "0%", left: "50%", emoji: "👨‍💻", size: "w-10 h-10", delay: "0s" },
                                    { top: "28%", left: "0%", emoji: "👩‍🎨", size: "w-9 h-9", delay: "0.4s" },
                                    { top: "28%", left: "90%", emoji: "👨‍🎨", size: "w-9 h-9", delay: "0.8s" },
                                    { top: "70%", left: "8%", emoji: "👩‍💼", size: "w-8 h-8", delay: "1.2s" },
                                    { top: "70%", left: "80%", emoji: "🧑‍💼", size: "w-8 h-8", delay: "1.6s" },
                                ].map((av, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
                                        transition={{ duration: 2.5, delay: parseFloat(av.delay), repeat: Infinity, ease: "easeInOut" }}
                                        style={{ top: av.top, left: av.left, transform: "translate(-50%,-50%)" }}
                                        className={`absolute ${av.size} rounded-full bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-xl shadow-lg z-10`}
                                    >
                                        {av.emoji}
                                    </motion.div>
                                ))}

                                {/* Dashed connection lines */}
                                <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 176 144">
                                    {[[88, 16], [16, 40], [160, 40], [20, 100], [156, 100]].map((pt, i) => (
                                        <line key={i} x1="88" y1="72" x2={pt[0]} y2={pt[1]} stroke="#47ADF6" strokeWidth="0.8" strokeDasharray="3 3" />
                                    ))}
                                </svg>
                            </div>
                        </div>
                    </GradientCard>

                    {/* B – Tecnologia de Ponta */}
                    <GradientCard delay={0.1} className="p-6 min-h-[280px]">
                        <div className="z-10">
                            <p className="text-white font-semibold text-lg mb-1">Tecnologia de Ponta</p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                React, Next.js e as melhores stacks do mercado para sites velozes e escaláveis.
                            </p>
                        </div>
                        <div className="z-10 flex-1 flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-3">
                                {TECH_ICONS.map((icon, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 2, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/[0.06] flex items-center justify-center"
                                    >
                                        {icon}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </GradientCard>

                    {/* C – Entrega Rápida */}
                    <GradientCard delay={0.2} className="p-6 min-h-[280px]">
                        <div className="z-10">
                            <p className="text-white font-semibold text-lg mb-1">Entrega Rápida</p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Páginas de alta qualidade entregues em tempo recorde — sem abrir mão de nenhum detalhe.
                            </p>
                        </div>
                        <div className="z-10 flex-1 flex items-center justify-center">
                            {/* Animated speedometer / gauge */}
                            <div className="relative w-36 h-36 flex items-center justify-center">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[24px]" />
                                {/* Track ring */}
                                <svg viewBox="0 0 100 100" className="absolute w-full h-full -rotate-[135deg]">
                                    <circle
                                        cx="50" cy="50" r="38"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.06)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray="180 60"
                                    />
                                    {/* Animated arc */}
                                    <motion.circle
                                        cx="50" cy="50" r="38"
                                        fill="none"
                                        stroke="url(#gaugeGrad)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray="180 60"
                                        animate={{ strokeDashoffset: [60, 0, 60] }}
                                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <defs>
                                        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#9FF1F6" />
                                            <stop offset="100%" stopColor="#2563EB" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Bolt icon in center */}
                                <motion.svg
                                    viewBox="0 0 24 32"
                                    className="relative z-10 w-9 h-9 drop-shadow-[0_0_16px_rgba(71,173,246,0.9)]"
                                    animate={{ filter: ["drop-shadow(0 0 8px #47ADF6)", "drop-shadow(0 0 22px #9FF1F6)", "drop-shadow(0 0 8px #47ADF6)"] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <defs>
                                        <linearGradient id="bolt2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#9FF1F6" />
                                            <stop offset="100%" stopColor="#2563EB" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M14 1L2 18h9L7 31l15-18h-9z" fill="url(#bolt2)" />
                                </motion.svg>
                                {/* Tick marks */}
                                <svg viewBox="0 0 100 100" className="absolute w-full h-full opacity-30">
                                    {[0, 30, 60, 90, 120, 150, 180].map((deg) => {
                                        const r = 48;
                                        const rad = ((deg - 135) * Math.PI) / 180;
                                        const x1 = 50 + (r - 5) * Math.cos(rad);
                                        const y1 = 50 + (r - 5) * Math.sin(rad);
                                        const x2 = 50 + r * Math.cos(rad);
                                        const y2 = 50 + r * Math.sin(rad);
                                        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#47ADF6" strokeWidth="1.5" strokeLinecap="round" />;
                                    })}
                                </svg>
                            </div>
                        </div>
                    </GradientCard>
                </div>

                {/* ROW 2 — 2 cards (text at the BOTTOM) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* D – Perfeito Até Você Aprovar */}
                    <GradientCard delay={0.3} className="p-6 min-h-[260px]">
                        {/* Asset first (top) */}
                        <div className="z-10 flex-1 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-4">
                                {/* Animated revision steps */}
                                <div className="flex items-center gap-2">
                                    {["v1", "v2", "v3", "✓"].map((label, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.35, duration: 0.4, repeat: Infinity, repeatDelay: 3.5 }}
                                            className={`flex items-center gap-1`}
                                        >
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border ${i === 3
                                                ? "bg-gradient-to-br from-[#47ADF6] to-blue-600 border-blue-400 text-white shadow-[0_0_18px_rgba(71,173,246,0.6)]"
                                                : "bg-[#1c1c1e] border-white/10 text-neutral-400"
                                                }`}>
                                                {label}
                                            </div>
                                            {i < 3 && (
                                                <svg viewBox="0 0 16 4" className="w-4 h-1 opacity-30">
                                                    <line x1="0" y1="2" x2="16" y2="2" stroke="#47ADF6" strokeWidth="1.5" strokeDasharray="3 2" />
                                                </svg>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Pulsing infinite badge */}
                                <div className="relative">
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-indigo-500/30 blur-[16px]"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div className="relative px-7 py-2.5 rounded-full bg-gradient-to-r from-[#47ADF6] via-blue-500 to-indigo-500 text-white text-sm font-bold tracking-widest shadow-[0_0_24px_rgba(71,173,246,0.55)] select-none">
                                        ILIMITADO
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text at the BOTTOM */}
                        <div className="z-10 mt-auto">
                            <p className="text-white font-semibold text-lg mb-1">Perfeito Até Você Aprovar</p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Revisões incluídas até o resultado ser exatamente o que você imaginou — sem custo extra.
                            </p>
                        </div>
                    </GradientCard>

                    {/* E – Design Exclusivo */}
                    <GradientCard delay={0.4} className="min-h-[260px] p-6">
                        {/* Asset: animated brush strokes / palette */}
                        <div className="z-10 flex-1 flex items-center justify-center">
                            <div className="relative w-48 h-32">
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10 blur-[30px] rounded-full" />

                                {/* Animated color swatches orbiting a design icon */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-[0_0_28px_rgba(139,92,246,0.6)] z-20">
                                    {/* Pen / design tool icon */}
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l7-7-4-4-7 7v4h4z" />
                                        <path d="M18 9l-2-2 2-2 2 2z" />
                                        <path d="M5 21H3" />
                                    </svg>
                                </div>

                                {/* Orbiting color swatches */}
                                {[
                                    { angle: 0, color: "#FF6B6B", size: "w-7 h-7" },
                                    { angle: 60, color: "#FFD93D", size: "w-6 h-6" },
                                    { angle: 120, color: "#6BCB77", size: "w-7 h-7" },
                                    { angle: 180, color: "#47ADF6", size: "w-6 h-6" },
                                    { angle: 240, color: "#C77DFF", size: "w-7 h-7" },
                                    { angle: 300, color: "#FF9F43", size: "w-6 h-6" },
                                ].map((swatch, i) => {
                                    const rad = (swatch.angle * Math.PI) / 180;
                                    const rx = 52, ry = 38;
                                    const cx = 96 + rx * Math.cos(rad);
                                    const cy = 64 + ry * Math.sin(rad);
                                    return (
                                        <motion.div
                                            key={i}
                                            style={{
                                                position: "absolute",
                                                left: cx,
                                                top: cy,
                                                transform: "translate(-50%,-50%)",
                                                backgroundColor: swatch.color,
                                            }}
                                            animate={{
                                                rotate: [0, 360],
                                                scale: [1, 1.15, 1],
                                            }}
                                            transition={{
                                                rotate: { duration: 10 + i * 1.5, repeat: Infinity, ease: "linear" },
                                                scale: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                                            }}
                                            className={`absolute ${swatch.size} rounded-lg shadow-lg z-10`}
                                        />
                                    );
                                })}

                                {/* Connecting lines */}
                                <svg className="absolute inset-0 w-full h-full z-0 opacity-15" viewBox="0 0 192 128">
                                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                        const rad = (angle * Math.PI) / 180;
                                        const rx = 52, ry = 38;
                                        const x = 96 + rx * Math.cos(rad);
                                        const y = 64 + ry * Math.sin(rad);
                                        return <line key={i} x1="96" y1="64" x2={x} y2={y} stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="3 3" />;
                                    })}
                                </svg>
                            </div>
                        </div>

                        {/* Text at the BOTTOM */}
                        <div className="relative z-20 mt-auto">
                            <p className="text-white font-semibold text-lg mb-1">Design Exclusivo</p>
                            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                                Cada página é criada do zero para o seu negócio — nada de templates genéricos.
                            </p>
                        </div>
                    </GradientCard>

                </div>
            </div>
        </section>
    );
}
