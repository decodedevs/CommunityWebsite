'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import Spinner from '@/components/Spinner';

const Login = () => {

  const router = useRouter();
  const [loadSpinner, setLoadSpinner] = useState(true);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setLoadSpinner(true);
    e.preventDefault();
    // Perform login form submission or validation here
    console.log('Login form submitted:', formData);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.push('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        router.push('/');
      });
  };

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
    onAuthStateChanged(auth,(user)=>{
      if (user){
        router.push("/");
      }
      else{
        setLoadSpinner(false);
        console.log(user);
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleGoogle(){
    setLoadSpinner(true);
    console.log("hello")
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
    .then((result)=>{
      console.log(result.user);
      router.push('/');
    })
    .catch((error)=>{
      console.log(error.code, error.message);
      alert(error.message);
      router.push('/');
    })
  }

  return (
    <>
      <dialog open={loadSpinner?'open':false} className='bg-transparent z-20'>
        <Spinner />
      </dialog>
    <div className={`min-h-screen bg-gradient-to-r from-black to-indigo-800 flex items-center justify-center ${loadSpinner? 'blur':""}`}>
      <div className="max-w-md w-full mx-auto p-8 bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pb-2">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-indigo-600" />
              <span className="ml-2 text-gray-200">Remember me</span>
            </label>
          </div>
          <div>
            <div className='font-bold text-white mb-3'>
              <Link href={{
                pathname: '/ResetPswd',
                query: auth
              }}>
              forgot password ?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Log In
            </button>
          </div>
        </form>
          <div onClick={handleGoogle}>
          <button className="w-full mt-3 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">Log In With Google</button>
          </div>
        <p className="mt-4 text-sm text-gray-100">
          Do not have an account?{' '}
          <Link href="/SignUp" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
