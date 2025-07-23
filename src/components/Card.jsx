import { Link } from "react-router-dom";

export function Card(params){
  const {id,title,content,image}=params.blog
    return(
        
        <Link to={`/blog-details/${id}`} className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <img className="w-full h-48 object-cover" src={image} alt="Blog Image"/>
  <div className="p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 text-sm mb-4">
     {content}
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author"/>
        <span className="text-sm text-gray-700">John Doe</span>
      </div>
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Read More →</a>
    </div>
  </div>
</Link>
 )
}