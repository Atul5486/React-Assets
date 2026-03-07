import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'

const Navbar = () => {
    const {theme,toggleTheme}=useTheme();
    const handleToggel=()=>{
            toggleTheme();
    }
  return (
    <nav className='nav'>
    <div className='navbar'>
        <Link to='/'>Home</Link>
    
        <Link to='/About'>About</Link>
        <Link to='/Blog'>Blog</Link>
    </div>
    <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={handleToggel}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar