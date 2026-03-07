import React, {createContext, useState, useEffect, useContext} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  )
}
 const useTheme = () => {
  return useContext(ThemeContext);
}
// eslint-disable-next-line react-refresh/only-export-components
export {ThemeProvider,useTheme};