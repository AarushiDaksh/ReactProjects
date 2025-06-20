import React from 'react';
import { useSelector } from 'react-redux';

export const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser); 

  return (
    <div>
      <h2>Edit Profile</h2>
      <h3>Welcome, {currentUser?.name || "Guest"}!</h3>
    </div>
  );
};
