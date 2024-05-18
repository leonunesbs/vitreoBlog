import { notFound } from 'next/navigation';

import { prisma } from '@/libs/prisma';

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({
  params,
}: {
  params?: {
    id: string;
  };
}) {
  if (!params?.id) notFound();
  const id = parseInt(params?.id);
  if (!id) notFound();

  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  if (!post) notFound();
  return (
    <>
      <h1 className="text-4xl font-black mb-2">{post.title}</h1>
      <h2 className="opacity-50 text-2xl mb-10">{post.description}</h2>
      <p>{post.content}</p>
    </>
  );
}
