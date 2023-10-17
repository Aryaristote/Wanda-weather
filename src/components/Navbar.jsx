import React from 'react';
import navLogo from "../assets/images/navLogo.png"
import { BsFillSunFill, BsFillMoonFill, BsFillPersonFill } from 'react-icons/bs';

const Navbar = ({ theme, toggleTheme }) => {

    return (
        <div className="topnav">
            <div className="nav-content">
                <a href="/"><img src={navLogo} alt="logo" className="nav-logo" /></a>
                <div className="left-nav">
                    {theme === 'dark' ? (
                        <button className="changeThem" onClick ={toggleTheme}><BsFillSunFill /></button>
                    ) : (
                        <button className="changeThem" onClick ={toggleTheme}><BsFillMoonFill /></button>
                    )}
                    <a href="/" className="nav-login"><BsFillPersonFill /> Login</a>
                </div> 
            </div>
        </div>
    )
}

export default Navbar
