import React from 'react';

const certifications = [
  {
    title: 'Red Hat Certified System Administrator',
    link: 'https://www.credly.com/badges/29afb1d6-fcf2-4be8-b860-c797d94a51db/public_url',
    description: 'Demonstrates proficiency in managing and administering Red Hat Enterprise Linux environments.',
    image: 'https://images.credly.com/size/340x340/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png'
  },
  {
    title: 'Burp Suite Certified Practitioner',
    link: 'https://portswigger.net/web-security/e/c/07c1e0a7a6089ea5',
    description: 'Validates skills in web application security testing using Burp Suite.',
    image: 'https://portswigger.net/content/images/logos/burp-suite-certified-color-large.svg'
  },
  {
    title: 'eWPT',
    link: 'https://verified.elearnsecurity.com/certificates/a0d3ea6a-4083-47ce-a001-8813d8c1c260',
    description: 'Covers comprehensive knowledge of web application penetration testing methodologies.',
    image: 'https://images.credly.com/size/340x340/images/3c4602d8-832e-4a24-b42d-00359ce746f7/image.png'
  },
  {
    title: 'eWPTX',
    link: 'https://verified.elearnsecurity.com/certificates/02f39488-253d-44e6-9036-df723515f12a',
    description: 'Advanced certification focusing on complex web application vulnerabilities and exploits.',
    image: 'https://images.credly.com/size/340x340/images/3c4602d8-832e-4a24-b42d-00359ce746f7/image.png'
  },
  {
    title: 'OSCP',
    link: 'https://www.credential.net/a8693bbe-37d3-4133-aeb9-b8893599cbe6',
    description: 'Recognizes practical skills in penetration testing and ethical hacking techniques.',
    image: 'https://images.credly.com/size/340x340/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png'
  },
  {
    title: 'OSEP',
    link: 'https://www.credential.net/37a18a39-e2ab-44d6-a27b-86ef5b48bd9e',
    description: 'Advanced certification emphasizing evasive penetration testing and advanced tactics.',
    image: 'https://images.credly.com/size/340x340/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png'
  },
  {
    title: 'Certified Red Team Operator',
    link: 'https://eu.badgr.com/public/assertions/UZ6-r3tfSYetcl2bcM2tKg',
    description: 'Validates expertise in conducting red team engagements simulating advanced adversaries.',
    image: 'https://images.credly.com/size/340x340/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png'
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
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <img src={cert.image} alt={cert.title} className="w-24 h-24 mx-auto mb-4" />
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