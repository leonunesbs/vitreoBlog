import { notFound } from 'next/navigation';

import { prisma } from '@/libs/prisma';

export const post = {
  title: 'Olho seco 1',
  description: 'Epidemiologia e classificação',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatibus saepe, fuga distinctio et consectetur numquam. Officiis sint nihil delectus veniam aliquid reiciendis? Expedita aliquid iure nobis libero dignissimos. Beatae!',
};

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = parseInt(params.id);
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

export default Post;
