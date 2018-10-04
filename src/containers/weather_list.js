import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import CityLocation from '../components/city_location';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(readings => readings.main.temp - 273);
        const humidity = cityData.list.map(readings => readings.main.humidity);
        const pressure = cityData.list.map(readings => readings.main.pressure);
        const {lat, lon} = cityData.city.coord;
        return (
          <tr key={name}>
              <td><CityLocation lat={lat} lon={lon}/></td>
              <td><Chart data={temperature} color="red"/></td>
              <td><Chart data={humidity} color="blue"/></td>
              <td><Chart data={pressure} color="black"/></td>
          </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                  <tr>
                     <th>City</th>
                      <th>Temperature [°C]</th>
                      <th>Humidity [%]</th>
                      <th>Pressure [hPa]</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
