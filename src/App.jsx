import './App.css';
import Lottie from 'lottie-react';
import catAnimation from './assets/animations/cat.json';
import { Clock, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const now = new Date();
  const currentHour = now.getHours();

  let greeting = '';
  let isDayTime = false; 

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning!';
    isDayTime = true;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon!';
    isDayTime = true;
  } else {
    greeting = 'Good evening!';
  }

  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className={`container ${isDayTime ? 'day-theme' : 'night-theme'}`}>
      <div className="card">
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          <div
            className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            role="button"
            tabIndex={0}
          >
            <Moon size={16} weight="fill" className="theme-toggle-icon" />
            <Sun size={16} weight="fill" className="theme-toggle-icon" />
          </div>
        </div>
        
        <Lottie animationData={catAnimation} loop={true} className="animation" />
        <h1 className="greeting">{greeting}</h1>
        <p className="date">{formattedDate}</p>
        <p className="time">
          <Clock size={18} weight="bold" style={{ marginRight: 6 }} />
          {formattedTime}
        </p>
      </div>
    </div>
  );
}

export default App;
