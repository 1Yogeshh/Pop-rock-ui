import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]'>
      <Header />
      <Hero />
      <Products />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
