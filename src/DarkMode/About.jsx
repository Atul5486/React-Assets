import { useTheme } from './ThemeContext';

const About = () => {
    const {theme} =useTheme();
  return (
     <div className={`page ${theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to the About Page!</p>
    </div>
  )
}

export default About