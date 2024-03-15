import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'

const App = () => {

  /*This code will makes sure that if you choose dark and refresh the website it will still be dark mode*/
   const current_theme = localStorage.getItem('current_theme');
   
  //dark mode & light mode
  const [theme, setTheme] = useState(current_theme? current_theme :'light'); 

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])
  
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App