import { useState } from 'react'
import { motion } from 'framer-motion'

const suggestions = [
  'Granite',
  'Marble',
  'Quartz',
  'Limestone',
  'Sandstone',
  'Slate',
  'Onyx',
  'Travertine',
  'Basalt',
  'Soapstone'
]

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const handleChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setFilteredSuggestions([])
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["Discover", "the", "World", "of", "Stones"].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex">
            <input
              type="text"
              placeholder="Search for stones..."
              className="w-full px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg border-2 border-blue-500 hover:bg-blue-600 transition duration-200"
            >
              Search
            </button>
          </div>
          {filteredSuggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </motion.form>
      </div>
    </section>
  )
}