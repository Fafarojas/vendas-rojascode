import type { Metadata } from 'next';
import { Montserrat, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import { GradualBlurBottom } from "@/components/GradualBlurBottom";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: 'RojasCode - Landing Pages',
  description: 'Criamos websites e landing pages pro seu negócio se destacar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${bricolage.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0F0F0F] text-white">
        <SmoothScroll>
          {children}
          <GradualBlurBottom />
        </SmoothScroll>
      </body>
    </html>
  );
}
