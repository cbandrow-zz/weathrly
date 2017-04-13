import React, { Component } from 'react'
import WeatherList from './WeatherList'
import WeatherInput from './WeatherInput'
import $ from 'jquery'

export default class WeatherSummary extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: ''
    }
  }

  handleLocationSubmit(place){


    console.log("Passed in value from Input", place.location)

    // localStorage.setItem('location', this.state.location.toLowerCase())
    // console.log("Updated State ? ", this.state.location);
    debugger;
    $.get(  `http://api.wunderground.com/api/b261b543a03d4205/forecast10day/q/CO/${place.location}.json`).then((weather)=>{
      this.state.weather.push(weather)
      this.setState({weather: this.state.weather, location : place.location})
    })
  }

  // componentDidMount() {
  //   let location = localStorage.getItem('location') || ''
  //   this.setState({location: location ? location : ''}, ()=>{
  //     this.setState({weather: this.handleLocationSubmit()})
  //   })
  // }

  render() {
    return (
      <div className = "inputLocation">
        <WeatherInput handleLocationSubmit = {this.handleLocationSubmit.bind(this)}/>
        <section>
          <h3>That Weather Tho</h3>
          <WeatherList allTheWeather = {this.state.weather} />
        </section>
      </div>
    )
  }
}
