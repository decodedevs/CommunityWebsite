'use client'

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Mentorship from "@/components/Mentorship";
import ChatBot from "@/components/ChatBot";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Newsroom from "@/components/Newsroom";
import Newsletter from "@/components/Newsletter";
import Chat from "@/components/ChatbotFile/Chat";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Events from "@/components/Events";


function App() {

  const [loadSpinner, setLoadSpinner] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(()=>{
    setLoadSpinner(false);
  },[]);

  function handleAnyClick(e){
    console.log(e.target)
    if (e.target.id='burger'){

    }
    else if (e.target.offsetParent.id=='profileMenu' || e.target.id=='profile'){
      setIsProfileMenuOpen(!isProfileMenuOpen);
    }
    else{
      console.log("false");
      setIsProfileMenuOpen(false);
    }
  }

  return (
    <div className="bg-gray-800" onClick={(e)=>{handleAnyClick(e)}}>
      <dialog open={loadSpinner?'open':false} className='md:bg-transparent bg-black'>
        <Spinner />
      </dialog>
      <Nav setLoadSpinner={setLoadSpinner} isProfileMenuOpen={isProfileMenuOpen}/>
      <Hero />
      <Welcome />
      <About />
      <Mentorship />
      <Events />
      <Newsroom />
      <Join />
      <Team />
      <Newsletter />
      <Footer />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
