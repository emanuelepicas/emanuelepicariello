import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI-Powered Business Consultancy',
    description: 'Supercharge your business with AI tools, automation, and process optimization. From AI agents to low-code platforms, we help you identify real opportunities and implement smart, scalable solutions.',
    image: '/images/modelling.jpg', // Placeholder image
  },
  {
    title: 'Security Advisory Services',
    description: 'Unlock expert guidance to align your cybersecurity strategy with business goals. From risk assessments to policy design, we help you build resilient systems, mitigate threats, and stay ahead of evolving digital risks.',
    image: '/images/consultancy.jpg', // Placeholder image
  },
];

export default function ConsultancyServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">AI Automation & Cybersecurity Consultancy</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book Now Button */}
        <div className="text-center mt-16">
          <Link
            to="/book-consultation"
            className="px-10 py-4 bg-[#0a2b1d] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#1a4a35] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
