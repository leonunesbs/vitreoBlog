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

  console.log(searchParams?.q);

  // const posts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: criteria,
  //       },
  //       {
  //         description: criteria,
  //       },
  //       {
  //         categories: {
  //           some: {
  //             name: criteria,
  //           },
  //         },
  //       },
  //       {
  //         content: criteria,
  //       },
  //     ],
  //     published: true,
  //   },
  //   include: {
  //     categories: true,
  //   },
  // });

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
