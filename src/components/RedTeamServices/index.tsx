import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Adversarial Simulation with AI',
    description: 'Leverage AI to mimic advanced attacks and simulate adversarial behaviors, providing comprehensive insights into your vulnerabilities.',
    image: '/images/AI.jpg',
  },
  {
    title: 'Chatbot and Social Engineering Attacks',
    description: 'Advanced chatbots used for automated reconnaissance, phishing, and social engineering.',
    image: '/images/Chatbot.jpg',
  },
  {
    title: 'AGI for Threat Emulation',
    description: 'Adaptive and intelligent threat emulation to challenge even the most secure systems.',
    image: '/images/Threat.jpg',
  },
  {
    title: 'MITRE ATT&CK & ATLAS Integration',
    description: 'Aligning threat simulations with MITRE frameworks for comprehensive and structured assessments.',
    image: '/images/MITRE.jpg',
  },
  {
    title: 'Physical Penetration Testing',
    description: 'Assess physical security controls through real-world simulations, including on-site evaluations and access attempts.',
    image: '/images/PhysicalPenetration.jpg',
  },
  {
    title: 'Long-Term Red Team Testing',
    description: 'Conduct sustained assessments with advanced phishing, persistence, and stealth to simulate sophisticated threat actors.',
    image: '/images/LongTermRedTeam.jpg',
  },
];

export default function RedTeamServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Advanced Red Teaming Services</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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
