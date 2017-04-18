import Weathrly from '../lib/components/Weathrly'
import TenDay from '../lib/components/TenDay'
import TenDayIndiv from '../lib/components/TenDayIndiv.js'
import cleanTenDay from '../lib/components/helper/cleanTenDay'
import React from 'react'
import { shallow, mount } from 'enzyme'
var tenDayJSON = require('../lib/components/stubs/tendaystub.json')

describe('Hourly Weather: ', () => {
 it('Should render on the page with one item', () => {
   let filteredWeather = cleanTenDay(tenDayJSON)
   let wrapper = shallow(<TenDayIndiv id = {filteredWeather[0]}
                          weekday = {filteredWeather.weekday}
                          month = {filteredWeather.month}
                          date = {filteredWeather.date}
                          high = {filteredWeather.high}
                          low = {filteredWeather.low}
                          icon = {filteredWeather.icon_url}
                          summary = {filteredWeather.summary}/>)
   let found = wrapper.find(".ten-day-item")
   expect(found.length).toEqual(1)
 })

  it('Should render specific information', () => {
     let filteredWeather = cleanTenDay(tenDayJSON)
     let wrapper = shallow(<TenDayIndiv id = {filteredWeather[0]}
                            weekday = {filteredWeather.weekday}
                            month = {filteredWeather.month}
                            date = {filteredWeather.date}
                            high = {filteredWeather.high}
                            low = {filteredWeather.low}
                            icon = {filteredWeather.icon_url}
                            summary = {filteredWeather.summary}/>)
     let found = wrapper.find("div")
     let found2 = wrapper.find("span")
     expect(found.length).toEqual(4)
     expect(found2.length).toEqual(2)
  })
})
