import React, { Component } from 'react';
import SearchBar from '../container/searchbar';
import WeatherList from '../container/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Search a city's weather</h3>
        < SearchBar />
      < WeatherList />
      </div>
    );
  }
}
