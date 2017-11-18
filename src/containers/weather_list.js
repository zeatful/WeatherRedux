import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
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
    const temps = cityData
      .list
      .map(weather => weather.main.temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange"/>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
