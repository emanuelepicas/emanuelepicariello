import { Youtube, Linkedin, X, Instagram, Github, Coffee } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@emanuelepicariello',
    color: 'hover:text-red-600'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/emanuele-picariello-520231199',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Twitter',
    icon: X,
    url: 'https://x.com/EmanuelePicari5',
    color: 'hover:text-black'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/youtube.emanuele.picariello',
    color: 'hover:text-pink-600'
  },
  {
    name: 'TikTok',
    icon: Youtube, // Note: Replace with the actual TikTok icon if available
    url: 'https://www.tiktok.com/@emanuele.picariello_',
    color: 'hover:text-black'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/emanuelepicas',
    color: 'hover:text-gray-800'
  },
  {
    name: 'Buy Me a Coffee',
    icon: Coffee,
    url: 'https://buymeacoffee.com/emanuelepicariello',
    color: 'hover:text-yellow-600'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-200 text-white ${link.color} hover:scale-110`}
          aria-label={link.name}
        >
          <link.icon size={32} className="text-current" />
        </a>
      ))}
    </div>
  );
}
