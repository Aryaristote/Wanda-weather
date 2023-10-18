import React, { useEffect, useState } from 'react';
import { BsCloudHail, BsCloudHaze, BsFillCloudsFill, BsFillSunFill } from 'react-icons/bs';
import Rw from '../assets/images/rw.svg';

const GisenyiData = () => {
    const [loading, setLoading] = useState(true);
    const [_gisenyiData, _setGisenyiData] = useState(null);
    const [temp, setTemp] = useState('');

    // Kigali week API
    const [_mondayWeather, _setMondayWeather] = useState(null);
    const [_tuesdayWeather, _setTuesdayWeather] = useState(null);
    const [_wednesdayWeather, _setWednesdayWeather] = useState(null);
    const [_thusdayWeather, _setThursdayWeather] = useState(null);
    const [_fridayWeather, _setFridayWeather] = useState(null);
    const [_saturdayWeather, _setSaturdayWeather] = useState(null)
    const [_sundayWeather, _setSundayWeather] = useState(null);
    const [_todayyWeather, _setTodayWeather] = useState(null);

    //Today weather endpoint
    useEffect(() => {
        const city = "Paris";
        const apiKey = '80a1eb863f7255c20882855ea4f6f309';
      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          .then((response) => response.json())
          .then((jsonData) => {
            _setTodayWeather(jsonData);
            setTemp((jsonData.main.temp - 273.15).toFixed(1));
            setLoading(false);
          })
          .catch((error) => {
            console.log('Error fetching weather data:', error);
        });
    }, []); 

    // Kigali whole week ENDPOINT
    useEffect(() => {
        const city = "Goma";
        const apiKey = '80a1eb863f7255c20882855ea4f6f309';

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((jsonData) => {
                _setGisenyiData(jsonData.list);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching weather data:', error);
            });
    }, []);

    // Kigali access Data
    useEffect(() => {
        if (_gisenyiData && _gisenyiData.length > 0) {
            _setMondayWeather(_gisenyiData[0]);
            _setTuesdayWeather(_gisenyiData[1]);
            _setWednesdayWeather(_gisenyiData[2]);
            _setThursdayWeather(_gisenyiData[3]);
            _setFridayWeather(_gisenyiData[4]);
            _setSaturdayWeather(_gisenyiData[5]);
            _setSundayWeather(_gisenyiData[6]);
        }
    }, [_gisenyiData]);

    //Set icons with weather
    const displayIcon = () => {
        if(temp >= 28){
            return "sunny-img";
        }else if(temp >= 18){
            return "wind-img";
        }else if(temp >= 9){
            return "cloud-img";
        }else{
            return "rain-img";
        }
    }
    
    return (
        <>
            {_todayyWeather && (_gisenyiData && (
                <div className={`main-title projcard-img ${displayIcon()}`}>
                    <div className="main">
                        <span className="number"><b>{temp}°</b>C</span>
                        <div id="sunny_cloudy_weather" class="grid__item">
                            <div id="cloud" class="cloud_top cloud_regular"></div>
                            <div id="cloud" class="cloud_bottom cloud_regular"></div>
                        </div>
                    </div>
                    <div className="fter">
                        <h2 className="description">{_todayyWeather.weather[0].description}</h2>
                    </div>
                </div>
            ))}
            <div class="projcard-textbox">
                <div class="projcard-title"><img src={Rw} alt='Flag of Rwanda' /> <b>RWANDA | Gisenyi</b></div>
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
                                        <small className="x-icn"><BsFillCloudsFill /></small>
                                    </div>
                                )}
                                {_tuesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Tue</small>
                                        <small className="x-temp">{_tuesdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillCloudsFill /></small>
                                    </div>
                                )}
                                {_wednesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Wed</small>
                                        <small className="x-temp">{_wednesdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsCloudHaze /></small>
                                    </div>
                                )}
                                {_thusdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Thu</small>
                                        <small className="x-temp">{_thusdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsCloudHail /></small>
                                    </div>
                                )}
                                {_fridayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Fri</small>
                                        <small className="x-temp">{_fridayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillCloudsFill /></small>
                                    </div>
                                )}
                                {_saturdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sat</small>
                                        <small className="x-temp">{_saturdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillSunFill /></small>
                                    </div>
                                )}
                                {_sundayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sun</small>
                                        <small className="x-temp">{_sundayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillSunFill /></small>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GisenyiData
