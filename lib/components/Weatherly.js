import React, { Component } from 'react'
import WeatherList from './WeatherList'
import WeatherInput from './WeatherInput'
import $ from 'jquery'

export default class WeatherSummary extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      zip: '',
      city: '',
      state: '',
      weather: [],
    }
  }

  render() {
    return (
      <div className = "inputLocation">
        <WeatherInput location = {this.state.location}/>
        <section>
          <h3>That Weather Tho</h3>
          <WeatherList allTheWeather = {this.state.weather} />
        </section>
      </div>
    )
  }
}
