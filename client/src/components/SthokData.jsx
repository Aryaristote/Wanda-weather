import Sw from '../assets/images/se.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { BsCloudHail, BsCloudHaze, BsFillCloudsFill, BsFillSunFill } from 'react-icons/bs';

const SthokData = ({showGothenCard}) => {
    const [loading, setLoading] = useState(true);
    const [sthokData, setSthokData] = useState(null);
    const [temp, setTemp] = useState('');

    // Sweden Week API
    const [mondayWeather, setMondayWeather] = useState(null);
    const [tuesdayWeather, setTuesdayWeather] = useState(null);
    const [wednesdayWeather, setWednesdayWeather] = useState(null);
    const [thusdayWeather, setThursdayWeather] = useState(null);
    const [fridayWeather, setFridayWeather] = useState(null);
    const [saturdayWeather, setSaturdayWeather] = useState(null);
    const [sundayWeather, setSundayWeather] = useState(null);
    const [_todayyWeather, _setTodayWeather] = useState(null);

    //Today weather endpoint
    useEffect(() => {
        const city = "Stockholm";
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

    // Sweden week ENDPOINT
    useEffect(() => {
        const city = "Stockholm";
        const apiKey = '80a1eb863f7255c20882855ea4f6f309';

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((jsonData) => {
                setSthokData(jsonData.list);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching weather data:', error);
            });
    }, []);

    // Sweden access Data
    useEffect(() => {
        if (sthokData && sthokData.length > 0) {
            setMondayWeather(sthokData[0]);
            setTuesdayWeather(sthokData[1]);
            setWednesdayWeather(sthokData[2]);
            setThursdayWeather(sthokData[3]);
            setFridayWeather(sthokData[4]);
            setSaturdayWeather(sthokData[5]);
            setSundayWeather(sthokData[6]);
        }
    }, [sthokData]);

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
            {_todayyWeather && (sthokData && (<>
                <div class="projcard-textbox second-textbox">
                    <div class="projcard-title"><img src={Sw} alt='Flag of Sweden' /> SWEDEN | Stockholm</div>
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
                                        <small className="x-icn"><BsFillSunFill /></small>
                                    </div>
                                )}
                                {tuesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Tue</small>
                                        <small className="x-temp">{tuesdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsCloudHaze /></small>
                                    </div>
                                )}
                                {wednesdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Wed</small>
                                        <small className="x-temp">{wednesdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsCloudHaze /></small>
                                    </div>
                                )}
                                {thusdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Thu</small>
                                        <small className="x-temp">{thusdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillSunFill /></small>
                                    </div>
                                )}
                                {fridayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Fri</small>
                                        <small className="x-temp">{fridayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillCloudsFill /></small>
                                    </div>
                                )}
                                {saturdayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sat</small>
                                        <small className="x-temp">{saturdayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsFillCloudsFill /></small>
                                    </div>
                                )}
                                {sundayWeather && (
                                    <div className="x-card">
                                        <small className="x-time">Sun</small>
                                        <small className="x-temp">{sundayWeather.main.temp}°</small>
                                        <small className="x-icn"><BsCloudHail /></small>
                                    </div>
                                )}
                            </div>
                            <div className="more-details cond-block">
                                <div className="x-card" onClick={showGothenCard}>
                                    <small><AiOutlinePlus /><br /> View More</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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
            </>))}
        </>
    )
}

export default SthokData
