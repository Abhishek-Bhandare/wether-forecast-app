import {
  FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE,
  FETCH_FORECAST_REQUEST, FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAILURE
} from './actions';

const initialState = {
  loading: false,
  weather: null,
  forecast: null,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
    case FETCH_FORECAST_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weather: action.payload };
    case FETCH_FORECAST_SUCCESS:
      return { ...state, loading: false, forecast: action.payload };
    case FETCH_WEATHER_FAILURE:
    case FETCH_FORECAST_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default weatherReducer;
