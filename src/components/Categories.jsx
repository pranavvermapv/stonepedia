'use client'

import { motion } from 'framer-motion'

const categories = [
  'Igneous',
  'Sedimentary',
  'Metamorphic',
  'Precious Gems',
  'Semi-Precious Gems',
  'Minerals'
]

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stone Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition duration-200"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              <h3 className="text-white text-lg font-semibold transition duration-200 hover:text-xl hover:font-bold hover:text-shadow-lg">{category}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}