import React from 'react'
import { useTheme } from './ThemeContext';

const Blog = () => {
   const {theme} =useTheme();
  return (
    <div className={`page ${theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to the Blog Page!</p>
    </div>
  )
}

export default Blog