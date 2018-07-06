import React from 'react';
import SearchBar from './components/SearchBar';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5' >
          <div className='head-container'>
            <h1 className='page-title'>Undefined Weather App</h1>
            <p className='page-description'>Always know if you need an umbrella!</p>
          </div>
        </div>
        <div className='row'>
          <SearchBar />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <CityInfo />
          </div>
          <div className='col-md'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}

