import Weathrly from '../lib/components/Weathrly'
import WeatherHourly from '../lib/components/WeatherHourly'
import cleanHourly from '../lib/components/helper/cleanHourly'
import React from 'react'
import { shallow, mount } from 'enzyme'
var hourlyJSON = require('../lib/components/stubs/hourlystub.json')

describe('Hourly Weather: ', () => {
 it('Should render the page', () => {
   let filteredWeather = cleanHourly(hourlyJSON)
   let weatherArray = []
   weatherArray.push(filteredWeather)
   let wrapper = shallow(<WeatherHourly hourSummary={weatherArray}/>)
   let found = wrapper.find("h2")
   expect(found.length).toEqual(1)
 })

  it('Should render multiple hours', () => {
    let filteredWeather = cleanHourly(hourlyJSON)
    let weatherArray = []
    weatherArray.push(filteredWeather)
    let wrapper = shallow(<WeatherHourly hourSummary={weatherArray}/>)
    let found = wrapper.find(".hourly-detail")
    let found2 = wrapper.find(".hourly-detail").last()
    expect(found.length).toEqual(8)
  })
})
