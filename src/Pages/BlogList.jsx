import { useState } from "react";
import { Card } from "../components/Card";
import { blogs } from "../constants/index";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBlogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No blogs found.</p>
        ) : (
          filteredBlogs.map((blog) => <Card key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
}
