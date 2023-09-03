import React from 'react';
import img from '@/Assets/hero.jpg';

export default function Hero() {
  return (
    <div className="relative bg-black">
      {/* <img 
        src={img}
        className="absolute inset-0 object-cover w-full h-full" 
      /> */}

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:py-48 lg:px-6">
        <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
          LEARN. 
        </h1>

        <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 lg:text-6xl">
          DEVELOP. GROW.
        </h2>

        <p className="max-w-lg text-lg text-white lg:text-2xl">
          Cultivate Knowledge, Develop Expertise, and Grow Profoundly
        </p>

      </div>
    </div>
  );
}