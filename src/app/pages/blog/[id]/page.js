// "use client";
// import BlogDetails from "@/components/pageSection/blogs/BlogDetails";
// import React from "react";

// // Dummy blog data array
// const blogPosts = [
//   {
//     id: "1",
//     title: "How Fancentrale Work",
//     content: "<p>This is a dummy blog post about how Fancentrale works.</p>",
//     image: "/images/icons/Icons/BlogImage.svg",
//   },
//   {
//     id: "2",
//     title: "Benefits of Plus One",
//     content: "<p>Discover the benefits of using Plus One for your events.</p>",
//     image: "/images/pillarsofIslam/2.png",
//   },
//   {
//     id: "3",
//     title: "Tips for a Great Event",
//     content: "<p>Here are some tips to make your event memorable.</p>",
//     image: "/images/pillarsofIslam/3.png",
//   },
// ];

// import { useParams } from "next/navigation";

// const Page = () => {
//   const params = useParams();
//   const { id } = params;
//   // Find the blog post by id
//   const blogData = blogPosts.find((blog) => blog.id === id);
//   return <BlogDetails selectedCard={blogData} showDetails={true} />;
// };

// export default Page;
