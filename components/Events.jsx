import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export default function Events() {

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.3, once: true}) ;
  const animateDiv = useAnimation() ;
  const animateImg = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateDiv.start({
        x: 0,
        transition: {
          duration: 0.5
        }
      })
      animateImg.start({
        opacity: 1,
        transition: {
          duration: 0.5
        }
      })
    }
    if(!isInView){
      animateDiv.start({
        x: '-100vw'
      })
      animateImg.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div id='events' className="flex flex-col md:flex-row bg-gradient-to-r from-black to-indigo-800 " ref={ref}>
      
      <motion.div className="basis-1/2 p-4 md:p-8" animate={animateDiv}>
      
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
            <h3 className="text-lg font-medium leading-6 text-blue-400">Blogging Challenges</h3>
            <p className="mt-2 text-base text-gray-100">
              Sharpen your blogging skills through fun writing challenges.
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
        
      </motion.div>

      <motion.div className="flex-1 p-4 md:p-8" animate={animateImg}>
        <img className="object-cover w-full h-full rounded" src="https://github.com/decodedevs/CommunityWebsite/assets/142470556/eb31d2e3-e5f8-40fb-b4ae-202ffbc89e8a" alt="Events" />
      </motion.div>

    </div>
  
  );
  
}