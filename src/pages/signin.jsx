import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/signin', formData);
      console.log(response.data);
      setMessage(response.data.message || 'Login successful');
      setFormData({ email: '', password: '' }); 
    } catch (err) {
      console.log('Error signing in:', err.response?.data?.message || err.message);
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="border-2 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {message && (
          <div className="mb-4 text-center text-red-600 font-semibold">
            {message}
          </div>
        )}

        <form onSubmit={handleSignin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
