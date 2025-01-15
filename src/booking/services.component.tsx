import React from 'react';
import { HairstyleCard } from './hairstyleList/hairstyleCard.component';
import { hairstyles } from './hairstyleList/hairstyles.component';
 const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairstyles.map(hairstyle => (
            <HairstyleCard hairstyle={hairstyle} key={hairstyle.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;