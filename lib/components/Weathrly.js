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
      console.log(tempLocation)
      this.state.apiLocation = tempLocation.apiLocation
      this.state.location = tempLocation.location
      this.setState({apiLocation: this.state.apiLocation, location : this.state.location})
      this.handleTenDaySubmit(this.state.apiLocation)


    })
  }
  //
  //   this.setState({weather: this.state.tenDayWeather, location : place.location})
  //   this.storeLocal()
  // })
  // if(this.state.tenDayWeather.length >= 1){
  //   this.state.tenDayWeather.splice(0, 1)

  handleTenDaySubmit(place){
    $.get(  `http://api.wunderground.com/api/b261b543a03d4205/forecast10day/${place}.json`).then((weather)=>{
      let cleanedTenDay = cleanTenDay(weather)
      this.state.tenDayWeather.push(cleanedTenDay)
      this.setState({weather: this.state.tenDayWeather, location : place.location})
      this.storeLocal()
    })
    if(this.state.tenDayWeather.length >= 1){
      this.state.tenDayWeather.splice(0, 1)
    }
  }

  storeLocal(){
    localStorage.setItem('location', this.state.apiLocation)
  }

  // componentDidMount() {
  //   let location = localStorage.getItem('location') || ''
  //   this.setState({location: location ? location : ''}, ()=>{
  //     this.setState({weather: this.handleLocationSubmit(location)})
  //   })
  // }

  // <CurrentCondition todayWeather= {this.state.weather.todayWeather[0].forecast.txt_forecast.forecastday[0]} />
  render() {
    console.log("current location ", this.state.location)
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
