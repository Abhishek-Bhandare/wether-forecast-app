import React from 'react';
import { useSelector } from 'react-redux';

const CurrentWeather = () => {
  const weather = useSelector(state => state.weather);
  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default CurrentWeather;
