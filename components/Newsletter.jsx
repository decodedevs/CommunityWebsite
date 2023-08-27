import React, { useState } from 'react';
import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const Newsletter = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeAgreement, setSubscribeAgreement] = useState(false);


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
  const db = getFirestore(app);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribeAgreementChange = () => {
    setSubscribeAgreement(!subscribeAgreement);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (firstName!==null && lastName!==null && email!==null && subscribeAgreement) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          firstName: firstName,
          lastName: lastName,
          email: email
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubscribeAgreement(false);
  };

  return (
    <section className="bg-gradient-to-r from-black to-indigo-800 py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4 ml-6 bg-gradient-to-r from-cyan-300 to-blue-700 text-transparent bg-clip-text">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-l from-gray-700 via-gray-900 to-black p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-200 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-200 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subscribeAgreement" className="flex items-center">
              <input
                type="checkbox"
                id="subscribeAgreement"
                className="form-checkbox border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                checked={subscribeAgreement}
                onChange={handleSubscribeAgreementChange}
                required
              />
              <span className="ml-2 text-gray-200">
                I agree to subscribe to the newsletter.
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            disabled={!subscribeAgreement}
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
