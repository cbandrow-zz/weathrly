import React from 'react'
import Weathrly from './Weathrly.js'

const CurrentWeather = ({allTheWeather}) => {
  console.log('currently ' + {allTheWeather})
  return(
    <section>
      <p>Forecast for {allTheWeather.fulllocation}</p>
          <section>
            <p>Temp: {allTheWeather.temp}</p>
            <p>Weather: {allTheWeather.weather}</p>
          </section>
        )
    </section>
}
export default CurrentWeather
