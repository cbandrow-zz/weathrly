import React from 'react'
import Weathrly from './Weathrly.js'

const WeatherSummary = ({summary, textSummary}) => {
  if (!summary.length) {
    return (
      <div className = "welcome">
        Welcome to Weathrly. Please add your location.
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
      <section id = "weather-summary">
        <p> Today: {textSummary[0][0].summary}</p>
        <p> Tonight: {textSummary[0][1].summary}</p>
      </section>
    </section>
  )
}
export default WeatherSummary
