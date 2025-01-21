import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <div className="p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-200">
          <X size={24} />
        </button>
        <img src="/path/to/logo.png" alt="StonePedia Logo" className="mb-4 w-36 h-12 object-contain" />
        <h2 className="text-xl font-bold mb-2 text-gray-800">Your Trusted Global Stone Marketplace</h2>
        <p className="text-sm mb-6 text-gray-600">
          At StonePedia, we are redefining the future. StonePedia is an award-winning platform simplifying the purchase of the world's finest stone through certified and verified quarry owners and stone processing units across the globe.
        </p>
        <nav>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-600 hover:text-blue-800 transition duration-200">Best Seller</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800 transition duration-200">StonePedia Exclusive</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800 transition duration-200">Premium Stones</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800 transition duration-200">Shop by Category</a></li>
          </ul>
        </nav>
        <div className="mt-6">
          <h3 className="font-bold mb-2 text-gray-800">Contact Info</h3>
          <p className="text-sm text-gray-600">Email: info@stonepedia.com</p>
          <p className="text-sm text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </motion.div>
  );
}

