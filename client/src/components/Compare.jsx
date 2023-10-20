import React, { useState  } from 'react';

const Compare = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [weatherData1, setWeatherData1] = useState(null);
  const [weatherData2, setWeatherData2] = useState(null);
  const [result, setResult] = useState('');

  const apiKey = '80a1eb863f7255c20882855ea4f6f309';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`);
      const data1 = await response1.json();

      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`);
      const data2 = await response2.json();

      if (data1.cod === '404' || data2.cod === '404') {
        setResult('One or both cities not found.');
        return;
      }
      setWeatherData1(data1);
      setWeatherData2(data2);

      // Compare the weather data here and set the result accordingly
      if (data1.main.temp > data2.main.temp) {
        setResult(`${city1} is hotter than ${city2}.`);
      } else if (data1.main.temp < data2.main.temp) {
        setResult(`${city2} is hotter than ${city1}.`);
      } else {
        setResult(`${city1} and ${city2} have the same temperature.`);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setResult('Error fetching weather data.');
    }
  };

  return (
    <div className="comp-cards">
      <div className="card-content">
        <div className="respont-card">
          {result && <p>{result}</p>}
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
          <button type="submit">Compare</button>
        </form>
      </div>
    </div>
  );
}

export default Compare;
