import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl mx-auto">
              <img
                src="/images/profile.png"
                alt="Emanuele Picariello"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Persevering cybersecurity professional with extensive experience in offensive security, 
              particularly in Red Team engagements, cloud security, and AI security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}