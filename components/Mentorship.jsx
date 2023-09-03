import React from 'react';

export default function Mentorship() {

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-l from-gray-700 via-gray-900 to-black py-24 sm:py-32">
      <div className="basis-1/2 p-4 md:p-8">
        <h2 className="text-4xl font-bold lg:text-5xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">Mentorship</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Structured learning paths</h3>
            <p className="mt-2 text-base text-gray-300">
              We provide curated roadmaps and learning paths tailored to your goals and skill level. Whether you're a beginner, intermediate or advanced developer, we have got your back.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Educational materials</h3>
            <p className="mt-2 text-base text-gray-300">
              We give you access to a library of tutorials, articles, code challenges, and other learning resources to supplement your learning.
            </p>  
          </div>
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Personalized mentors</h3>
            <p className="mt-2 text-base text-gray-300">
              We match you with an expert mentor in your field of interest who can guide you one-on-one.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Community</h3>  
            <p className="mt-2 text-base text-gray-300">
              Join our community of learners and mentors to ask questions, meet peers, and network with industry experts.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Mentorship" />
      </div>

    </div>
  );
}