import { notFound } from 'next/navigation';

import { CategoriesBar, PostCard } from '@/components';
import { prisma } from '@/libs/prisma';

export async function generateStaticParams() {
  const categories = await prisma.category.findMany();

  return categories.map((category) => ({
    categoryName: category.name,
  }));
}

export default async function Category({
  params,
}: {
  params?: {
    categoryName: string;
  };
}) {
  if (!params?.categoryName) notFound();
  const category = await prisma.category.findFirst({
    where: {
      name: params.categoryName.toUpperCase(),
    },
    include: {
      posts: {
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  if (!category) notFound();

  const posts = category.posts;

  return (
    <div>
      <CategoriesBar currentCategory={params.categoryName} />
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <div className="divider mb-8"></div>
        </div>
      ))}
    </div>
  );
}
