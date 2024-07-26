import React from 'react';
import { useSelector } from 'react-redux';

const Forecast = () => {
  const { forecast, loading, error } = useSelector(state => state);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Forecast</h2>
      {forecast ? (
        <div>
          {forecast.list.map(item => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleString()}</p>
              <p>{item.main.temp}°C</p>
              <p>{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No forecast data</p>
      )}
    </div>
  );
};

export default Forecast;
