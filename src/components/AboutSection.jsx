import React from 'react';
import { Package, Heart, Star, Shield, Truck, Headphones } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Heart,
      title: "Quality Products",
      description: "Carefully curated high-quality items"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help you"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Your payment information is safe"
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Competitive prices guaranteed"
    },
    {
      icon: Package,
      title: "Easy Returns",
      description: "30-day hassle-free returns"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About ShopEase
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            ShopEase is your trusted online shopping destination, offering a curated selection of high-quality products 
            at competitive prices. We're committed to providing an exceptional shopping experience with fast shipping, 
            excellent customer service, and a hassle-free return policy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;