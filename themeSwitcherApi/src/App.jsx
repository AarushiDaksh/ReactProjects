// App.jsx
import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetching GitHub profile data
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
        {/* Theme Toggle Button */}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />

        {profileData ? (
          <ProfileCard profileData={profileData} theme={theme} />
        ) : (
          <p className="text-lg">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default App;
