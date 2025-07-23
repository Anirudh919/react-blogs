import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({getLogin,logout}) => {
  const [isOpen, setIsOpen] = useState(false);
console.log(logout)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to={"/"} className="text-2xl font-bold text-blue-600 cursor-pointer drop-shadow-[0_4px_3px_rgba(49,130,246,0.5)]  rounded">
          MyBlog
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
           
           {!getLogin() ?     <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
          >Login</Link> :      <Link
          to="/add-blog"
          className="hover:text-blue-600 font-semibold "
          >Add Blog</Link> } 
       
          <a onClick={()=>logout()} className="cursor-pointer hover:text-blue-600 text-red-400">Logout</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link
            to={"/"}
            className="block px-6 py-3 border-b border-gray-200 text-gray-700 hover:bg-blue-50"
          >
            Home
          </Link>
          <a
            href="#"
            className="block px-6 py-3 border-b border-gray-200 text-gray-700 hover:bg-blue-50"
          >
            Blogs
          </a>
          <a
            href="#"
            className="block px-6 py-3 border-b border-gray-200 text-gray-700 hover:bg-blue-50"
          >
            About
          </a>
          <a
            href="#"
            className="block px-6 py-3 border-b border-gray-200 text-gray-700 hover:bg-blue-50"
          >
            Contact
          </a>

          {!getLogin() &&  
                <Link
                    to="/login"
                    className="text-blue-600 font-semibold hover:underline block px-6 py-3 hover:bg-blue-50"
                  >Login</Link>
          }
      
        </nav>
      )} */}
    </header>
  );
};

export default Header;
