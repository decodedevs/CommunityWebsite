import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
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
    e.preventDefault();
    // Perform login form submission or validation here
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-800 flex items-center justify-center">
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
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-100">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
