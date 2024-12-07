import React from 'react';

export default function GlobalSecurityVoices() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Global Security Voices</h1>
        <p className="text-lg text-gray-700 mb-12 text-center indent-8">
        Welcome to Global Security Voices, where we explore the latest stories, trends, and insights from the world of cybersecurity. Tune in for expert discussions on offensive security, AI's role in safeguarding systems, and groundbreaking developments in the tech world. Together, we aim to connect, inform, and drive positive change in the global security landscape. Let's improve the world, one conversation at a time!
        </p>

        {/* Podcast Frame Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Latest Episode</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WmgaEzWwVmI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Links to Spotify and Apple Podcast */}
        <div className="flex space-x-4 justify-center">
          <a 
            href="#"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Listen on Spotify
          </a>
          <a 
            href="#"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Listen on Apple Podcasts
          </a>
        </div>
      </div>
    </section>
  );
}
