import WeatherInput from '../lib/components/WeatherInput'
import Weathrly from '../lib/components/Weathrly'
import React from 'react'
import { shallow, mount } from 'enzyme'

describe("Weather Input Tests", () =>{

  it('should input text, and expect its state to change', () =>{
    var wrapper = shallow( <WeatherInput/> )
    var inputLocation = wrapper.find('input[type="text"]')
    inputLocation.simulate('change', {target: { value: "Denver" } } )
    expect(wrapper.state('location')).toEqual("Denver")
  })

  it('should simulate a button press', () =>{
    var mockFn = jest.fn()

    var wrapper = shallow( <WeatherInput handleAutoComplete = {mockFn}/>)
    var inputLocation = wrapper.find('input[type="text"]')
    var submitBtn = wrapper.find('input[type="submit"]')

    inputLocation.simulate('change', {target: { value: "Denver" } } )
    expect(wrapper.state('location')).toEqual("Denver")

    submitBtn.simulate("click")
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('reset the input state upon a button press.', () =>{
    var mockFn = jest.fn()

    var wrapper = shallow( <WeatherInput handleAutoComplete = {mockFn}/>)
    var inputLocation = wrapper.find('input[type="text"]')
    var submitBtn = wrapper.find('input[type="submit"]')

    inputLocation.simulate('change', {target: { value: "Denver" } } )
    expect(wrapper.state('location')).toEqual("Denver")

    submitBtn.simulate("click")
    expect(wrapper.state('location')).toEqual("")
  })
})
