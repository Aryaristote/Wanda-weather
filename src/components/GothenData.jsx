import Sw from '../assets/images/se.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';

const GothenData = () => {
    const [loading, setLoading] = useState(true);
    const [gothenData, setGothenData] = useState(null);

    // Kigali week API
    const [mondayWeather, setMondayWeather] = useState(null);
    const [tuesdayWeather, setTuesdayWeather] = useState(null);
    const [wednesdayWeather, setWednesdayWeather] = useState(null);
    const [thusdayWeather, setThursdayWeather] = useState(null);
    const [fridayWeather, setFridayWeather] = useState(null);
    const [saturdayWeather, setSaturdayWeather] = useState(null)
    const [sundayWeather, setSundayWeather] = useState(null);

    // Kigali ENDPOINT
    useEffect(() => {
        const city = "Gothenburg ";
        const apiKey = '80a1eb863f7255c20882855ea4f6f309';

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((jsonData) => {
                setGothenData(jsonData.list);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching weather data:', error);
            });
    }, []);

    // Kigali access Data
    useEffect(() => {
        if (gothenData && gothenData.length > 0) {
            setMondayWeather(gothenData[0]);
            setTuesdayWeather(gothenData[1]);
            setWednesdayWeather(gothenData[2]);
            setThursdayWeather(gothenData[3]);
            setFridayWeather(gothenData[4]);
            setSaturdayWeather(gothenData[5]);
            setSundayWeather(gothenData[6]);
        }
    }, [gothenData]);

    
    return (
        <>
            {gothenData && (
                <div class="projcard-textbox second-textbox">
                    <div class="projcard-title"><img src={Sw} alt='Flag of Sweden' /> SWEDEN | Gothenburg</div>
                    <div class="projcard-subtitle">Monday, 12-04-2014</div>
                    <div class="projcard-bar sweden-bar"></div>
                    <div class="projcard-description">
                        <div className="cond">
                            <small className="header-desc">Full day | Full week</small>
                            <button className="cond-btn">View More</button>
                        </div>
                        <div className="details-content">
                            <div className="hour-details">
                                {mondayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Mon</small>
                                        <small className="x-temp">{mondayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {tuesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Tue</small>
                                        <small className="x-temp">{tuesdayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {wednesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Wed</small>
                                        <small className="x-temp">{wednesdayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {thusdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Thu</small>
                                        <small className="x-temp">{thusdayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {fridayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Fri</small>
                                        <small className="x-temp">{fridayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {saturdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sat</small>
                                        <small className="x-temp">{saturdayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                                {sundayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sun</small>
                                        <small className="x-temp">{sundayWeather.main.temp}°</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {tuesdayWeather && (gothenData && (
                    <div className="main-title projcard-img projcard-last">
                    <div className="main">
                        <span className="number"><b>{tuesdayWeather.main.temp.toFixed(1)}°</b>C</span>
                        <div id="sunny_cloudy_weather" class="grid__item">
                            <div id="cloud" class="cloud_top cloud_regular"></div>
                            <div id="cloud" class="cloud_bottom cloud_regular"></div>
                        </div>
                    </div>
                    <div className="fter">
                        <h2 className="description">{tuesdayWeather.weather[0].description}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}

export default GothenData
