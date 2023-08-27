import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const people = [
  {
    name: 'Kirti Kamal',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
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
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/aditya-majhi'
    },
  },
  {
    name: 'Barada Laxmi',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
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
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Soumya Ranjan',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
    social: {
      twitter: 'https://twitter.com/kirtikamal',
      linkedin: 'https://linkedin.com/in/kirtikamal',
      github: 'https://github.com/KirtiKamal'
    },
  },
  {
    name: 'Debadatta Pradhan',
    imageUrl: 'https://avatars.githubusercontent.com/u/98299441?v=4',
    // role: 'Co-Founder / CEO',
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
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
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
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
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
