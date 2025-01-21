import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import PremiumStones from './PremiumStones';
import PopularStones from './PopularStones';
import KeyMetrics from './KeyMetrics';
import Awards from './Awards';
import Testimonials from './Testimonials';
import Clients from './Clients';
import LatestNews from './LatestNews';

export default function Home() {
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
    </>
  );
}

