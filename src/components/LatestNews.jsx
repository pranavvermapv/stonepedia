'use client'

import { motion } from 'framer-motion'
import React from 'react'
const newsItems = [
  {
    title: 'The Benefits of Marble in Modern Architecture',
    image: '/images/marble-architecture.jpg',
    excerpt: 'Discover how marble is shaping contemporary design trends...',
  },
  {
    title: 'Sustainable Practices in Stone Quarrying',
    image: '/images/sustainable-quarrying.jpg',
    excerpt: 'Learn about the latest eco-friendly methods in stone extraction...',
  },
  {
    title: 'Case Study: Luxury Hotel Renovation with StonePedia',
    image: '/images/hotel-renovation.jpg',
    excerpt: 'See how we transformed a 5-star hotel with our premium stones...',
  },
]

export default function LatestNews() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
              src={item.image} 
              alt={item.title} 
              width={400} height={200} 
              className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            View More Articles
          </a>
        </div>
      </div>
    </section>
  )
}

