import { createContext, useCallback, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const SetThemeContext = createContext(null);
export const useSetTheme = () => useContext(SetThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, _setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme-mode') || 'light';
    } catch {
      return 'light';
    }
  });

  const setTheme = useCallback((input) => {
    const newTheme = input ? 'dark' : 'light';
    _setTheme(newTheme);

    const body = document.body;
    if (newTheme === 'light') {
      body.removeAttribute('theme-mode');
      localStorage.setItem('theme-mode', 'light');
    } else {
      body.setAttribute('theme-mode', 'dark');
      localStorage.setItem('theme-mode', 'dark');
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.setAttribute('theme-mode', 'dark');
    } else {
      body.removeAttribute('theme-mode');
    }
  }, [theme]);

  return (
    <SetThemeContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </SetThemeContext.Provider>
  );
};
