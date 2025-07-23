import React, { useState } from 'react';
import {useBlog} from '../constants/index';

const AddBlogForm = () => {

  const { addBlog } = useBlog();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert('Please fill in title and content');
      return;
    }

   addBlog({
      id: Date.now().toString(),
      ...formData,
    });

    // Clear form
    setFormData({
      title: '',
      content: '',
      image: '',
    });
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="max-w-xl mx-auto p-6 bg-white rounded shadow-md"
    // >
    //   <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Blog</h2>

    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2" htmlFor="title">
    //       Title <span className="text-red-500">*</span>
    //     </label>
    //     <input
    //       type="text"
    //       id="title"
    //       name="title"
    //       value={formData.title}
    //       onChange={handleChange}
    //       placeholder="Enter blog title"
    //       className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       required
    //     />
    //   </div>

    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2" htmlFor="content">
    //       Content <span className="text-red-500">*</span>
    //     </label>
    //     <textarea
    //       id="content"
    //       name="content"
    //       rows="5"
    //       value={formData.content}
    //       onChange={handleChange}
    //       placeholder="Write blog content here..."
    //       className="w-full border border-gray-300 rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       required
    //     />
    //   </div>

    //   <div className="mb-6">
    //     <label className="block text-gray-700 mb-2" htmlFor="image">
    //       Image URL
    //     </label>
    //     <input
    //       type="url"
    //       id="image"
    //       name="image"
    //       value={formData.image}
    //       onChange={handleChange}
    //       placeholder="Enter image URL (optional)"
    //       className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     />
    //   </div>

    //   <button
    //     type="submit"
    //     className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
    //   >
    //     Add Blog
    //   </button>
    // </form>
  <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200 space-y-6"
>
  <h2 className="text-3xl font-bold text-blue-700 text-center"> Add a New Blog</h2>

  {/* Title */}
  <div className="space-y-1">
    <label
      htmlFor="title"
      className="block text-sm font-medium text-gray-700 uppercase tracking-wide"
    >
      Blog Title <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={formData.title}
      onChange={handleChange}
      placeholder="Enter an eye-catching title"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      required
    />
  </div>

  {/* Content */}
  <div className="space-y-1">
    <label
      htmlFor="content"
      className="block text-sm font-medium text-gray-700 uppercase tracking-wide"
    >
      Blog Content <span className="text-red-500">*</span>
    </label>
    <textarea
      id="content"
      name="content"
      rows="6"
      value={formData.content}
      onChange={handleChange}
      placeholder="Write your blog content here..."
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none"
      required
    ></textarea>
  </div>

  {/* Image */}
  <div className="space-y-1">
    <label
      htmlFor="image"
      className="block text-sm font-medium text-gray-700 uppercase tracking-wide"
    >
      Image URL
    </label>
    <input
      type="url"
      id="image"
      name="image"
      value={formData.image}
      onChange={handleChange}
      placeholder="Paste an image link (optional)"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
  >
    ➕ Add Blog
  </button>
</form>


  );
};

export default AddBlogForm;
