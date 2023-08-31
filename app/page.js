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
import NavBar from "@/components/NavBar";


function App() {
  return (
    <div className="bg-gray-800 pb-20">
      <Nav />
      {/* <Signup />
      <Login /> */}
      <Hero />
      <Welcome />
      <About />
      <Mentorship />
      <Newsroom />
      <Join />
      <Team />
      <Newsletter />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
