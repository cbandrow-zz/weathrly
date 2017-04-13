import React, { Component } from 'react'
import WeatherList from './WeatherList'
import WeatherInput from './WeatherInput'
import $ from 'jquery'

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: ''
    }
  }

  handleLocationSubmit(place){
    console.log("From WeatherInput.js ", place.location)
    $.get(  `http://api.wunderground.com/api/b261b543a03d4205/forecast10day/q/CO/${place.location}.json`).then((weather)=>{
      this.state.weather.push(weather)
      
      this.setState({weather: this.state.weather, location : place.location})
      this.storeLocal()
    })
  }

  storeLocal(){
    localStorage.setItem('location', this.state.location.toLowerCase())
  }

  // componentDidMount() {
  //   let location = localStorage.getItem('location') || ''
  //   this.setState({location: location ? location : ''}, ()=>{
  //     this.setState({weather: this.handleLocationSubmit()})
  //   })
  // }

  render() {
    console.log("current location ", this.state.location)
    return (
      <div className = "inputLocation">
        <WeatherInput handleLocationSubmit = {this.handleLocationSubmit.bind(this)}/>
        <section>
          <h3>That Weather Tho</h3>
          <WeatherList allTheWeather = {this.state.weather}
                       weatherLocation = {this.state.location}/>
        </section>
      </div>
    )
  }
}
