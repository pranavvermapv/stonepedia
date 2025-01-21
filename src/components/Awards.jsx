import { motion } from 'framer-motion';
import React from 'react';

const awards = [
  { name: 'Bharat Business Award 2023', image: '/images/bharat-award.jpg', description: 'Recognizing innovative ideas or processes' },
  { name: 'The Print', image: '/images/the-print.jpg', description: 'Celebrating leadership and motivational achievements' },
  { name: 'Times of India', image: '/images/toi.jpg', description: 'Awarded for significant business contributions' },
  { name: 'Hindustan Times', image: '/images/ht.jpg', description: 'Acknowledging latest industry trends at Acetech' },
];

export default function Awards() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={award.image}
                alt={award.name}
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{award.name}</h3>
                <p className="text-sm text-gray-600">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
