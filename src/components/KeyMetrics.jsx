'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const metrics = [
  { label: 'Square Feet of Stone Delivered', value: 1000000, suffix: '+', duration: 7 },
  { label: 'National/Global Awards', value: 2, suffix: '', duration: 2.5 },
  { label: 'Projects Completed', value: 20, suffix: '+', duration: 2.5 },
  { label: 'Customer Satisfaction', value: 99.9, suffix: '%', duration: 2.5 },
]

export default function KeyMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('key-metrics')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="key-metrics" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-4xl font-bold mb-2">
                {isVisible && (
                  <CountUp
                    end={metric.value}
                    duration={metric.duration}
                    separator=","
                    decimals={metric.label.includes('Satisfaction') ? 1 : 0}
                    suffix={metric.suffix}
                  />
                )}
              </p>
              <p className="text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

