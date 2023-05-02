import { createContext } from 'react';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

export function ThemeContextProvider(props) {
  return (
    <ThemeContext.Provider value={{ isDarkMode: false }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;