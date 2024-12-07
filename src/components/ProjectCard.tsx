import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link
          to={link}
          className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
