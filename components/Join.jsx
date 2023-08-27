import React from "react";
import { FaTelegram, FaDiscord, FaWhatsapp } from "react-icons/fa";

const Join = () => {
  return (
    <section id="join" className="bg-gradient-to-r from-black to-indigo-800  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-700 text-transparent bg-clip-text">Join Us Today</h2>
        <p className="text-gray-300 mb-8">
          Be part of our amazing community and stay connected with fellow developers.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <CardWithInfo
            icon={<FaTelegram className="text-6xl" />}
            link="#"
          />
          <CardWithInfo
            icon={<FaDiscord className="text-6xl" />}
            link="#"
          />
          <CardWithInfo
            icon={<FaWhatsapp className="text-6xl" />}
            link="#"
          />
        </div>
        <button className="bg-white text-blue-800 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold">
          Join Now
        </button>
      </div>
    </section>
  );
};

const CardWithInfo = ({ icon, hoverText, link }) => {
    return (
      <div className="w-32 h-40 p-4 relative group">
        <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center overflow-hidden transition-transform transform hover:scale-110">
          <div className="text-blue-800 " style={{ fontSize: "2.5rem" }}>
            {icon}
          </div>
        </div>
        <a href={link} className="absolute inset-0 z-10"></a>
      </div>
    );
  };
  
  
  

export default Join;
