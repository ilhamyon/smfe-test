import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          image={post.medium_image.length > 0 ? post.medium_image[0].url : null}
          date={post.published_at}
        />
      ))}
    </div>
  );
};

export default PostList;
