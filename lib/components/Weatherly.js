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

  componentDidMount() {
    let location = localStorage.getItem('location') || ''
    // this.setState({location: location ? location : ''}, ()=>{
    //   this.setState({weather: this.handleLocationSubmit()})
    // })
  }

  handleLocationSubmit(place){
    debugger;
    // let newLocation = Object.assign(place, {location: place})
    this.setState({
      location: place
    });
    console.log("Current location set ", this.state.location)


    localStorage.setItem('location', this.state.location)
    // $.get(  `http://api.wunderground.com/api/90834c8e116ac9eb/forecast10day/q/${this.state.location.toLowerCase()}}.json`).then((weather)=>{
    //   this.setState({weather: weather, location: place})
    // })
  }

  // <WeatherList allTheWeather = {this.state.weather} />

  render() {
    return (
      <div className = "inputLocation">
        <WeatherInput handleLocationSubmit = {this.handleLocationSubmit.bind(this)}/>
        <section>
          <h3>That Weather Tho</h3>
        </section>
      </div>
    )
  }
}
