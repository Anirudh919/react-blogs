import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
        MyBlog
      </Link>

      {/* Optional: Link to Home or Signup */}
      <nav className="space-x-4">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Home
        </Link>


        {window.location.pathname !== '/login' && 
           <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </Link>
        }
     
      </nav>
    </header>
  );
};

export default LoginHeader;
