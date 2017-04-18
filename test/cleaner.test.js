import cleanTenDay from '../lib/components/helper/cleanTenDay'
import cleanHourly from '../lib/components/helper/cleanHourly'
import cleanCurrent from '../lib/components/helper/cleanCurrent'
import React from 'react'
import { shallow, mount } from 'enzyme'
var tenDayJSON = require('../lib/components/stubs/tendaystub.json')
var hourlyJSON = require('../lib/components/stubs/hourlystub.json')
var summaryJSON = require('../lib/components/stubs/summarystub.json')


describe("Cleaner Tests", () =>{

  it('cleanCurrent should scrub JSON file and return a shortened version', () => {
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

})
