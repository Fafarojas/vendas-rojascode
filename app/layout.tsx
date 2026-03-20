import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
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
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0F0F0F] text-white">
        {children}
      </body>
    </html>
  );
}
