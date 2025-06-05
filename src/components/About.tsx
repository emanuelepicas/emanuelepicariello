import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Centered */}
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Section */}
          <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0">
            <img
              src="/images/profile.png" 
              alt="Profile of Emanuele Picariello"
              className="w-48 h-48 rounded-full shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 w-full">
            <div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              style={{
                boxShadow: 'inset 0 4px 10px rgba(0, 128, 0, 0.15)', // Green inner shadow
              }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
  In today's digital age, our world is increasingly shaped by complex systems and emerging technologies. From AI-driven tools to rapidly evolving digital infrastructures, understanding and navigating these developments requires constant curiosity, resilience, and a passion for innovation.
</p>
<p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
  But my mission goes far beyond cybersecurity. I’m actively working on two podcast projects, <strong>Global Security Voices</strong> and <strong>Global Perspective Stories</strong>, where I explore ideas and narratives that inspire global change. These initiatives are part of a larger vision: to help create a better world. I believe that with the right people, professional expertise, and relentless effort, we can improve the overall world systems by at least 20%.
</p>
<p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
  I understand that the challenges ahead are immense. Building a better world requires delving into fields like neuroscience, macroeconomics, and more. But this is my calling, my purpose. I’m committed to learning, collaborating, and working tirelessly because I truly believe that even incremental progress can spark profound change.
</p>
<p className="text-lg text-gray-700 leading-relaxed text-justify">
  When I’m not immersed in this journey, I’m exploring new technologies and opportunities, refining my podcasts, or recharging through weightlifting, a reminder of the strength we all possess to push boundaries and create something extraordinary.
</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
