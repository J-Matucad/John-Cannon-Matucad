import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const ThemeToggleButton = () => {
  // Initialize the theme state, defaulting to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Update the `data-theme` attribute in the <html> element and persist the theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // Change the theme
    localStorage.setItem('theme', theme); // Store the theme in localStorage
  }, [theme]); // Only run when the theme changes

  return (
    <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
      {/* Use Font Awesome's icons for sun and moon using CSS classes */}
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-[25px] mx-2 cursor-pointer`}></i>
    </button>
  );
};

export default ThemeToggleButton;
