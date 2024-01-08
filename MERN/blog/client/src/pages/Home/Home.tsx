import { useEffect, useState } from "react";
import { posts } from "../../api/post";
import Post from "../../components/post/Post";
import { blogPostData } from "../../types/BlogTypeData";
const Home = () => {
  const [post, setPost] = useState([]);

  const takeAllPosts = async () => {
    const response: [] | any = await posts();
    console.log("POSTS", response);
    console.log("hiii");
    setPost(response?.data);
  };

  useEffect(() => {
    takeAllPosts();

    console.log("hi");
  }, []);
  console.log(post);

  return (
    <section className="grid justify-center md:justify-center md:grid-cols-2 lg:grid-cols-3 md:p-2 md:m-2 md:gap-2 lg:gap-">
      {post &&
        post?.map((blog: blogPostData) => {
          return <Post {...blog} key={blog._id} />;
        })}
    </section>
  );
};

export default Home;
