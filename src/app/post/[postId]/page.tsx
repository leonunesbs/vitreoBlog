import { notFound } from 'next/navigation';

import { prisma } from '@/libs/prisma';

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}

export default async function Post({
  params,
}: {
  params?: {
    postId: string;
  };
}) {
  if (!params?.postId) notFound();
  const postId = parseInt(params?.postId);
  if (!postId) notFound();

  const post = await prisma.post.findFirst({
    where: {
      id: postId,
    },
    select: {
      title: true,
      description: true,
      content: true,
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
