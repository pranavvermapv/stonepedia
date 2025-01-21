import React, { useState } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PremiumStones from '../components/PremiumStones';
import PopularStones from '../components/PopularStones';
import KeyMetrics from '../components/KeyMetrics';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import LatestNews from '../components/LatestNews';
import WhatsAppModal from '../components/WhatsAppModal';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero />
      <Categories />
      <PremiumStones />
      <PopularStones />
      <KeyMetrics />
      <Awards />
      <Testimonials />
      <Clients />
      <LatestNews />
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
