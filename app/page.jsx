//app\page.jsx
'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import PremiumStones from './components/PremiumStones'
import PopularStones from './components/PopularStones'
import KeyMetrics from './components/KeyMetrics'
import Awards from './components/Awards'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'
import WhatsAppModal from './components/WhatsAppModal'

export default function Home() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col relative pb-20"> {/* Added pb-20 for extra space */}
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <PremiumStones />
        <PopularStones />
        <KeyMetrics />
        <Awards />
        <Testimonials />
        <Clients />
        <LatestNews />
      </main>
      <Footer />
      <button
        onClick={() => setIsWhatsAppModalOpen(true)}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  )
}


