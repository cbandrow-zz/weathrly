import React from 'react'
import Weathrly from './Weathrly.js'
import TenDayIndiv from './TenDayIndiv.js'

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
          <section key = {index}>
            <TenDayIndiv id = {index}
                       weekday = {weatherCard.weekday}
                       month = {weatherCard.month}
                       date = {weatherCard.date}
                       high = {weatherCard.high}
                       low = {weatherCard.low}
                       icon = {weatherCard.icon_url}
                       summary = {weatherCard.summary}/>
          </section>
        )
      })}
    </section>
  )
}
export default TenDay
