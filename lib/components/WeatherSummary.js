import React from 'react'
import Weathrly from './Weathrly.js'

const WeatherSummary = ({summary}) => {
  console.log('currently ', {summary})
  if (!summary.length) {
    return (
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }
  return(
    <section>
      <h2>Forecast for {summary[0].fulllocation}</h2>
      <section>
      <p>Temp: {summary[0].temp}</p>
      <p>Weather: {summary[0].weather}</p>
      </section>
    </section>
  )
}
export default WeatherSummary
