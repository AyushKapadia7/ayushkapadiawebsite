import { NextPage } from "next";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import BlogItem from "@/components/blogs/BlogItem";

const BlogPage: NextPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="text-center mt-14">
        <h1 className="text-3xl font-bold">Blog</h1>
        <BlogItem
          image="/images/hello.png"
          title="Hello World"
          link="https://ayushkapadiablogwebsite.netlify.app/hello-world/"
          date="September 07, 2021"
          minute="3 min read"
          description="This is my first post on my new blog! How exciting!"
        />
        <BlogItem
          image="/images/image.png"
          title="Create Github Repository"
          link="https://ayushkapadiablogwebsite.netlify.app/my-second-post/"
          date="September 07, 2021"
          minute="5 min read"
          description="Create you own Github repository from existing projects."
        />
      </div>
    </div>
  );
};

export default BlogPage;
