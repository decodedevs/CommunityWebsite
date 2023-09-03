import React from "react";
import { FaTelegram, FaDiscord, FaWhatsapp } from "react-icons/fa";

const Join = () => {

  return (
    <section id="join" className="bg-gradient-to-r from-black to-indigo-800 py-5">
      
      <div className="container mx-auto px-4 text-center">

        <span className="text-4xl mx-auto font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Join Us Today</span>

        <p className="text-gray-300 text-center mb-5">
          Be part of our amazing community and stay connected with fellow developers.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
        
          <CardWithInfo 
            icon={
              <FaTelegram 
                className="text-blue-500 text-6xl"
                onMouseEnter={e => e.target.classList.add('hover:text-blue-700')}
                onMouseLeave={e => e.target.classList.remove('hover:text-blue-700')}
              />
            }
            link="#"
          />
        
          <CardWithInfo
            icon={
              <FaDiscord
                className="text-blue-500 text-6xl" 
                onMouseEnter={e => e.target.classList.add('hover:text-blue-700')}
                onMouseLeave={e => e.target.classList.remove('hover:text-blue-700')}
              />
            }
            link="#" 
          />
        
          <CardWithInfo 
            icon={
              <FaWhatsapp
                className="text-blue-500 text-6xl"
                onMouseEnter={e => e.target.classList.add('hover:text-blue')}
                onMouseLeave={e => e.target.classList.remove('hover:text-blue-700')} 
              />
            }
            link="#"
          />

        </div>

        <div className="text-center mt-5">
          <button className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
            Join Now
          </button> 
        </div>

      </div>

    </section>
  );
};

const CardWithInfo = ({ icon, link }) => {
  return (
    <div className="w-32 h-40 p-4 relative group">
      <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center">
        {icon}  
      </div>
      <a href={link} className="absolute inset-0 z-10" />
    </div>
  );
};

export default Join;