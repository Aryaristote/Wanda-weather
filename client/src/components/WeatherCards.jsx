import React, { useEffect, useState } from 'react';
import KigaliData from './KigaliData';
import Gothenburg from './GothenData';
import GisenyiData from './GisenyiData'; 
import SthokData from './SthokData';
import SearchResult from './SearchResult';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const WeatherCards = ({ theme }) => {
    const [isGisenyiViz, setIsGisenyiViz] = useState(false);
    const [isGothenViz, setIsGothenViz] = useState(false);
    const [input, setInput] = useState('');
    const [showResultBlk, setShowResultBlk] = useState(false);
    const [weatherData, setWeatherData] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiKey = '80a1eb863f7255c20882855ea4f6f309';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === '404') { 
                setWeatherData("No city found");
            } else {
                setWeatherData(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            setWeatherData("An error occurred while fetching data");
        });

        setShowResultBlk(true);
    };
    
    //Hide and show other town
    const showGisenyiCard = () => {
        setIsGisenyiViz(!isGisenyiViz)
    }

    //Hide and show other town
    const showGothenCard = () => {
        setIsGothenViz(!isGothenViz)
    }

    const hideResult = () => {
        setShowResultBlk(false);
        setInput('')
    }

    return (
        <div className="main-cards">
            
            <div className='search-block'>
                <div className='search-content'>
                    <form onSubmit={handleSubmit} className='search' role="search">
                        <input id="search" type="search" placeholder="Find by City" name="input" autoFocus required value={input} onChange={handleChange} />
                        <button type="submit">Go</button>
                    </form>
                    {showResultBlk && <button onClick={hideResult} className="backBtn"><AiOutlineArrowLeft /> <span>Go Back</span></button>}
                </div>
            </div>

            <div class="projcard-container">
                {showResultBlk && ( <div className='projcard projcard-blue'>
                    <div className='projcard-innerbox cond-box'>
                        <SearchResult weatherData={weatherData} />
                    </div>
                </div>)}

                {!showResultBlk && <div class="projcard projcard-blue">
                    <div class="projcard-innerbox cond-box">
                        <KigaliData showGisenyiCard={showGisenyiCard} _kigaliData="_kigaliData" />
                    </div>
                </div>}

                {isGisenyiViz && <div class={`projcard projcard-red ${isGisenyiViz ? 'slideIn' : 'slideOut'}`}>
                        <div class="projcard-innerbox cond-box">
                            <GisenyiData _gisenyiData="_gisenyiData" />
                        </div>
                </div>}

                {!showResultBlk && <div class="projcard projcard-red">
                    <div class="projcard-innerbox">
                        <SthokData showGothenCard={showGothenCard} />
                    </div>
                </div>}

                {isGothenViz && <div class={`projcard projcard-red ${isGisenyiViz ? 'slideIn' : ''}`}>
                    <div class="projcard-innerbox">
                        <Gothenburg gotheniData="gotheniData" />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default WeatherCards;
