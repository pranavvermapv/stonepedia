import React from 'react'
import { motion } from 'framer-motion'

const premiumStones = [
  { name: 'Diamond', image: '/images/diamond.jpg' },
  { name: 'Ruby', image: '/images/ruby.jpg' },
  { name: 'Sapphire', image: '/images/sapphire.jpg' },
  { name: 'Emerald', image: '/images/emerald.jpg' },
]

export default function PremiumStones() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Premium Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumStones.map((stone, index) => (
            <motion.div
              key={stone.name}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={stone.image} 
                alt={stone.name} 
                width={300} height={300}
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{stone.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
