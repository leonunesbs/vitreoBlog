import '@/styles/globals.css';

import { Header } from '@/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vítreo',
  description: 'Oftalmologia - Hospital Geral de Fortaleza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
