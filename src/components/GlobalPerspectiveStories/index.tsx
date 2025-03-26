import React from 'react';

export default function GlobalPerspectiveStories() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Global Perspective Stories</h1>
        <p className="text-lg text-gray-700 mb-12">
        We are entering a challenging period in our society, and as humans, it’s crucial to cultivate core values that unite us. This podcast aims to inspire and be inspired by sharing powerful stories and challenges from both business and life. Together, we can spark ideas and actions to improve society and make a lasting impact.        </p>

        {/* Podcast Frame Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Episodes</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/videoseries?list=PL16wrrijM0H_ETSY4QEpyRp_IXYpXlm0z"
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
            href="https://open.spotify.com/show/43As9wUHnN3t0ndrSyyEd1?si=gHIytdb-RL2EINyp2R4t2w"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Listen on Spotify
          </a>
          {/* <a 
            href="https://podcasts.apple.com/us/podcast/global-security-voices/id1783352387"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Listen on Apple Podcasts
          </a> */}
        </div>
      </div>
    </section>
  );
}

