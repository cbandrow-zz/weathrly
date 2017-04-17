import Weathrly from '../lib/components/Weathrly'
import React from 'react'
import { shallow, mount } from 'enzyme'

describe('Weathrly Application: ', () => {
  it(' should test the state of App. ', () => {

    var wrapper = shallow( < Weathrly/> )

    console.log(wrapper.debug())
    //find input, add item, find button, click button, check state
    //grabing input, simulating change by changing the event targe value

  })
})
