// src/components/Navbar.js
 
import { NavLink } from "react-router-dom";

import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context"; //
 
function Navbar() {

    const { mode, toggle, setToggle, setMode } = useContext(ThemeContext);

    const toggleTheme = async () => {

        setToggle(!toggle)
        setMode(toggle ? "dark" : "light")    

    }

    
  return (
    <nav className={"Navbar " + mode}> 
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {mode}
      </button>
    </nav>
  );
}
 
export default Navbar;