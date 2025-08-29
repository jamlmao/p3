import React from 'react';
import Image from 'next/image';
import {categories} from '@/data/data'

const RetailPOSShowcase = () => {
  
  return (
    <section className="px-[5%] py-16 md:py-24 relative w-full py-20">
      <div className="container mx-auto">
        {/* Subtitle */}
        <div className="text-center">
          <p className="text-blue-800 font-medium mb-4">Retail Stores</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 max-w-4xl mx-auto text-center mb-16">
            <span className='text-blue-800'>Perfect</span> point of sale software for most retail stores
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side - POS Image */}
          <div className="lg:w-1/2 relative rounded-md">
            <Image 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="POS"
              width={650} 
              height={400}
              className="object-contain rounded-lg"
              priority
            />
          </div>

          {/* Right side - Categories Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white hover:bg-blue-50 transition-colors duration-300 p-6 rounded-lg shadow-sm flex items-center gap-4"
              >
                <div className="bg-blue-50 p-3 rounded-lg">
                  {category.icon }
                </div>
                <span className="font-medium text-gray-800">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailPOSShowcase;