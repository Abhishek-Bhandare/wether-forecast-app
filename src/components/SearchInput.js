import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather, fetchForecast } from '../redux/actions';

const SearchInput = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWeather(location));
    dispatch(fetchForecast(location));
  };

  return (
    <div>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
