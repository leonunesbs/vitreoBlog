import { notFound } from 'next/navigation';

import { CategoriesBar, PostCard } from '@/components';
import { prisma } from '@/libs/prisma';

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({
    where: {
      posts: {
        every: {
          published: true,
        },
      },
    },
  });

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
      name: params.categoryName,
    },
    include: {
      posts: {
        include: {
          categories: true,
        },
        where: {
          published: true,
        },
      },
    },
  });
  if (!category) notFound();

  const posts = category.posts;

  return (
    <>
      <CategoriesBar currentCategory={params.categoryName} />
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <div className="divider mb-8"></div>
        </div>
      ))}
      {!posts.length && (
        <div className="grow text-center py-12">
          <i>Nenhum resultado encontrado.</i>
        </div>
      )}
    </>
  );
}
