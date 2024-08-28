import React from 'react';
import './DarkToggle.scss';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const DarkToggle = () => {

  function toggleDarkMode() {
    if (document.documentElement.style.getPropertyValue('--background') === '#3a3a3a') {
      document.documentElement.style.setProperty('--background', '#F0F0F0');
      document.documentElement.style.setProperty('--text', '#202020');
      document.documentElement.style.setProperty('--text50', '#20202085');
    } else {
      document.documentElement.style.setProperty('--background', '#3a3a3a');
      document.documentElement.style.setProperty('--text', '#dfdfdf');
      document.documentElement.style.setProperty('--text50', '#b5b5b5');
    }

    const darkBtn = document.getElementById('dark-btn');
    darkBtn!.classList.toggle("dark-btn--hidden")

    const lightBtn = document.getElementById('light-btn');
    lightBtn!.classList.toggle("light-btn--hidden");
}

  return (
    <div className="dark-toggle" onClick={toggleDarkMode}>
      <div id="dark-btn" className="toggle-btn"><MoonIcon className="toggle-btn__moon" stroke="var(--text)" />Go Dark</div>        
      <div id="light-btn" className="toggle-btn light-btn--hidden">Go Light <SunIcon className="toggle-btn__sun" stroke="var(--text)"/></div>
    </div>
  )
}

export default DarkToggle;