import "./App.css"; 
import Navigations from "./components/Navigation"; 
import React, { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const currentTime = new Date().getHours();
    const isDayTime = currentTime > 6 && currentTime < 18;
    setTheme('light')

    if (isDayTime) {
      setTheme('light'); 
    } else {
      setTheme('dark'); 
    }
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Navigations theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
