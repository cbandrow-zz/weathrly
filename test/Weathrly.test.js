import Weathrly from '../lib/components/Weathrly'
import TenDay from '../lib/components/TenDay'
import WeatherHourly from '../lib/components/WeatherHourly'
import WeatherInput from '../lib/components/WeatherInput'
import WeatherSummary from '../lib/components/WeatherSummary'
import Welcome from '../lib/components/Welcome'
import cleanTenDay from '../lib/components/helper/cleanTenDay'
import cleanHourly from '../lib/components/helper/cleanHourly'
import cleanCurrent from '../lib/components/helper/cleanCurrent'
import React from 'react'
import { shallow, mount } from 'enzyme'
var tenDayJSON = require('../lib/components/stubs/tendaystub.json')
var hourlyJSON = require('../lib/components/stubs/hourlystub.json')
var summaryJSON = require('../lib/components/stubs/summarystub.json')

describe('Weathrly: ', () => {
  it('cleanCurrent should scrub JSON file and return a shortened version', () => {
    // console.log(Object.keys(summaryJSON.current_observation).length)
    // console.log(Object.keys(cleanCurrent(summaryJSON)).length)
    expect(Object.keys(summaryJSON.current_observation).length).toEqual(56)

    expect(Object.keys(cleanCurrent(summaryJSON)).length).toEqual(5)
  })

  it('cleanHourly should scrub JSON file and return a shortened version', () => {
    expect(Object.keys(hourlyJSON.hourly_forecast[0]).length).toEqual(20)

    expect(cleanHourly(hourlyJSON).length).toEqual(8)
  })

  it('cleanTenDay should scrub JSON file and return a shortened version', () => {
    expect(Object.keys(tenDayJSON.forecast.simpleforecast.forecastday[0]).length).toEqual(20)

    expect(cleanTenDay(tenDayJSON).length).toEqual(10)
  })

  it('WeatherSummary component should organize and return appropriate info', () => {
    let currentArray = cleanCurrent(summaryJSON)
    const wrapper = shallow(<WeatherSummary summary = {currentArray} />)
    console.log(currentArray)
    expect(wrapper.find('section').hasClass('summary-context')).to.equal(true);

  })

  it.skip('WeatherHourly component should organize and return appropriate info', () => {
    let currentArray = []
    let cleaned = cleanHourly(hourlyJSON)
    currentArray.push(cleaned)
    const wrapper = shallow(<WeatherHourly hourSummary = {currentArray} />)


  })

  it.skip('TenDay component should organize and return appropriate info', () => {
    let currentArray = []
    let cleaned = cleanTenDay(tenDayJSON)
    currentArray.push(cleaned)
    const wrapper = shallow(<TenDay allTheWeather = {currentArray} />)
    expect(wrapper.containsAnyMatchingElements([
      <p>Condition: Partly Cloudy</p>,
      <p>Condition: Mostly Cloudy and snowcones</p>,
      <p>Condition: Overcast</p>
    ]))
  })
})
