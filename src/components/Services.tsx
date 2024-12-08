import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Cyber Security Consultancy',
    description: 'Expert guidance on cybersecurity strategy and implementation.',
    image: '/images/CyberConsultancy.jpg',
    link: '/services/consultancy'
  },
  {
    title: 'AI Red Teaming',
    description: 'Advanced adversary simulation and security assessment.',
    image: '/images/RedTeaming.jpg',
    link: '/services/red-team'
  },
  {
    title: 'Penetration Testing',
    description: 'Comprehensive security testing including Black Box, White Box, Crystal Box, and White Box methodologies.',
    image: '/images/PenetrationTesting.jpg',
    link: '/services/penetration'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Book a Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                loading="lazy"
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors"
                >
                  Book now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
