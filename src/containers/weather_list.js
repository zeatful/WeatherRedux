import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

/*
TODO:
  Investigate issue:
  If an incorrect city name is passed in the searchbar,
  then the API will return a 404 and the the state
  will fail to update anymore.
*/
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const {lon, lat} = cityData.city.coord;

    const temps = cityData
      .list
      .map(weather => _.round(weather.main.temp * (9 / 5) - 459.67));

    const pressures = cityData
      .list
      .map(weather => weather.main.pressure);

    const humidities = cityData
      .list
      .map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="orange" units="&deg;F"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="black" units="%"/>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this
            .props
            .weather
            .map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/* parameter was {state} before
and had to return {weather: state.weather}*/
function mapStateToProps({weather}) {
  return {weather}; // { weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
