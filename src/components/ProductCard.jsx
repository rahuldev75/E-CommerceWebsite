import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      addToCart(product);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden card-hover">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        </button>
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;