import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImageUrl = isMobile
    ? '/images/bannerWebVertical.jpg'
    : '/images/bannerWeb.jpg';

  return (
    <div className="relative min-h-screen">
      {/* Banner Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="text-center text-white px-4 hero-title mt-32 md:mt-40 lg:mt-48">
            <p className="text-4xl md:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed">
              Cybersecurity Professional | Tech Enthusiast | Content Creator
            </p>
          </div>
        </div>
        <div className="social-links-container">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}