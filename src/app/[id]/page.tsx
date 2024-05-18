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
  if (!params?.id) return <>Erro</>;
  const post = await prisma.post.findFirst({
    where: {
      id: parseInt(params?.id),
    },
  });

  if (!post) return <>Erro</>;
  return (
    <>
      <h1 className="text-4xl font-black mb-2">{post.title}</h1>
      <h2 className="opacity-50 text-2xl mb-10">{post.description}</h2>
      <p>{post.content}</p>
    </>
  );
}
