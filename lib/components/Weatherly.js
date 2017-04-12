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
    this.setState({location: place}, ()=>{
      localStorage.setItem('location', this.state)
    })
  this.handleAPI()
  }

  handleAPI(place){
    $.get(  `http://api.wunderground.com/api/90834c8e116ac9eb/forecast10day/q/${this.state.location.toLowerCase()}}.json`).then((weather)=>{
      this.setState({weather: weather})
    })
  }

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
