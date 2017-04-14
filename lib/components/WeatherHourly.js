// <p>Summary: {props[0].forecast.txt_forecast.forecastday[0].fcttext}</p>
import React from 'react'
import Weathrly from './Weathrly'

const WeatherHourly = ({hourSummary}) => {
  console.log('hours', hourSummary)
  if (!hourSummary.length) {
    return (
      null
    )
  }

  return (
    <div>
    {hourSummary[0].map((hourCard, index)=>{
      return(
        <section key = {index}>
          <p>Condition: {hourCard.condition}</p>
          <p>Temp: {hourCard.temp}</p>
        </section>
      )
    })}
    </div>
    )
  }

export default WeatherHourly
