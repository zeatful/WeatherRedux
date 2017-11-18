import React, {Component} from 'react';

class GoogleMap extends Component {
  // use this to make thirdparty libraries work with react
  componentDidMount() {
    new google
      .maps
      .Map(this.refs.map, {
        zoom: 12, // about the screen width of a city
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      });
  }
  render() {
    // this.refs.map
    return <div ref="map"/>;
  }
}

export default GoogleMap;