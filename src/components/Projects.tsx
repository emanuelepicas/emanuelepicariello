import React, { Suspense } from 'react';
const ProjectCard = React.lazy(() => import('./ProjectCard'));

const projects = [
  {
    title: 'Global Security Voices',
    description: 'Welcome to Global Security Voices, where we explore the latest stories, trends, and insights from the world of cybersecurity.',
    image: '/images/gsv.png',
    link: '/projects/global-security-voices'
  },
  {
    title: 'Global Perspective Stories',
    description: 'We are entering a challenging period in our society, and as humans, it’s crucial to cultivate core values that unite us.',
    image: '/images/gps.png',
    link: '/projects/global-perspective-stories'
  },
  {
    title: 'YouTube',
    description: 'Empower. Secure. Evolve. | Connecting with the world and building a secure future',
    image: '/images/YouTube.png',
    link: 'https://www.youtube.com/@emanuelepicariello/?sub_confirmation=1'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
}
