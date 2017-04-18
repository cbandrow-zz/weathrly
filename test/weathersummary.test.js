import Weathrly from '../lib/components/Weathrly'
import WeatherSummary from '../lib/components/WeatherSummary'
import cleanCurrent from '../lib/components/helper/cleanCurrent'
import React from 'react'
import { shallow, mount } from 'enzyme'
var summaryJSON = require('../lib/components/stubs/summarystub.json')

describe('Weather Summary: ', () => {
 it('Should display a general Current Conditions page if no item is loaded', () => {
   let filteredWeather = cleanCurrent(summaryJSON)
   let wrapper = shallow(<WeatherSummary summary={filteredWeather}/>)
   let found = wrapper.find("div.welcome")
   expect(found.length).toEqual(1)
 })

  it('Should render todays current conditions', () => {
    let filteredWeather = cleanCurrent(summaryJSON)
    let weatherArray = []
    weatherArray.push(filteredWeather)
    let wrapper = shallow(<WeatherSummary summary={weatherArray}/>)
    let found = wrapper.find(".summary-data")
    expect(found.length).toEqual(1)
  })
})
