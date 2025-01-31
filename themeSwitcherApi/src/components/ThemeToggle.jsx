// ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="absolute top-5 right-5 px-4 py-2 text-xl bg-transparent border-none cursor-pointer"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
