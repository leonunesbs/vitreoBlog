import Image from 'next/image';
import Link from 'next/link';

import { prisma } from '@/libs/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {posts.map((post) => (
        <div key={post.id}>
          <div className="space-y-4">
            <div>
              <span className="opacity-50 text-sm">
                {post.createdAt.toLocaleString('pt-br', {
                  dateStyle: 'short',
                  timeZone: 'UTC',
                })}
              </span>
              <div className="flex space-x-4">
                <Link href={`/${post.id}`} className="w-full">
                  <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
                  <div className="hidden sm:inline-block">
                    <p className="line-clamp-3">
                      {post.description} - {post.content}
                    </p>
                  </div>
                </Link>
                <Link href={`/${post.id}`} className="aspect-square">
                  <Image
                    alt="image"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded shadow"
                    loading="lazy"
                    width={130}
                    height={130}
                  />
                </Link>
              </div>
            </div>
            <div className="flex">
              {post.categories.map((category) => (
                <span key={category.id} className="badge badge-neutral">
                  {category.name}
                </span>
              ))}
            </div>
          </div>
          <div className="divider mb-8"></div>
        </div>
      ))}
    </div>
  );
}
