import React from 'react';

export default function About() {

  return (
    <div id='about' className="bg-slate-950">

      <div className="container mx-auto px-4 py-16 lg:flex">

        <div className="lg:w-1/2">
          
          <h1 className="text-4xl font-bold lg:text-5xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
            About Us
          </h1>

          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            
            ❇️ We are a group of young enthusiasts on a mission to connect with the maximum number of students like us and provide them with the opportunity to explore a sea of possibilities to thrive in their careers.
            
            <br/><br/>
            
            ❇️ The idea for creating this community stemmed from real-life experiences. We observed how many students lack guidance and proper mentorship for their futures, which often leads them to choose inappropriate career paths.  
            
            <br/><br/>
            
            ❇️ Our mission is to support all types of students and offer them a comprehensive overview of the wide array of choices available.   
            
            <br/><br/>
            
            ❇️ By assisting our fellow peers, we aim to contribute to a world where people can learn, assist, and inspire one another.
            
            <br/><br/>
            
            ❇️ At Decode Devs, think of us as problem-solving companions armed with creativity and intellect.    
            
            <br/><br/>
            
            ❇️ Let's collaborate to transform problems into opportunities and demonstrate that challenges cannot impede our progress!
            
          </p>
          
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center">
        
          <img 
            className="rounded-md h-64 w-64 lg:h-96 lg:w-96 object-cover"
            src="https://i.pinimg.com/564x/a3/c3/88/a3c388bc39b40d4018587fa7cdece07b.jpg" 
            alt="About image"
          />
          
        </div>

      </div>

    </div>
  );

}