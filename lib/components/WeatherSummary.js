import React from 'react'
import Weathrly from './Weathrly.js'

const WeatherSummary = ({summary}) => {
  if (!summary.length) {
    return (
      <div className = "welcome">
        Welcome to Weathrly. Pls add location
      </div>
    )
  }
  return(
    <section className = "summary-data">
      <h2>Forecast for {summary[0].fulllocation}</h2>
      <section id ="summary-img">
        <img src={summary[0].icon_url} width = "75px" />
      </section>
      <section id = "summary-content">
      <p id = "current-temp" >{summary[0].temp}</p>
      <p id = "status" >Weather is currently {summary[0].weather}</p>
      </section>
    </section>
  )
}
export default WeatherSummary
