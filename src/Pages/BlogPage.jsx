import { Card } from "../components/Card";
import {blogs}  from '../constants/index.js'

// const blogData = [
//   {
//     title: 'The Beauty of Nature',
//     description: 'Discover the unseen wonders of our planet with this journey into the wild beauty of nature...',
//     image: 'https://source.unsplash.com/600x400/?nature',
//     author: 'John Doe',
//     authorImg: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     title: 'City Life Hustle',
//     description: 'Explore the vibrant chaos and culture that defines modern urban living.',
//     image: 'https://source.unsplash.com/600x400/?city',
//     author: 'Jane Smith',
//     authorImg: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     title: 'Minimalism in Daily Life',
//     description: 'Embrace minimalism for a focused and fulfilling lifestyle.',
//     image: 'https://source.unsplash.com/600x400/?minimalism',
//     author: 'Alex Lee',
//     authorImg: 'https://randomuser.me/api/portraits/men/55.jpg',
//   },
// ];

const BlogPage = () => {
  return (
    // <div className="min-h-screen bg-gray-100 py-10 px-6">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {blogs.map((blog, index) => (
    //       <Card key={index} blog={blog} />
    //     ))}
    //   </div>
    // </div>
     <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        />
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
