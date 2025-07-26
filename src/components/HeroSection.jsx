import React from 'react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to ShopEase
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Discover amazing products at unbeatable prices
        </p>
        <button 
          onClick={scrollToProducts}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;