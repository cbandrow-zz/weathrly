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
 it('should have states to start', ()=>{
   let wrapper = shallow( <Weathrly/> )
   expect(wrapper.state('apiLocation')).toEqual('')
   expect(wrapper.state('tenDayWeather')).toEqual([])
   expect(wrapper.state('currentWeather')).toEqual([])
   expect(wrapper.state('tenDayWeather')).toEqual([])
   expect(wrapper.state('hourlyWeather')).toEqual([])
   expect(wrapper.state('weather')).toEqual([])
   expect(wrapper.state('location')).toEqual('')
 })

 it('should change states after events are run', () =>{
    let wrapper = shallow( <Weathrly/> )
    expect(wrapper.state('location')).toEqual('')
    wrapper.setState({location : "Denver, CO"})
    expect(wrapper.state('location')).toEqual('Denver, CO')
 })

 it('WeatherSummary component accepts and contains information passed in', () => {
   let currentArray = cleanCurrent(summaryJSON)
   const wrapper = shallow(<WeatherSummary summary = {currentArray} />)
   expect(wrapper.unrendered.props.summary).toEqual(
     { temp: '63.9 F (17.7 C)',
       weather: 'Partly Cloudy',
       icon: 'partlycloudy',
       icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
       fulllocation: 'Denver, CO' })
  })

  it('WeatherHourly component accepts and contains information passed in', () => {
    let currentArray = cleanHourly(hourlyJSON)
    const wrapper = shallow(<WeatherSummary summary = {currentArray[0]} />)
    expect(wrapper.unrendered.props.summary).toEqual(
      { hour: '11',
        condition: 'Partly Cloudy',
        temp: '62',
        icon: 'partlycloudy',
        icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
      })
   })

   it('TenDay component accepts and contains information passed in', () => {
     let currentArray = cleanTenDay(tenDayJSON)
     const wrapper = shallow(<WeatherSummary summary = {currentArray[0]} />)
     expect(wrapper.unrendered.props.summary).toEqual(
       {high: '76',
        low: '48',
        weekday: 'Thursday',
        date: 13,
        month: 'April',
        summary: 'Plenty of sunshine. High 76F. Winds SSE at 15 to 25 mph.',
        icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        icon: 'clear'
       })
    })

    
})
