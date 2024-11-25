import React from 'react';
import { Mail, Youtube, Linkedin, Twitter, Instagram, Github, Coffee } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:info@emanuelepicariello.com',
    color: 'hover:text-blue-500',
    label: 'info@emanuelepicariello.com'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@emanuelepicariello',
    color: 'hover:text-red-600',
    label: '@emanuelepicariello'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/emanuele-picariello-520231199',
    color: 'hover:text-blue-600',
    label: 'Emanuele Picariello'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/EmanuelePicari5',
    color: 'hover:text-blue-400',
    label: '@EmanuelePicari5'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/youtube.emanuele.picariello',
    color: 'hover:text-pink-600',
    label: '@youtube.emanuele.picariello'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/emanuelepicas',
    color: 'hover:text-gray-800',
    label: '@emanuelepicas'
  },
  {
    name: 'Buy Me a Coffee',
    icon: Coffee,
    url: 'https://buymeacoffee.com/emanuelepicariello',
    color: 'hover:text-yellow-600',
    label: 'Support my work'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${link.color}`}
            >
              <link.icon size={24} className="mr-4" />
              <div>
                <h3 className="font-semibold">{link.name}</h3>
                <p className="text-gray-600">{link.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}