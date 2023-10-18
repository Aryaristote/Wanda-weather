import React, { useState, useEffect } from 'react';

const SearchResult = ({ weatherData }) => {
  const [searchData, setSearchData] = useState(weatherData);
  const [temp, setTemp] = useState('');

  useEffect(() => {
    setSearchData(weatherData);
    setTemp(weatherData?.main?.temp ? (weatherData.main.temp - 273.15).toFixed(1) : '');
  }, [weatherData]);

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
      {weatherData === "No city not found" && <h1 className="noData">No city find</h1>}
      {weatherData && ( temp && (<>
        <div className={`main-title projcard-img ${displayIcon()}`}>
          <div className="main">
            <span className="number"><b>{temp}°</b>C</span>
            <div id="sunny_cloudy_weather" class="grid__item">
                <div id="cloud" class="cloud_top cloud_regular"></div>
                <div id="cloud" class="cloud_bottom cloud_regular"></div>
          </div>
          </div>
            <div className="fter">
                <h2 className="description">{searchData.weather[0].description}</h2>
            </div>
        </div>
        <div class="projcard-textbox">
          <div class="projcard-title"><b>{searchData.sys.country} | {searchData.name}</b></div>
          <div class="projcard-subtitle">Monday, 12-04-2014</div>
          <div class="projcard-bar"></div>
        </div>
      </>))}
    </>
  );
}

export default SearchResult;
