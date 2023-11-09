import React, { useState } from 'react';
import DraggableLayout from './components/DraggableLayout';

export const ThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {}, isDarkMode: false });

function App() {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode: theme === 'dark' }}>
      <DraggableLayout />
    </ThemeContext.Provider>
  );
}

export default App;
