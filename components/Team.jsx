import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const people = [
  {
    name: 'Kirti Kamal',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Kirti Kamal is a tech enthusiast and visionary community leader pursuing a Bachelor of Technology in Computer Science and Engineering. As a Beta Microsoft Learn Student Ambassador, Kirti helps fellow students learn new technologies and develop their career skills for the future. Kirti also leads and organizes engaging workshops, events, and hackathons for the tech community.',
    social: {
      twitter: 'https://twitter.com/kirtikamal12',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'

    },
  },
  {
    name: 'Anshuman Njs',
    imageUrl: 'https://avatars.githubusercontent.com/u/90966147?v=4',
    // role: 'Co-Founder / CEO',
    about: 'My name is Anshuman , I am 19 years old. I live in Bhubaneswar,Odisha,India. i am a self taught developer. Web development has been my main focus. But, I am pretty good in web designing also. I love the process of using and learning new technologies. I enjoy spending time creating and improving websites',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Aditya Majhi',
    imageUrl: 'https://avatars.githubusercontent.com/u/87221497?v=4',
    // role: 'Co-Founder / CEO',
    about: ' My name is Aditya , I am 19 years old. I live in Bhubaneswar, Odisha, India. I am a self-taught developer. Web development has been my main focus. But, I am pretty good in web designing also. I love the process of using and learning new technologies. I enjoy spending time creating and improving websites.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/aditya-majhi'
    },
  },
  {
    name: 'Barada Laxmi',
    imageUrl: 'https://avatars.githubusercontent.com/u/142567052?v=4',
    // role: 'Co-Founder / CEO',
    about: 'Barada Laxmi Biswal is a freelance content writer with expertise in SEO optimization, digital marketing, web content creation, WordPress, and technical blogging. She is also passionate about web development and cybersecurity. Laxmi is committed to continuous learning and skill improvement. Beyond work, she is a sketch enthusiast and an avid reader. Feel free to reach out if you ever want to chat about digital marketing strategies, content creation, or just have a friendly conversation about your favorite F.R.I.E.N.D.S episodes!',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Kalyan Mohapatra',
    imageUrl: 'https://avatars.githubusercontent.com/u/142584768?v=4',
    // role: 'Co-Founder / CEO',
    about: 'I am Soumya from Trident academy of Technology. Continuing my graduation in the field of Technology belonging to the branch of electronics and telecommunications engineering. I have some knowledge in JAVA , relational database management system, UI design.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Soumya Ranjan',
    imageUrl: 'https://avatars.githubusercontent.com/u/123158751?v=4',
    // role: 'Co-Founder / CEO',
    about: 'I am Soumya from Trident academy of Technology. Continuing my graduation in the field of Technology belonging to the branch of electronics and telecommunications engineering. I have some knowledge in JAVA , relational database management system, UI design.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Debadatta Pradhan',
    imageUrl: 'https://avatars.githubusercontent.com/u/142510886?v=4',
    // role: 'Co-Founder / CEO',
    about: 'I am a 2nd year student pursuing B.Tech in Computer Science and Engineering from Silicon Institute of Technology, Bhubaneswar. I am a Full Stack Web Developer and a Competitive Programmer. I am a passionate learner and always ready to learn new things. I am a self-motivated person and always ready to work in a team. I am a good listener and a good communicator. I am a hard-working person and always ready to take challenges.',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },

  
  // Add more people...
];

export default function Team() {
  return (
    <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text sm:text-6xl">Meet Our Team</h2>
        <p className="text-lg text-gray-600">
        "Get acquainted with the individuals behind Decode Devs! Each of us brings a distinct perspective that fuels our collective determination to create an impact. Uncover the minds propelling innovation and collaboration."
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {people.map((person) => (
            <div key={person.name} className="bg-gradient-to-r from-cyan-900 to-cyan-500 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img className="h-16 w-16 rounded-full mr-4" src={person.imageUrl} alt={person.name} />
                <div>
                  <h3 className="text-base font-semibold text-black">{person.name}</h3>
                  <p className="text-sm text-indigo-600">{person.role}</p>
                </div>
              </div>
              <p className="text-sm text-black">
                {person.about}
              </p>
              <div className="flex mt-4">
                <a href={person.social.twitter} className="mr-2 text-black hover:text-blue-500">
                  <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                </a>
                <a href={person.social.linkedin} className="mr-2 text-black hover:text-blue-800">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                </a>
                <a href={person.social.github} className="text-black hover:text-slate-700">
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
