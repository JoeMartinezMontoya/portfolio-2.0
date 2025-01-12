'use client';
import '../styles/globals.css';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <html lang="fr">
      <body>
        <button
          onClick={toggleTheme}
          className="fixed top-5 right-5 bg-gray-200 dark:bg-gray-800 p-2 rounded"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {children}
      </body>
    </html>
  );
}
