const SingleList = async ({ params }) => {
  const { id } = params;
  const result = await fetch(`https://dev.to/api/articles/${id}`);

  const onePost = await result.json();

  return (
    <>
      <div>
        <div className="font-bold text-xl">{onePost.title}</div>
        <img src={onePost.cover_image} alt="" />
        {onePost.tag_list}
        {onePost.published_at}
      </div>
    </>
  );
};

export default SingleList;
