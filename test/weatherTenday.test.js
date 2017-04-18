import Weathrly from '../lib/components/Weathrly'
import TenDay from '../lib/components/TenDay'
import cleanTenDay from '../lib/components/helper/cleanTenDay'
import React from 'react'
import { shallow, mount } from 'enzyme'
var tenDayJSON = require('../lib/components/stubs/tendaystub.json')

describe('Hourly Weather: ', () => {
 it('Should render the page', () => {
   let filteredWeather = cleanTenDay(tenDayJSON)
   let weatherArray = []
   weatherArray.push(filteredWeather)
   let wrapper = shallow(<TenDay allTheWeather={weatherArray}/>)
   let found = wrapper.find("h2")
   expect(found.length).toEqual(1)
 })

  it('Should render multiple days', () => {
    let filteredWeather = cleanTenDay(tenDayJSON)
    let weatherArray = []
    weatherArray.push(filteredWeather)
    let wrapper = shallow(<TenDay allTheWeather={weatherArray}/>)
    let found = wrapper.find(".weathercard")
    expect(found.length).toEqual(10)
  })
})
