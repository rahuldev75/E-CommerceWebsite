import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/product';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      if (selectedCategory === "All") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === selectedCategory));
      }
      setIsLoading(false);
    }, 300);
  }, [selectedCategory]);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our amazing collection of products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-3"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                    <div className="h-8 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;