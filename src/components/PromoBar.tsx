import Link from 'next/link';
import { ReactNode } from 'react';

interface PromoBarProps {
  children?: ReactNode;
}

export default function PromoBar({}: PromoBarProps) {
  return (
    <Link href="https://theoffshop.com.br/" target="_blank">
      <div className="w-full text-center py-1 bg-primary text-primary-content">
        Clique aqui para comprar instrumentos cirúrgicos.
      </div>
    </Link>
  );
}
