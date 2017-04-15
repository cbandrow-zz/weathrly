import React, { Component } from 'react'
import WeatherInput from './WeatherInput'
import WeatherSummary from './WeatherSummary'
import WeatherHourly from './WeatherHourly'
import TenDay from './TenDay'

import cleanCurrent from './helper/cleanCurrent'
import cleanTenDay from './helper/cleanTenDay'
import cleanQuery from './helper/cleanQuery'
import cleanHourly from './helper/cleanHourly'
import $ from 'jquery'

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      apiLocation: '',
      tenDayWeather: [],
      currentWeather: [],
      hourlyWeather: [],
      weather: [],
      location: ''
    }
  }

  handleAutoComplete(place){
    $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${place.location}`).then((query)=>{
      console.log("autocomplete", query)
      let tempLocation = cleanQuery(query)
      this.state.apiLocation = tempLocation.apiLocation
      this.state.location = tempLocation.location
      this.setState({apiLocation: this.state.apiLocation, location : this.state.location})
      this.handleFunctionCalls(this.state.apiLocation)
    })
  }

  handleFunctionCalls(place) {
    this.handleTenDaySubmit(place)
    this.handleHourlySubmit(place)
    this.handleWeatherSummarySubmit(place)
  }

  handleWeatherSummarySubmit(place){
    $.get(`http://api.wunderground.com/api/90834c8e116ac9eb/conditions/${place}.json`).then((today) => {
      console.log(today)
      let cleanedSummary = cleanCurrent(today)
      console.log(cleanedSummary)
      this.state.currentWeather.push(cleanedSummary);
      this.setState({currentWeather: this.state.currentWeather})
      this.storeLocal()
    })
    if(this.state.currentWeather.length >= 1){
      this.state.currentWeather.splice(0, 1)
    }
  }

  handleHourlySubmit(place){
    $.get(`http://api.wunderground.com/api/90834c8e116ac9eb/hourly/${place}.json`).then((today) => {
      let cleanedHourly = cleanHourly(today)
      console.log(cleanedHourly)
      this.state.hourlyWeather.push(cleanedHourly);
      this.setState({hourlyWeather: this.state.hourlyWeather})
    })
    if(this.state.hourlyWeather.length >= 1){
      this.state.hourlyWeather.splice(0, 1)
    }
  }

  handleTenDaySubmit(place){
    $.get(  `http://api.wunderground.com/api/90834c8e116ac9eb/forecast10day/${place}.json`).then((weather)=>{
      let cleanedTenDay = cleanTenDay(weather)
      this.state.tenDayWeather.push(cleanedTenDay)
      this.setState({tenDayWeather: this.state.tenDayWeather, location : this.state.location})
    })
    if(this.state.tenDayWeather.length >= 1){
      this.state.tenDayWeather.splice(0, 1)
    }
  }

  storeLocal(){
    localStorage.setItem('location', this.state.location)
    localStorage.setItem('apiLocation', this.state.apiLocation)
  }

  componentDidMount() {
    let location = localStorage.getItem('location') || ''
    let apiLocation = localStorage.getItem('apiLocation') || ''
    this.setState({apiLocation: apiLocation})
    this.setState({location : location})
    if (apiLocation) {
      this.handleFunctionCalls(apiLocation)
    }
  }

  render() {
    return (
      <div id = "weatherContainer">
        <section id = "inputContainer">
          <WeatherInput handleAutoComplete = {this.handleAutoComplete.bind(this)}/>
        </section>
        <section id = "summaryContainer">
          <WeatherSummary summary = {this.state.currentWeather}/>
        </section>
        <section id = "hourlyContainer">
          <WeatherHourly hourSummary = {this.state.hourlyWeather}/>
        </section>
        <section id = "tenDayContainer">
          <TenDay allTheWeather = {this.state.tenDayWeather}/>
        </section>
      </div>
    )
  }
}
