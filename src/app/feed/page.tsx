import { CategoriesBar, PostCard } from '@/components';
import { prisma } from '@/libs/prisma';

export default async function Feed() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
    },
    where: {
      published: true,
    },
  });
  return (
    <>
      <CategoriesBar />
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <div className="divider mb-8"></div>
        </div>
      ))}
    </>
  );
}
