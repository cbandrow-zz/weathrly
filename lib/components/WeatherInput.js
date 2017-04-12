import React, { Component } from 'react'
import $ from 'jquery'

export default class WeatherInput extends Component {
  constructor(location) {
    super();
    this.state = {
      location: '',
      weather: [],
    }
  }

  handleLocationSubmit(){
    localStorage.setItem('location', this.state.location.toLowerCase())
    $.get(`http://api.wunderground.com/api/b261b543a03d4205/forecast10day/q/${this.state.location.toLowerCase()}}.json`).then((weather)=>{
      console.log(weather);
      this.setState({weather: weather})
    })
  }

  componentDidMount() {
    let location = localStorage.getItem('location') || ''
    this.setState({location: location ? location : ''}, ()=>{
      this.setState({weather: this.handleLocationSubmit()})
    })
  }

  render() {
    return (
      <section>
        <input type = "text"
           placeholder = "Enter location"
           value = { location }
           onChange = { (event) => this.setState ( { location: event.target.value } ) } />
        <input type = "submit"
           disabled = { !location}
           onClick = { this.handleLocationSubmit.bind(this) }
         />
      </section>
    )
  }
}

// export default WeatherInputs
