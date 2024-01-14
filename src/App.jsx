import React from 'react';
import { AppProvider } from './components/AppContext';
import Header from './components/Header';
import MainContent from './MainContent.jsx'; // Presupunând că ai o componentă MainContent

const App = () => {
  return (
    <AppProvider>
      <Header />
      <MainContent />
    </AppProvider>
  );
};

export default App;
