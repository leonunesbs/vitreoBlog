import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({}: HeaderProps) {
  return (
    <div className="py-2 px-4 shadow dark:shadow-none flex justify-center bg-neutral text-neutral-content">
      <Link href={'/'} className="text-4xl font-black">
        vítreo<span className="text-accent">.in</span>
      </Link>
    </div>
  );
}
