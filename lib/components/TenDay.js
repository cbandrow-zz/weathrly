import React from 'react'
import Weathrly from './Weathrly.js'

const TenDay = ({allTheWeather}) => {
  if(!allTheWeather.length){
    return(
      null
    )
  }

  return(
    <section>
      <h2> Ten Day Forecast</h2>
      {allTheWeather[0].map((weatherCard, index)=>{
        return(
          <section key = {index} className = "ten-day-item">
            <h3> {weatherCard.weekday}, {weatherCard.month} {weatherCard.date}  </h3>
            <img src = {weatherCard.icon_url} width = "40px" className = "ten-img"/>
            <p className = "ten-text"> <span id ="high">{weatherCard.high}ºf</span>,  <span id = "low">{weatherCard.low}ºf</span></p>
            <p> {weatherCard.summary}</p>
          </section>
        )
      })}
    </section>
  )
}
export default TenDay
