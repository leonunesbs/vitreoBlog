import { Prisma } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

import { extractTextFromHTML } from '@/libs/utils';

interface PostCardProps {
  post: Prisma.PostGetPayload<{
    include: {
      categories: true;
    };
    select: {
      id: true;
      title: true;
      description: true;
      image: true;
      createdAt: true;
    };
  }>;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="space-y-4">
      <div>
        <span className="opacity-50 text-sm">
          {post.createdAt.toLocaleString('pt-br', {
            dateStyle: 'short',
            timeZone: 'America/Sao_Paulo',
          })}
        </span>
        <div className="flex space-x-4">
          <Link href={`/post/${post.id}`} className="w-full">
            <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
            <div className="hidden sm:inline-block">
              <p className="line-clamp-3">
                {post.description} - {extractTextFromHTML(post.content)}
              </p>
            </div>
          </Link>
          <Link href={`/post/${post.id}`}>
            <Image
              alt={post.title}
              src={post.image || '/'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded"
              loading="lazy"
              width={130}
              height={130}
            />
          </Link>
        </div>
      </div>
      <div className="flex">
        {post.categories.map(({ id, name }) => (
          <Link key={id} className="badge badge-neutral" href={`/category/${name}`}>
            {name.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
