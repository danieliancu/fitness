import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light'); // Stare pentru tema (culoarea fundalului)
  const [user, setUser] = useState(null); // Stare pentru informații despre utilizator

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
