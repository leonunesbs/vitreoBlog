import '@/styles/globals.css';

import { Footer, Header, PromoBar } from '@/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vítreo',
  description: 'Oftalmologia - Hospital Geral de Fortaleza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <PromoBar />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
