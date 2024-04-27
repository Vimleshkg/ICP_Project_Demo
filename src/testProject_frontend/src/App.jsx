import React, { createContext, useState } from 'react';
import { testProject_backend } from 'declarations/testProject_backend';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

// Creating a context for the theme
export const SwitchContext = createContext(false);

function App() {
  // State for theme and function to set theme
  const [theme, setTheme] = useState(false);

  return (
    // Providing the theme state and setTheme function to all components in the app
    <SwitchContext.Provider value={{ theme, setTheme }}>
      <main className={`bg-gradient-to-tr w-screen font-ITC  ${theme ? 'from-[#382b5a] to-[#08333d]' : 'from-[#d9c7e6] to-[#cdece8] '}`}>
        <Header />
        <Body />
        <Footer />
      </main>
      
    </SwitchContext.Provider>
  );
}

export default App;
