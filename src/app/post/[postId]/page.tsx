import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaDownload } from 'react-icons/fa6';

import { prisma } from '@/libs/prisma';

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}
export async function generateMetadata({
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
  return {
    title: post.title,
  };
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
      image: true,
    },
  });

  if (!post) notFound();
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black">{post.title}</h1>
          <h2 className="opacity-50 text-2xl ">{post.description}</h2>
        </div>
        <Link className="btn btn-accent btn-sm" href={'/files/olho-seco-1.pdf'} target="_blank">
          <FaDownload className="h-4 w-4" />
          Baixar
        </Link>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={400}
        className="mx-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="prose">
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </div>
  );
}
