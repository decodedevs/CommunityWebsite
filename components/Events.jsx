import React from 'react';

export default function Events() {

  return (
    <div id='events' className="flex flex-col md:flex-row bg-gradient-to-r from-black to-indigo-800 ">
      
      <div className="basis-1/2 p-4 md:p-8">
      
        <span className="text-4xl font-bold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Events</span>

        <div className="mt-6 space-y-6">
        
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Webinars</h3>
            <p className="mt-2 text-base text-gray-100">
              Join our live webinars with industry experts on trending topics to expand your skills.
            </p>
          </div>
        
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Workshops</h3>
            <p className="mt-2 text-base text-gray-100">
              Hands-on workshops to gain practical experience and apply concepts covered in webinars. 
            </p>
          </div>
        
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Meetups</h3>
            <p className="mt-2 text-base text-gray-100">
              In-person and virtual meetups to connect with fellow developers in your community.
            </p>  
          </div>
        
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-400">Hackathons</h3>
            <p className="mt-2 text-base text-gray-100">
              Join hackathons to build your portfolio and collaborate on innovative projects.
            </p>
          </div>
        
        </div>
        
      </div>

      <div className="flex-1 p-4 md:p-8">
        <img className="object-cover w-full h-full rounded" src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Events" />
      </div>

    </div>
  
  );
  
}
