import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; 
import { loginSuccessful } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom'; // ✅ added

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const currentUser = useSelector((state) => state.user.currentUser);

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
      const response = await axios.post('https://react-projects-three-beta.vercel.app/auth/signin', formData, {
        withCredentials: true 
      });

      console.log(" FULL RESPONSE:", response);
      console.log(" DATA ONLY:", response.data);

      if (response.data && response.data.user) {
        dispatch(loginSuccessful(response.data.user));
        setMessage("User logged in successfully");

        // to homepage
        navigate("/");
      } else {
        console.warn("No user found in response");
        setMessage("Login success, but no user data received");
      }

      setFormData({ email: '', password: '' });
    } catch (err) {
      console.error('Error signing in:', err.response?.data || err.message);
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

        {currentUser && (
          <div className="mb-4 text-center text-green-600">
            Logged in as: <strong>{currentUser.username}</strong>
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
