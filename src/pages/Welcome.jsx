import React from 'react'
import Navbar from "../components/Navbar"
import WeatherCards from "../components/WeatherCards"

const Welcome = ({ theme, toggleTheme }) => {
  return (
    <div className="app-block">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <WeatherCards  theme={theme} />
    </div>
  )
}

export default Welcome
