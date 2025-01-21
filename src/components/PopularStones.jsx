// popularstone.jsx
'use client'

import { motion } from 'framer-motion'
import React from 'react'

const popularStones = [
  { name: 'Quartz', image: '/images/Quartz.webp?height=150&width=150' },
  { name: 'Amethyst', image: '/images/Quartz.webp?height=150&width=150' },
  { name: 'Rose Quartz', image: '/images/Quartz.webp?height=150&width=150' },
  { name: 'Citrine', image: '/images/Quartz.webp?height=150&width=150' },
  { name: 'Agate', image: '/images/Quartz.webp?height=150&width=150' },
  { name: 'Jasper', image: '/images/Quartz.webp?height=150&width=150' },
]

export default function PopularStones() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Stones</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularStones.map((stone, index) => (
            <motion.div
              key={stone.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
              src={stone.image} 
              alt={stone.name} 
              width={150} 
              height={150} className="w-full h-32 object-cover" 
              />
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold">{stone.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

