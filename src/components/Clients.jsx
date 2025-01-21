'use client'

import React from 'react'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Marble Masters', logo: '/images/marble-masters-logo.jpg' },
  { name: 'Stone Suppliers Inc.', logo: '/images/stone-suppliers-logo.jpg' },
  { name: 'Luxury Interiors', logo: '/images/luxury-interiors-logo.jpg' },
  { name: 'Architectural Stones', logo: '/images/architectural-stones-logo.jpg' },
]

export default function Clients() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

