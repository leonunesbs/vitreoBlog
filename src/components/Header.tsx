import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

import { Search } from './Search';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({}: HeaderProps) {
  return (
    <div className="py-2 px-4 shadow dark:shadow-none flex flex-col text-center bg-neutral text-neutral-content gap-2">
      <span>
        <Link href={'/'} className="text-4xl font-black">
          vítreo<span className="text-accent">.in</span>
        </Link>
      </span>
      <Suspense>
        <Search />
      </Suspense>
    </div>
  );
}
