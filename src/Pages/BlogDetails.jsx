import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogs } from '../constants';

import BlogManager from '../components/Comments'
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      // Replace this with your actual API logic
      const dummyBlogs = [
        {
          id: '1',
          title: 'First Blog Post',
          content: 'This is the first blog content.',
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: '2',
          title: 'Second Blog Post',
          content: 'This is the second blog content.',
          image: 'https://via.placeholder.com/400x300',
        },
      ];

      const foundBlog = blogs.find((b) => b.id === id);
      setBlog(foundBlog);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Blog not found or loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white  border border-gray-100 rounded ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow px-2 rounded ">
        {/* Left: Blog Image */}
        <div>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Title & Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">{blog.content}</p>
        </div>



      </div>

{/* comments */}
      <BlogManager/>
    </div>
  );
};

export default BlogDetails;
