import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#0a2b1d] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SocialLinks />
        <div className="mt-8 pt-8 border-t border-[#1a4a35]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              © 2024 Emanuele Picariello. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-[#7cffb2] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[#7cffb2] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}