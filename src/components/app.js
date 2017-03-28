import React, { Component } from 'react';
import SearchBar from '../container/searchbar';
import WeatherList from '../container/weather_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        < SearchBar />
      < WeatherList />
      </div>
    );
  }
}
