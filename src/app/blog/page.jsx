import Blogs from "./Blogs";

const BlogPosts = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Blogs objResult={objResult} />
    </div>
  );
};

export default BlogPosts;
