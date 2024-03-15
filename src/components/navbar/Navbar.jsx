import React from 'react'
import './Navbar.css'
import kpopLogoDark from '../../assets/icons/bobs-kpop-logo.png'
import kpopLogoLight from '../../assets/icons/kpop-logo-light.png'
import lightSunIcon from '../../assets/icons/light-sun-icon.svg'
import darkMoonIcon from '../../assets/icons/dark-moon-icon.svg'
import searchbarLight from '../../assets/icons/searchbar-light.svg'
import searchbarDark from '../../assets/icons/searchbar-dark.svg'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
        {/*<img src={kpopLogo} alt="" className='logo-icon' />*/}
        <img src={theme == 'light' ? kpopLogoLight : kpopLogoDark} alt="" className='logo-icon' />
       <ul>
        <li>Home</li>
        <li>Kpop Music</li>
        <li>Lightstick</li>
        <li>Jewlery</li>
        <li>Merch</li>
       </ul>

       {/*Searchbar*/}
       <div className='searchbar'>
        <input type="text" placeholder='Search' name="" id="" />
        <img src={theme == 'light' ? searchbarLight : searchbarDark} alt="" />
       </div>

       {/*light mode & dark mode click on the moon icon*/}
       <img onClick={() => {toggle_mode()}} src={theme == 'light' ? darkMoonIcon : lightSunIcon} alt="" className='toggle-icon'/>





    </div>
  )
}

export default Navbar