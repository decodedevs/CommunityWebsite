'use client'

import React, { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function ResetPswd(props) {

  const [loadSpinner, setLoadSpinner] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoadSpinner(false);
  }, []);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
      else {
        console.log(user);
      }
    })
  }, [])

  function handleSubmit(e) {
    setLoadSpinner(true);
    e.preventDefault();
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        console.log("sent");
        alert("A link has been sent to your email to reset password. You are being redirected to login page to login using your new password")
        router.push('/LogIn');
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      })
  }

  return (
    <>
        <dialog open={loadSpinner ? 'open' : false} className='bg-transparent z-20'>
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
            {/* <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-200">New Password</label>
                        <input
                        type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            placeholder="Enter your new password"
                        />
                    </div> */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
