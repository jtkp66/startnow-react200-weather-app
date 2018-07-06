
import { connect } from 'react-redux';
import searchBar from './SearchBar';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    weatherData: store.weatherData.apiData,
    test: 'hello'
  };
}

// // This might look odd but, connect returns a function,
// // that is then called with the component itself.
export default connect(mapStoreToProps)(searchBar);
