import React, { Component } from 'react'
import WeatherInput from './WeatherInput'
import CurrentCondition from './CurrentCondition'
import TenDay from './TenDay'
import cleanTenDay from './helper/cleanTenDay'
import cleanQuery from './helper/cleanQuery'
import $ from 'jquery'

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      apiLocation: '',
      tenDayWeather: [],
      weather: [],
      location: ''
    }
  }

  handleAutoComplete(place){
    $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${place.location}`).then((query)=>{
      let tempLocation = cleanQuery(query)
      this.state.apiLocation = tempLocation.apiLocation
      this.state.location = tempLocation.location
      this.setState({apiLocation: this.state.apiLocation, location : this.state.location})
      this.handleTenDaySubmit(this.state.apiLocation)
    })
  }

  handleTenDaySubmit(place){
    $.get(  `http://api.wunderground.com/api/90834c8e116ac9eb/forecast10day/${place}.json`).then((weather)=>{
      let cleanedTenDay = cleanTenDay(weather)
      this.state.tenDayWeather.push(cleanedTenDay)
      this.setState({tenDayWeather: this.state.tenDayWeather, location : this.state.location})
      this.storeLocal()
    })
    if(this.state.tenDayWeather.length >= 1){
      this.state.tenDayWeather.splice(0, 1)
    }
  }

  storeLocal(){
    localStorage.setItem('location', this.state.location)
    localStorage.setItem('apilocation', this.state.apiLocation)
  }

  componentDidMount() {
    let location = localStorage.getItem('location') || ''
    let apilocation = localStorage.getItem('apilocation') || ''
    this.setState({location : location})
    this.setState({weather : this.handleTenDaySubmit(apilocation)})
  }

  // <CurrentCondition todayWeather= {this.state.weather.todayWeather[0].forecast.txt_forecast.forecastday[0]} />
  render() {
    return (
      <div className = "inputLocation">
        <section>
        <WeatherInput handleAutoComplete = {this.handleAutoComplete.bind(this)}/>
          <h3>That Weather Tho</h3>
          <TenDay allTheWeather = {this.state.tenDayWeather}
                  weatherLocation = {this.state.location}/>
        </section>
      </div>
    )
  }
}
