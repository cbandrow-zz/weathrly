import React from 'react'
import Weathrly from './Weathrly.js'

const TenDay = ({allTheWeather, weatherLocation}) => {
  if(!allTheWeather.length){
    return(
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }

  return(
    <section>
      <p>Forecast for {weatherLocation}</p>
      {allTheWeather[0].map((weatherCard, index)=>{
        return(
          <section key = {index}>
            <p>High: {weatherCard.high}</p>
            <p>Low: {weatherCard.low}</p>
          </section>
        )
      })}
    </section>
  )
}
export default TenDay
