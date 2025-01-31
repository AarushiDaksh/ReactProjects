import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const res = await fetch('https://api.github.com/users/AarushiDaksh');
      const data = await res.json();
      setProfileData(data);
    };

    fetchData();
  }, []);

  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} min-h-screen flex justify-center items-center`}>
      <div className="relative">
        {/* Toggle Button with Sun and Moon Emojis */}
        <button 
          onClick={toggleTheme} 
          className="absolute top-5 right-5 px-4 py-2 text-xl bg-transparent border-none cursor-pointer"
        >
          {theme === 'light' ? '🌙' : '🌞'}
        </button>

        {profileData ? (
          <div className={`bg-white p-8 rounded-lg shadow-md w-96 text-center ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
            <img src={profileData.avatar_url} alt={profileData.login} className="w-32 h-32 rounded-full mx-auto" />
            <h2 className={`text-2xl font-semibold mt-4 ${theme === 'dark' ? 'text-black' : 'text-black'}`}>{profileData.name || profileData.login}</h2>
            <p className="text-gray-600 mt-2">{profileData.bio || 'No bio available'}</p>
            <div className="mt-4">
              <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View GitHub Profile</a>
            </div>
          </div>
        ) : (
          <p className="text-lg">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default App;

// its a custom api fetching 