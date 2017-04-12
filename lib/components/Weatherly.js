import React, { Component } from 'react'
import WeatherList from './WeatherList'
import $ from 'jquery'

export default class WeatherSummary extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      city: '',
      state: '',
      weather: [],
    }
  }

  componentDidMount() {
    let location = localStorage.getItem('location') || ''
    this.setState({location: location ? location : ''}, ()=>{
      this.setState({weather: this.handleLocationSumbit()})
    })
  }

  handleLocationSubmit(){
    localStorage.setItem('location', this.state.location.toLowerCase())
    $.get('../../test.json') + this.state.location.toLowerCase().then((weather)=>{
      console.log(weather);
      this.setState({weather: weather})
    })

    // $.get(`http://api.wunderground.com/api/b261b543a03d4205/forecast10day/q/${state}/${city}.json`) + this.state.location.toLowerCase().then((weather)=>{
    //   console.log(weather);
    //   this.setState({weather: weather})
    // })
  }

  render() {
    return (
      <div class = "inputLocation">
        <input type = "text"
               placeholder = "Enter the Zip Code"
               value = { this.state.input }
               onChange = { (event) => this.setState ( { input:event.target.value } ) } />
        <input type = "submit"
               disabled = { !this.state.input}
               onClick = { this.handleLocationSubmit.bind(this) }
             />
        <section>
          <h3>That Weather Tho</h3>
          <WeatherList allTheWeather = {this.state.weather} />
        </section>
      </div>
    )
  }
}
