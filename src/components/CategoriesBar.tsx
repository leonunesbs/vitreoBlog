import Link from 'next/link';

import { prisma } from '@/libs/prisma';

interface CategoriesBarProps {
  currentCategory?: string;
}

export default async function CategoriesBar({ currentCategory }: CategoriesBarProps) {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  const baseClass = 'carousel-item link link-hover text-sm';
  return (
    <div className="carousel w-full gap-4 overflow-x-auto py-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={
            currentCategory?.toLowerCase() === category.name.toLowerCase()
              ? '/'
              : `/category/${category.name.toLowerCase()}`
          }
          className={
            currentCategory?.toLowerCase() === category.name.toLowerCase() ? `${baseClass} link-accent` : `${baseClass}`
          }
        >
          {category.name.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
