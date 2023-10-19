import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Compare from "../components/Compare";
import { MdOutlineLocationOn } from 'react-icons/md'

const Comparisons = ({ theme, toggleTheme }) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      async function fetchCountryLocation() {
        try {
            const response = await axios.get('https://ipapi.co/json/');
            setData(response.data.country_name);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching country location:', error);
        }
      }
      fetchCountryLocation();
    }, []);

  return (
    <div className="app-block">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {loading ? (
          <p>...</p>
        ) : (
          <div className='header-location'>
            <h2><MdOutlineLocationOn /> 
              {data === "Rwanda" ? "Amakuru yumu Rwanda" : data === "Sweden" ? "Morgon från Sverige" : `Morning from ${data}`}
            </h2>
          </div>
        )}
        <Compare />
    </div>
  )
}

export default Comparisons
