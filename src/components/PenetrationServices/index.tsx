import React from 'react';

export default function PenetrationServices() {
  const methodologies = [
    {
      title: 'Black Box Assessment',
      description: 'External perspective testing with no prior knowledge of internal systems.',
      details: 'Simulates real-world external attackers attempting to breach your systems.'
    },
    {
      title: 'Gray Box Assessment',
      description: 'Partially informed testing with limited internal knowledge.',
      details: 'Balances external and internal perspectives for comprehensive testing.'
    },
    {
      title: 'Crystal Box Assessment',
      description: 'Full-knowledge testing with complete system access.',
      details: 'Thorough evaluation of all system components and configurations.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Penetration Testing Methodologies</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologies.map((method) => (
            <div key={method.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-gray-500">{method.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}