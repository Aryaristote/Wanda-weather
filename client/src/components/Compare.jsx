import React, { useState  } from 'react';

const Compare = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [weatherData1, setWeatherData1] = useState(null);
  const [weatherData2, setWeatherData2] = useState(null);
  const [result, setResult] = useState('');

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

  const fetchWeatherData = async (city, setDataFunction) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      setDataFunction(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setDataFunction(null);
    }
  };

  const compareCities = async () => {
    setWeatherData1(null);
    setWeatherData2(null);
    setResult('Fetching weather data...');

    const promises = [
      fetchWeatherData(city1, setWeatherData1),
      fetchWeatherData(city2, setWeatherData2),
    ];

    try {
      await Promise.all(promises);

      if (!weatherData1 || !weatherData2) {
        setResult('Error fetching weather data.');
        return;
      }

      // Compare the weather data here and set the result accordingly
      if (weatherData1.main.temp > weatherData2.main.temp) {
        setResult(`${city1} is hotter than ${city2}.`);
      } else if (weatherData1.main.temp < weatherData2.main.temp) {
        setResult(`${city2} is hotter than ${city1}.`);
      } else {
        setResult(`${city1} and ${city2} have the same temperature.`);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setResult('Error fetching weather data.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    compareCities();
  };

  return (
    <div className="comp-cards">
      <div className="card-content">
        <div className="respont-card">
          Block response:
          <p>{result}</p>
        </div>
        <form className="all-input" onSubmit={handleSubmit}>
          <div className="all-input">
            <div className="right-card">
              <label>Input city one</label>
              <input name="left" type="text" value={city1} onChange={(e) => setCity1(e.target.value)} className="input-card" placeholder="City One" />
            </div>
            <div className="left-card">
              <label>Input city two</label>
              <input name="right" type="text" value={city2} onChange={(e) => setCity2(e.target.value)} className="input-card" placeholder="City Two" />
            </div>
          </div>
          <button type="submit" onClick={compareCities}>Compare</button>
        </form>
      </div>
    </div>
  );
}

export default Compare;
