import React from 'react';

export default function ConsultancyServices() {
  const services = [
    {
      title: 'Threat Modeling Services',
      description: 'Comprehensive threat analysis and vulnerability assessment.',
      features: [
        'System architecture review',
        'Attack surface mapping',
        'Risk prioritization',
        'Mitigation strategies'
      ]
    },
    {
      title: 'Security Advisory Services',
      description: 'Expert guidance on security strategy and implementation.',
      features: [
        'Security policy development',
        'Compliance consulting',
        'Security architecture review',
        'Best practices implementation'
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Cyber Security Consultancy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-500">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/book-consultation" target="_self">
            <button className="px-8 py-3 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors">
              Book a Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
