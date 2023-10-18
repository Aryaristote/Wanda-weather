import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Rw from '../assets/images/rw.svg';

const KigaliData = () => {
    const [loading, setLoading] = useState(true);
    const [_kigaliData, _setKigaliData] = useState(null);

    // Kigali week API
    const [_mondayWeather, _setMondayWeather] = useState(null);
    const [_tuesdayWeather, _setTuesdayWeather] = useState(null);
    const [_wednesdayWeather, _setWednesdayWeather] = useState(null);
    const [_thusdayWeather, _setThursdayWeather] = useState(null);
    const [_fridayWeather, _setFridayWeather] = useState(null);
    const [_saturdayWeather, _setSaturdayWeather] = useState(null)
    const [_sundayWeather, _setSundayWeather] = useState(null);

     // Kigali ENDPOINT
     useEffect(() => {
        const city = "Kigali";
        const apiKey = '80a1eb863f7255c20882855ea4f6f309';

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((jsonData) => {
                _setKigaliData(jsonData.list);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching weather data:', error);
            });
    }, []);

    // Kigali access Data
    useEffect(() => {
        if (_kigaliData && _kigaliData.length > 0) {
            _setMondayWeather(_kigaliData[0]);
            _setTuesdayWeather(_kigaliData[1]);
            _setWednesdayWeather(_kigaliData[2]);
            _setThursdayWeather(_kigaliData[3]);
            _setFridayWeather(_kigaliData[4]);
            _setSaturdayWeather(_kigaliData[5]);
            _setSundayWeather(_kigaliData[6]);
        }
    }, [_kigaliData]);

    //Change image with weather
    const getWeatherImage = (temperature) => {
        if (temperature > 30) {
            return "projcard-img"; // Icon for hot and sunny weather
        } else if (temperature > 20) {
            return "cloud-img"; 
        } else if (temperature > 10) {
            return "wind-img";
        } else {
            return "rain-img"; 
        }
    };

    
    return (
        <>
            {_tuesdayWeather && (_kigaliData && (
                <div className="main-title projcard-img">
                    <div className="main">
                        <span className="number"><b>{_tuesdayWeather.main.temp.toFixed(1)}°</b>C</span>
                        <div id="sunny_cloudy_weather" class="grid__item">
                            <div id="cloud" class="cloud_top cloud_regular"></div>
                            <div id="cloud" class="cloud_bottom cloud_regular"></div>
                        </div>
                    </div>
                    <div className="fter">
                        <h2 className="description">{_tuesdayWeather.weather[0].description}</h2>
                    </div>
                </div>
            ))}
            <div class="projcard-textbox">
                <div class="projcard-title"><img src={Rw} alt='Flag of Rwanda' /> <b>RWANDA | Kigali</b></div>
                <div class="projcard-subtitle">Monday, 12-04-2014</div>
                <div class="projcard-bar"></div>
                <div class="projcard-description">
                    <div className="cond">
                        <small className="header-desc">Full day | Full week</small>
                        <button className="cond-btn">View More</button>
                    </div>
                    <div className="details-content">
                        <div className="hour-details">
                            {_mondayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Mon</small>
                                    <small className="x-temp">{_mondayWeather.main.temp.toFixed(1)}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_tuesdayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Tue</small>
                                    <small className="x-temp">{_tuesdayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_wednesdayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Wed</small>
                                    <small className="x-temp">{_wednesdayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_thusdayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Thu</small>
                                    <small className="x-temp">{_thusdayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_fridayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Fri</small>
                                    <small className="x-temp">{_fridayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_saturdayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Sat</small>
                                    <small className="x-temp">{_saturdayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                            {_sundayWeather && (
                                <div className="x-card">
                                    <small className="x-time">Sun</small>
                                    <small className="x-temp">{_sundayWeather.main.temp}°</small>
                                    <small className="x-icn">img</small>
                                </div>
                            )}
                        </div>
                        <div className="more-details">
                            <div className="x-card" onClick="toggleContentGisenyi">
                                <small><AiOutlinePlus /><br /> View More</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KigaliData
