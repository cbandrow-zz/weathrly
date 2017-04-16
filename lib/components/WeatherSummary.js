import React from 'react'
import Weathrly from './Weathrly.js'

const WeatherSummary = ({summary}) => {
  if (!summary.length) {
    return (
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }
  console.log(summary[0].icon, summary[0].icon_url)
  return(
    <section>
      <h2>Forecast for {summary[0].fulllocation}</h2>
      <section id ="summary-img">
        <img src={summary[0].icon_url} width = "75px" />
      </section>
      <section id = "summary-content">
      <p id = "current-temp" >Temp: {summary[0].temp}</p>
      <p>Weather is currently {summary[0].weather}</p>
      </section>
    </section>
  )
}
export default WeatherSummary
