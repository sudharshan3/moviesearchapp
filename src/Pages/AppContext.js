// components/AppContext.js
import React from "react";

const AppContext = React.createContext();

export default AppContext;

// App.js
import React, { useState } from 'react';
import AppContext from './components/AppContext';

export const App = () => {
  // Define as many global variables as your app needs, and hooks 
  // to set the state of the variable.
  const [setting1value, setSetting1value] = useState('initialValue1');
  const [setting2value, setSetting2value] = useState(false);


// App.js continued
// For each global variable, define a function for updating it.
// In the case of setting1value, we’ll just use setSetting1value.

// If we want to toggle setting2value, we can create a function to do so...
const toggleSetting2 = () => {
    setting3 ? setSetting2(true) : setSetting2value(false);
  };

  const userSettings = {
    setting1name: setting1value,
    setting2name: setting2value,
    setSetting1value,
    toggleSetting2,
  };

  return (
    <AppContext.Provider value={userSettings}>
      {/* All other components are wrapped by the AppContext.Provider */}
    </AppContext.Provider>
  );
}