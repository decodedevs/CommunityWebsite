import React, { useEffect, useRef } from 'react';
import kk from '@/Assets/kk.png';
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
          duration: 0.3
        }
      })
      imgDiv.start({
        opacity: 1,
        transition: {
          duration: 0.4
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
    <div id='about' className="bg-slate-950" ref={ref}>

      <div className="container mx-auto px-4 py-16 lg:flex">

        <motion.div 
          className="lg:w-1/2"
          animate={aboutDiv}
        >
          <h1 className="text-4xl font-bold lg:text-5xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">About Us</h1>

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
            Let's collaborate to transform problems into opportunities and demonstrate that challenges cannot impede our progress!
          </p>
        </motion.div>

        <motion.div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center" animate={imgDiv}>
          <img
            src="https://media.istockphoto.com/id/497614524/photo/start-up-developer-team-did-it-again.jpg?s=612x612&w=0&k=20&c=ft8ZYO2ZnI_MkJmbwGyetgKJkKpmMXgAKWuRJkulqnI="
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>

      </div>

    </div>
  );

}