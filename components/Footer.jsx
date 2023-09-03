import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12 pr-4 pl-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-semibold">Decode Devs !</h2>
          <p className="mt-2">Connecting developers, one heart at a time.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-800">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTelegram className="text-2xl" />
          </a>
          <a href="#" className="hover:text-green-500">
            <FaWhatsapp className="text-2xl" />
          </a>
          <a href="#" className="hover:text-purple-600">
            <FaDiscord className="text-2xl" />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Decode Devs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
