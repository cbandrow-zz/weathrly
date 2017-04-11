import React, { Component } from 'react'

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      city: '',
      currentCondition: '',
      currentTemp: 0,
      expectedHigh: 0,
      expectedLow: 0,
      weatherSummary: '',
      imageURL: '',
      sevenHourForecast: [],
      tenDayForecast: [],
      twentyFourHourForecast: []
    }
  }
}
