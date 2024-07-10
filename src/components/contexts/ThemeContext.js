// contexts/ThemeContext.js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");
  const [status, setStatus] = useState(false);

  const toggleTheme = () => {
    return setTheme(!theme) === setStatus(!status);
  };

  let themeStatus = theme ? "light-theme" : "dark-theme";
  let toggle = status ? "day" : "night";

  if (toggleTheme === true) {
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, toggle, themeStatus }}>
      {children}
    </ThemeContext.Provider>
  );
};
