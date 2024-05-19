import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({}: HeaderProps) {
  return (
    <div className="py-2 px-4 shadow flex justify-center">
      <Link href={'/'} className="text-4xl text-neutral font-black">
        vítreo<span className="text-accent">.in</span>
      </Link>
    </div>
  );
}
