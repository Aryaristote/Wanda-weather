import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navLogo from "../assets/images/navLogo.png"
import { BsFillSunFill, BsFillMoonFill, BsFillPersonFill } from 'react-icons/bs';

const Navbar = ({ theme, toggleTheme }) => {
    const [isUserCookieExist, setIsUserCookieExist] = useState(false);

    useEffect(() => {
        const checkCookie = (User) => {
        const cookies = document.cookie.split(';'); 
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(User + '=')) {
            return true; 
            }
        }
        return false;
        }

        const cookiesExist = checkCookie('User');
        
        if (cookiesExist) {
        setIsUserCookieExist(true);
        console.log("Love in air----")
        }
    }, []);
    
    return (
        <div className="topnav">
            <div className="nav-content">
                <a href="/"><img src={navLogo} alt="logo" className="nav-logo" /></a>
                <div className="left-nav">
                    {theme === 'dark' ? (
                        <button className="changeThem" onClick ={toggleTheme}><BsFillMoonFill /></button>
                    ) : (
                        <button className="changeThem" onClick ={toggleTheme}><BsFillSunFill /></button>
                    )}
                    {isUserCookieExist ? (
                        <a href="/comparisons" className="nav-login">Compare Cities</a>
                    ) : (
                        <a href="/login" className="nav-login"><BsFillPersonFill /> Login</a>
                    )}
                </div> 
            </div>
        </div>
    )
}

export default Navbar
