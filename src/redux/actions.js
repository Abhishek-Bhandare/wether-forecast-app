export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE';

export const fetchWeather = (location) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=61691aa2238a6fbd7c314a348e57744d`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Fetched weather data:", data); // Debugging
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
  } catch (error) {
    console.error("Fetch error:", error); // Debugging
    dispatch({ type: FETCH_WEATHER_FAILURE, error: error.message });
  }
};

export const fetchForecast = (location) => async (dispatch) => {
  dispatch({ type: FETCH_FORECAST_REQUEST });
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=YOUR_API_KEY&units=61691aa2238a6fbd7c314a348e57744d`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Fetched forecast data:", data); // Debugging
    dispatch({ type: FETCH_FORECAST_SUCCESS, payload: data });
  } catch (error) {
    console.error("Fetch error:", error); // Debugging
    dispatch({ type: FETCH_FORECAST_FAILURE, error: error.message });
  }
};
