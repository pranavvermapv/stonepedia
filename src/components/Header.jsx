import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <img src="/path/to/logo.png" alt="StonePedia Logo" className="w-8 h-8 mr-2" />
          StonePedia
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-110 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-110 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-110 inline-block">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-110 inline-block">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="text-white hover:text-yellow-300 transition duration-300">
            <ShoppingCart size={24} />
          </Link>
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-white hover:text-yellow-300 transition duration-300 md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

