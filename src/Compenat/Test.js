import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


export default function Test() {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="text">it's a {isDark ? 'Dark' : 'Light'} theme</div>
      <button onClick={toggleTheme} className='botona'>Toggle theme</button>
    </div>
  );
}
