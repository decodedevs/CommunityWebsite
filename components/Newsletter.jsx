import React, { useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribeAgreement, setSubscribeAgreement] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyBifEBhJzXlTSLrv6cT6Xo3TOgMh3XR8Vw",
    authDomain: "cupid-code.firebaseapp.com",
    projectId: "cupid-code",
    storageBucket: "cupid-code.appspot.com",
    messagingSenderId: "172465490651",
    appId: "1:172465490651:web:f3eb86012f46de8184dafe",
    measurementId: "G-L4V7J5L10D",
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

    if (
      firstName !== null &&
      lastName !== null &&
      email !== null &&
      subscribeAgreement
    ) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    // Reset form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubscribeAgreement(false);
  };

  return (
    <section className="bg-gradient-to-r from-black to-indigo-800 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Subscribe to Our Newsletter
        </h2>

        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-4">
              <label htmlFor="firstName" className="text-gray-200 font-medium">
                First Name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-4">
              <label htmlFor="lastName" className="text-gray-200 font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3"
                required
              />
            </div>

            <div className="w-full px-3 mb-4">
              <label htmlFor="email" className="text-gray-200 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-3"
                required
              />
            </div>

            <div className="w-full px-3 mb-4">
              <label className="flex items-center text-gray-200">
                <input
                  type="checkbox"
                  checked={subscribeAgreement}
                  onChange={() => setSubscribeAgreement(!subscribeAgreement)}
                  className="form-checkbox rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span className="ml-2">
                  I agree to subscribe to the newsletter.
                </span>
              </label>
            </div>

            <div className="w-full px-3">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                disabled={!subscribeAgreement}
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
