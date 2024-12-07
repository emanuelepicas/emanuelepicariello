import React, { Suspense } from 'react';

const articles = [
  {
    title: 'Latest Security Research',
    description: 'Deep dive into recent cybersecurity vulnerabilities and mitigation strategies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    type: 'Research'
  },
  {
    title: 'YouTube Security Series',
    description: 'Weekly video content covering various cybersecurity topics and hands-on tutorials.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    type: 'Video'
  },
  {
    title: 'Security Best Practices',
    description: 'Comprehensive guides on implementing security measures in modern applications.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=8',
    type: 'Article'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Blog & Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#0a2b1d] text-white text-sm rounded-full mb-4">
                    {article.type}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                  <button className="inline-block px-6 py-2 bg-[#0a2b1d] text-white rounded-lg hover:bg-[#1a4a35] transition-colors">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
}
