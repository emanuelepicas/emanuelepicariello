import React from 'react';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Banner Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://emanuelepicariello.com/banner%20web.jpg')`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end pb-32">
        <div className="text-center text-white px-4">
          <p className="text-3xl md:text-4xl font-light tracking-wide mb-12">
            Cybersecurity Professional | Tech Enthusiast | Content Creator
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}