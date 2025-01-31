// ProfileCard.js
import React from 'react';

const ProfileCard = ({ profileData, theme }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md w-96 text-center ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
      <img src={profileData.avatar_url} alt={profileData.login} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className={`text-2xl font-semibold mt-4 ${theme === 'dark' ? 'text-black' : 'text-black'}`}>{profileData.name || profileData.login}</h2>
      <p className="text-gray-600 mt-2">{profileData.bio || 'No bio available'}</p>
      <div className="mt-4">
        <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View GitHub Profile</a>
      </div>
    </div>
  );
};

export default ProfileCard;
