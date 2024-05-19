import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export async function Footer({}: FooterProps) {
  return (
    <div className="bg-neutral text-neutral-content py-12 px-4 flex flex-col w-full">
      <div className="mx-auto w-full max-w-2xl flex flex-row justify-between gap-12">
        <p>
          <Link href={'/'} className="text-4xl text-neutral-content font-black">
            vítreo<span className="text-accent">.in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
