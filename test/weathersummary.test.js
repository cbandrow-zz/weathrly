import Weathrly from '../lib/components/Weathrly'
import WeatherSummary from '../lib/components/WeatherSummary'
import cleanCurrent from '../lib/components/helper/cleanCurrent'
import cleanTenDay from '../lib/components/helper/cleanTenDay'
import React from 'react'
import { shallow, mount } from 'enzyme'

var tenDayJSON = require('../lib/components/stubs/tendaystub.json')
var summaryJSON = require('../lib/components/stubs/summarystub.json')

describe('Weather Summary: ', () => {
 it('Should display a general Current Conditions page if no item is loaded', () => {

   let filteredWeather = cleanCurrent(summaryJSON)
   let weatherArray = []
   let tenWeatherArray = []
   weatherArray.push(filteredWeather)
   let tenDayFiltered = cleanTenDay(tenDayJSON)
   tenWeatherArray.push(tenDayFiltered)
   let wrapper = shallow(<WeatherSummary summary={filteredWeather}
                                         textSummary ={tenWeatherArray} />)
   let found = wrapper.find("div.welcome")
   expect(found.length).toEqual(1)
 })

  it('Should render todays current conditions', () => {

    let filteredWeather = cleanCurrent(summaryJSON)
    let weatherArray = []
    let tenWeatherArray = []
    weatherArray.push(filteredWeather)

    let tenDayFiltered = cleanTenDay(tenDayJSON)
    tenWeatherArray.push(tenDayFiltered)
    let wrapper = shallow(<WeatherSummary summary={weatherArray}
                                          textSummary = {tenWeatherArray}/>)
    let found = wrapper.find(".summary-data")


    expect(found.length).toEqual(1)
  })
})
