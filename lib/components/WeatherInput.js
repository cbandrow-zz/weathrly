import React, { Component } from 'react'
import $ from 'jquery'

export default class WeatherInput extends Component {
  constructor(location) {
    super();
    this.state = {
      location: '',
    }
  }

  submitLocation(){
    this.props.handleAutoComplete(this.state);
    this.setState({location: '' })
  }

  render() {
    return (
      <section>
        <input type = "text"
               placeholder = "Enter City, and State, or Zip"
               value = {this.state.location}
               onChange = { (event) => this.setState ( { location: event.target.value } ) }
               id = "location-enter"/>
        <input type = "submit"
               disabled = { !location}
               onClick = { this.submitLocation.bind(this) }
               id = "submit-btn"
         />
      </section>
    )
  }
}
