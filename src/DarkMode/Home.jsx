import React from 'react'
import { useTheme } from './ThemeContext';
const Home = () => {
    const {theme}=useTheme();
    console.log(theme)
  return (
    <div className={`page ${theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  )
}

export default Home