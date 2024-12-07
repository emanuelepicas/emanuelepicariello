import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PenetrationServices() {
  const methodologies = [
    {
      title: 'Black Box Assessment',
      description: 'External perspective testing with no prior knowledge of internal systems.',
      details: 'Simulates real-world external attackers attempting to breach your systems.',
      image: '/images/Black.jpg' // Placeholder image
    },
    {
      title: 'White Box Assessment',
      description: 'Partially informed testing with limited internal knowledge.',
      details: 'Balances external and internal perspectives for comprehensive testing.',
      image: '/images/White.jpg' // Placeholder image
    },
    {
      title: 'Crystal Box Assessment',
      description: 'Full-knowledge testing with complete system access.',
      details: 'Thorough evaluation of all system components and configurations.',
      image: '/images/Crystal.jpg' // Placeholder image
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Penetration Testing Methodologies</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {methodologies.map((method) => (
            <motion.div
              key={method.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={method.image}
                alt={method.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <p className="text-gray-500">{method.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book Now Button */}
        <div className="text-center mt-12">
          <Link
            to="/book-consultation"
            className="px-8 py-4 bg-[#0a2b1d] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#1a4a35] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
