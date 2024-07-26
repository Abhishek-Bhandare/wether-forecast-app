import React from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import SearchInput from './SearchInput';

const WeatherApp = () => (
  <div>
    <SearchInput />
    <CurrentWeather />
    <Forecast />
  </div>
);

export default WeatherApp;
