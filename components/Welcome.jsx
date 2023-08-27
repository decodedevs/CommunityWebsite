import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot'; // Import your ChatBot component
import Logo from '@/Assets/logo.jpg'; // Import your logo image

const Welcome = () => {
  const [showChat, setShowChat] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Hide the message after 10 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <div className="mb-2 mr-2">
        <div className="flex items-center">
          {showMessage && (
            <p className="text-sm mr-2 bg-white rounded-lg p-2">
              <span className="text-blue-500"> Hi 👋, I am Kirti</span>
              <br />
              <span className="text-blue-500"> How Can I Help You ? </span>
            </p>
          )}
          {/* <button
            className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center focus:outline-none"
            onClick={toggleChat}
          >
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </button> */}
        </div>
      </div>
      {/* {showChat && <ChatBot />} Render the ChatBot component */}
    </div>
  );
};

export default Welcome;
