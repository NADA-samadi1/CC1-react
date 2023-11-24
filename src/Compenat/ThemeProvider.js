import React, { createContext, useState } from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Appliquer le thème directement au corps de la page
  document.body.style.backgroundColor = currentTheme.backgroundColor;
  document.body.style.color = currentTheme.color;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
