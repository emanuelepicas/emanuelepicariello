import React from 'react';

const certifications = [
  {
    title: 'Red Hat Certified System Administrator',
    link: 'https://www.credly.com/badges/29afb1d6-fcf2-4be8-b860-c797d94a51db/public_url',
    description: 'Demonstrates proficiency in managing and administering Red Hat Enterprise Linux environments.',
    image: '/images/RedHatCertifiedSystemAdministrator.png'
  },
  {
    title: 'Burp Suite Certified Practitioner',
    link: 'https://portswigger.net/web-security/e/c/07c1e0a7a6089ea5',
    description: 'Validates skills in web application security testing using Burp Suite.',
    image: '/images/bscp.png'
  },
  {
    title: 'eWPTX',
    link: 'https://verified.elearnsecurity.com/certificates/02f39488-253d-44e6-9036-df723515f12a',
    description: 'Advanced certification focusing on complex web application vulnerabilities and exploits.',
    image: '/images/eWPTxv2.png'
  },
  {
    title: 'OSCP',
    link: 'https://www.credential.net/a8693bbe-37d3-4133-aeb9-b8893599cbe6',
    description: 'Recognizes practical skills in penetration testing and ethical hacking techniques.',
    image: '/images/oscp.png'
  },
  {
    title: 'OSEP',
    link: 'https://www.credential.net/37a18a39-e2ab-44d6-a27b-86ef5b48bd9e',
    description: 'Advanced certification emphasizing evasive penetration testing and advanced tactics.',
    image: '/images/osep.png'
  },
  {
    title: 'Certified Red Team Operator',
    link: 'https://eu.badgr.com/public/assertions/UZ6-r3tfSYetcl2bcM2tKg',
    description: 'Validates expertise in conducting red team engagements simulating advanced adversaries.',
    image: '/images/crto.png'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center p-6">
                <img
                  loading="lazy"
                  src={cert.image}
                  alt={cert.title}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{cert.title}</h3>
                <p className="text-gray-600 text-center">{cert.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
