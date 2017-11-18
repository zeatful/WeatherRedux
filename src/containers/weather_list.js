import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
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
        <tbody></tbody>
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