import { CategoriesBar, PostCard } from '@/components';
import { prisma } from '@/libs/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
    },
    where: {
      published: true,
    },
  });
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-4">
      <CategoriesBar />
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <div className="divider mb-8"></div>
        </div>
      ))}
    </div>
  );
}
