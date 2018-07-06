import { combineReducers } from 'redux';
import searchBarReducer from './js/components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
  weatherData: searchBarReducer
  
});

export default rootReducer;
