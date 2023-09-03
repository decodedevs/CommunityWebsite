import React from 'react'
import kk from '@/Assets/kk.png'
export default function About() {
  return (
    <div id='about' className="relative overflow-hidden bg-slate-950 w-full">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text  sm:text-6xl ">About Us</h1>
            <p className="mt-4 text-xl text-gray-500">We are a group of young enthusiasts on a mission to connect with the maximum number of students like us and provide them with the opportunity to explore a sea of possibilities to thrive in their careers. The idea for creating this community stemmed from real-life experiences. We observed how many students lack guidance and proper mentorship for their futures, which often leads them to choose inappropriate career paths. Our mission is to support all types of students and offer them a comprehensive overview of the wide array of choices available. By assisting our fellow peers, we aim to contribute to a world where people can learn, assist, and inspire one another.
              At Decode Devs, think of us as problem-solving companions armed with creativity and intellect. Envision a puzzle: we delight in collaborating to discover solutions that simplify your challenges. Our toolkit brims with ideas, much like a vibrant box of crayons, and we're enthusiastic about utilizing them to help you decipher any obstacles you encounter. However, we're not solely focused on brainstorming – we also roll up our sleeves and put in the effort. With us by your side, intricate problems transform into pathways with clear markers, guiding you towards success. Let's collaborate to transform problems into opportunities and demonstrate that challenges cannot impede our progress!
            </p>
          </div>
          <div>
            <div className="mt-10">

              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">

                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-96 w-1/2 overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img src="https://media.istockphoto.com/id/497614524/photo/start-up-developer-team-did-it-again.jpg?s=612x612&w=0&k=20&c=ft8ZYO2ZnI_MkJmbwGyetgKJkKpmMXgAKWuRJkulqnI=" />
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}