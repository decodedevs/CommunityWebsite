import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaTelegram, FaDiscord, FaWhatsapp } from "react-icons/fa";

const Join = () => {

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.5, once: true}) ;
  const animateH2AndBtn = useAnimation() ;
  const animateP = useAnimation() ;
  const animateIcons = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateH2AndBtn.start({
        opacity: 1,
        transition: {
          duration: 0.4
        }
      })
      animateIcons.start({
        x: 0,
        transition: {
          duration: 0.4
        }
      })
      animateP.start({
        opacity: 1,
        transition: {
          duration: 0.6
        }
      })
    }
    if(!isInView){
      animateH2AndBtn.start({
        opacity: 0
      })
      animateIcons.start({
        x: '-100vw'
      })
      animateP.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (

    <section id="join" className="bg-gradient-to-r from-black to-indigo-800 py-16" ref={ref}>
      
      <div className="container mx-auto px-4 text-center">


        <motion.span className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 to-blue-700 text-transparent bg-clip-text" animate={animateH2AndBtn}>Join Us Today</motion.span>

        <motion.p className="text-gray-300 text-center mb-12" animate={animateP}>
          Be part of our amazing community and stay connected with fellow developers.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-6" animate={animateIcons}>
        
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

        </motion.div>


        <div className="text-center mt-12">
          <motion.button className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition" animate={animateH2AndBtn}>
            Join Now
          </motion.button> 
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