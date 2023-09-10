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
import Head from "next/head";


function App() {

  const [loadSpinner, setLoadSpinner] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    setLoadSpinner(false);
  }, []);

  function handleAnyClick(e) {
    console.log(e.target)
    if (e.target.offsetParent.id == 'profileMenu' || e.target.id == 'profile' || e.target.id == 'burger') {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    }
    else {
      console.log("false");
      setIsProfileMenuOpen(false);
    }
  }

  return (
    <div className="bg-gray-800" onClick={(e) => { handleAnyClick(e) }}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3317417524366221"
        crossorigin="anonymous"></script>
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-3508Q8C19G`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      <Head>
        <meta name="google-site-verification" content="q1aXTk8cmbpCnCya07xG_X8QQ17kECwDLm_xKfpuMC4" />
        <meta name="description" content="Decode Devs | Empowering Future Developers" />
        <meta name="keywords" content="Skill Development, Learning and Growth, Tech Enthusiast Community, Networking Opportunities" />
      </Head>
      <dialog open={loadSpinner ? 'open' : false} className='md:bg-transparent bg-black'>
        <Spinner />
      </dialog>
      <Nav setLoadSpinner={setLoadSpinner} isProfileMenuOpen={isProfileMenuOpen} />
      <Hero />
      {/* <Welcome /> */}
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
