import React from 'react';
import { Link } from 'react-router-dom';

export default function RedTeamServices() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Red Team Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Physical & Cyber Attack Services */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Physical & Cyber Attack</h3>
              <p className="text-gray-600 mb-4 mb-4 line-clamp-2">
                Comprehensive physical security assessment and penetration testing services.
              </p>
              <Link 
                to="/services/physical-cyber-attack"
                className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Social Engineering Services */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 mb-4 line-clamp-2">Social Engineering Services</h3>
              <p className="text-gray-600 mb-4">
                Human-focused security testing and awareness training.
              </p>
              <Link 
                to="/services/social-engineering"
                className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* APT Services */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Adversary Simulation </h3>
              <p className="text-gray-600 mb-4 mb-4 line-clamp-2">
                Advanced digital penetration testing and security assessment.
              </p>
              <Link 
                to="/services/adversary-simulation"
                className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}