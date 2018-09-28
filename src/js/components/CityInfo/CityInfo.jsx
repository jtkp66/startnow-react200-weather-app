import React, { Component } from 'react';
//import {weatherData} from './index';

class CityInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { weatherData } = this.props;
        // const temp = this.props.temp;
        console.log(weatherData);
        // console.log(this.props);

        // if (!weatherData) {
        //     return <div>Loading...</div>
        // }
        return (
            <div className='card text-center'>
                <div className="card-header font-weight-bold">City Information</div>
                <div className="card-body">
                    <div>
                        <h1>{weatherData && weatherData.name}</h1>
                        <p>{!weatherData.name ? 'Coordinates' : `Lat / Lng: ${weatherData.coord.lat}, ${weatherData.coord.lon}`}</p>
                        {weatherData.name &&
                            <img
                                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                                alt='Weather icon'
                                className='weather-icon'
                            />
                        }
                        {/* <h3>{weatherData && weatherData.name}</h3>
                        <p>{!weatherData.name ? 'Coordinates' : `Lat / Lng: ${weatherData.coord.lat}, ${weatherData.coord.lon}`}</p> */}
                    </div>
                    <hr></hr>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Temperature(F)</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.temp}</div>
                    </div>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Pressure</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.pressure}</div>
                    </div>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Humidity</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.humidity}</div>
                    </div>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Lowest Temp(F)</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.temp_min}</div>
                    </div>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Highest Temp(F)</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.main && weatherData.main.temp_max}</div>
                    </div>
                    <div className="card col-sm-4">
                        <div className="card-body font-weight-bold">Wind Speed</div>
                        <div className="text-success font-weight-bold">{weatherData && weatherData.wind && weatherData.wind.speed}</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CityInfo;

//export default CityInfo;
// function mapStateToProps({ weather }) {
//     return { weather }; //{weather} === {weather: weather}
// }

// export default connect(mapStateToProps)(weatherData);

{/* <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <td></td>
                    </tbody>
                    <tr>
                    <th>Humidity(%)</th>
                    <th>Humidity(%)</th>
                    <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table> */}