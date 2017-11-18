import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
TODO:
  Investigate issue:
  If an incorrect city name is passed in the searchbar,
  then the API will return a 404 and the the state
  will fail to update anymore.
*/
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.name;
    /* The json response from the api is not the same as
    the course.  Instead oc cityData.city.name, it must be
    cityData.name */
    return (
      <tr key={name}>
        <td>{name}</td>
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
