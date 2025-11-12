import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateUserSuccess } from '../redux/user/userSlice'; 
const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch(); 

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const updateUsername = async () => {
    try {
      const res = await axios.patch(
        'https://react-projects-three-beta.vercel.app/User/editusername',
        { username },
        { withCredentials: true }
      );

      console.log(res.data);
      setMessage(res.data.message);

      
      dispatch(updateUserSuccess(res.data.user));
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Edit Profile</h1>

      <h3 className="text-xl mb-2">User's username: {currentUser?.username}</h3>
      <h3 className="text-xl mb-4">User's email: {currentUser?.email}</h3>

      <input
        type="text"
        className="p-2 border rounded mb-4 text-black"
        placeholder="Enter new username"
        value={username}
        onChange={handleUsernameChange}
      />

      <button
        onClick={updateUsername}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Change Username
      </button>

      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};
//edit
export default EditProfile;

