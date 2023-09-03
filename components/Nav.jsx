'use client'

import React, { useEffect, useState } from 'react';
import img from '@/Assets/logo.png';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';
import defaultUserImg from '@/Assets/download.png';

export default function Nav(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user,setUser] = useState(null);

  function routing(str) {
    document.getElementById(str).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function toggleProfileMenu() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const firebaseConfig = {
    apiKey: "AIzaSyBifEBhJzXlTSLrv6cT6Xo3TOgMh3XR8Vw",
    authDomain: "cupid-code.firebaseapp.com",
    projectId: "cupid-code",
    storageBucket: "cupid-code.appspot.com",
    messagingSenderId: "172465490651",
    appId: "1:172465490651:web:f3eb86012f46de8184dafe",
    measurementId: "G-L4V7J5L10D"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setUser(user);
        console.log(user.displayName);
      }
      else {
        setIsUserLoggedIn(false);
        setUser(null);
      }
    })
  },[])

  useEffect(()=>{
    setIsProfileMenuOpen(props.isProfileMenuOpen);
  },[props.isProfileMenuOpen])

  function handleSignOut(){
    signOut(auth).then(()=>{
      console.log("sign out");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  function handleSpinner(){
    props.setLoadSpinner(true);
  }

  function handleAnyClick(e){
    if (e.target.offsetParent.id=='profileMenu' || e.target.id=='profile'){
      setIsProfileMenuOpen(true);
    }
    else{
      setIsProfileMenuOpen(false);
    }
  }


  return (
    <nav className="bg-gray-800 sticky top-0 z-50" onClick={(e)=>{handleAnyClick(e)}}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <Image
              className="h-20 w-auto sm:h-28"
              src={img}
              alt="Your Company"
            />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  onClick={() => {
                    routing('home');
                  }}
                  className="hover:bg-gray-700 hover:cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    routing('mentorship');
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Mentorship
                </a>
                <a
                  onClick={() => {
                    routing('events');
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Events
                </a>
                <a
                  onClick={() => {
                    routing('newsroom');
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Newsroom
                </a>
                <a
                  href="https://decodedevs.hashnode.dev/"
                  target="_blank"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  Blogs
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-0"
            >
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleProfileMenu}
                >
                  {isUserLoggedIn?
                    <img className="h-8 w-8 rounded-full" src={user.photoURL} alt={defaultUserImg} id='profile'/>
                    :
                  <Image className="h-8 w-8 rounded-full" src={isUserLoggedIn?user.photoURL:defaultUserImg} alt={defaultUserImg} id='profile'/>
                  }
                </button>
              </div>
              <div
                className={`${isProfileMenuOpen ? 'block' : 'hidden'
                  } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                id='profileMenu'
              >
                {
                  isUserLoggedIn ?
                    <>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {user.displayName}
                      </div>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </div>
                    </>
                    :
                    <>
                      <Link
                        href="/LogIn"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleSpinner}
                      >
                        Login
                      </Link>
                      <Link
                        href="/SignUp"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleSpinner}
                      >
                        Signup
                      </Link>
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              onClick={() => {
                routing('home');
              }}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              onClick={() => {
                routing('mentorship');
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Mentorship
            </a>
            <a
              onClick={() => {
                routing('events');
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Events
            </a>
            <a
              onClick={() => {
                routing('newsroom');
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Newsroom
            </a>
            <a
              href="https://decodedevs.hashnode.dev/"
              target="_blank"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Blogs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}