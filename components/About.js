import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {

  const ref = useRef(null) ;

  const isInView = useInView(ref, {amount: 0.3, once: true}) ;
  const aboutDiv = useAnimation() ;
  const imgDiv = useAnimation() ;

  useEffect(() => {
    if(isInView){
      aboutDiv.start({
        x: 0,
        transition: {
          duration: 0.5
        }
      })
      imgDiv.start({
        opacity: 1,
        transition: {
          duration: 0.5
        }
      })
    } if(!isInView){
      aboutDiv.start({
        x: '-100vw'
      })
      imgDiv.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div id='about' className="bg-gradient-to-r from-black to-indigo-800" ref={ref}>

      <div className="container mx-auto px-4 py-16 lg:flex">
        <motion.div 
          className="lg:w-1/2"
          animate={aboutDiv}
        >
          <span className="text-4xl font-bold lg:text-5xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">About Us</span>

          <p className="mt-4 text-lg text-gray-500">

            ❇️We are a group of young enthusiasts on a mission to connect with the maximum number of students like us and provide them with the opportunity to explore a sea of possibilities to thrive in their careers. <br />
            <br />

            ❇️ The idea for creating this community stemmed from real-life experiences. We observed how many students lack guidance and proper mentorship for their futures, which often leads them to choose inappropriate career paths.  <br />
            <br />

            ❇️ Our mission is to support all types of students and offer them a comprehensive overview of the wide array of choices available.
            <br />
            <br />
            ❇️ By assisting our fellow peers, we aim to contribute to a world where people can learn, assist, and inspire one another.<br />
            <br />

            ❇️ At Decode Devs, think of us as problem-solving companions armed with creativity and intellect.   <br />
            <br />
            Let us collaborate to transform problems into opportunities and demonstrate that challenges cannot impede our progress!
          </p>
        </motion.div>

        <motion.div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center" animate={imgDiv}>
          <img 
            className="rounded-md h-64 w-64 lg:h-96 lg:w-96 object-cover"
            src="https://github.com/decodedevs/CommunityWebsite/assets/142470556/50bd1bf5-f20d-44f3-b6b2-be5732025eab" 
            alt="About image"
          />
        </motion.div>
      </div>

    </div>
  );

}