// src/context/theme.context.js
import { useState } from "react";

import { createContext } from "react";


const ThemeContext = createContext();

// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper({ children }) {

    const [ toggle, setToggle ] = useState(false)
    const [ mode, setMode ] = useState('light')

    const toggleTheme = () => {
        setToggle(!toggle)
        setMode(toggle ? "dark" : "light")
        
    }

  return (

    <ThemeContext.Provider value={{ toggleTheme, mode }}>
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };   // <== UPDATE
