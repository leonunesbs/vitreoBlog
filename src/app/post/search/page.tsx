import { prisma } from '@/libs/prisma';

export default async function Search({
  searchParams,
}: {
  searchParams?: {
    q: string;
  };
}) {
  // const searchString = searchParams?.q;
  // const criteria = {
  //   contains: searchString,
  // };

  const posts = await prisma.post.findMany({});
  console.log(posts);

  return (
    <>
      {/* <CategoriesBar />
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
      )} */}
      {searchParams?.q}
    </>
  );
}
