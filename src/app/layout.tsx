import '@/styles/globals.css';

import Link from 'next/link';

import { Header } from '@/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vítreo',
  description: 'Oftalmologia - Hospital Geral de Fortaleza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Link href="https://theoffshop.com.br/" target="_blank">
          <div className="w-full text-center py-1 bg-neutral text-neutral-content">
            Instrumentos para cirurgia oftalmológia!
          </div>
        </Link>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
