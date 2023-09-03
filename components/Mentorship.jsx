import React from 'react';

export default function Mentorship() {

  return (
    <div id="mentorship" className="bg-gradient-to-r from-black to-indigo-800 py-24 sm:py-32 w-full">
              <h2 className="text-3xl pl-6 font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text sm:text-6xl">Mentorship</h2>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
      
        <div className="relative h-64 lg:h-full">
        <img className="absolute inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Mentorship" />
          
        </div>
        
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
        
        <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Structured learning paths</h3>
            <p className="mt-2 text-lg text-gray-300">We provide curated roadmaps and learning paths tailored to your goals and skill level. Whether you're a beginner, intermediate or advanced developer, we have got your back.</p>
          </div>  
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Educational materials</h3>
            <p className="mt-2 text-lg text-gray-300">We give you access to a library of tutorials, articles, code challenges, and other learning resources to supplement your learning. </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Personalized mentors</h3>
            <p className="mt-2 text-lg text-gray-300">We match you with an expert mentor in your field of interest who can guide you one-on-one.</p>
          </div>



          <div>  
            <h3 className="text-2xl font-bold tracking-tight text-white">Community</h3>
            <p className="mt-2 text-lg text-gray-300">Join our community of learners and mentors to ask questions, meet peers, and network with industry experts.</p>
          </div>
          

        </div>
        
      </div>
    </div>
  );
}