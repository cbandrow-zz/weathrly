import React from 'react'
import WeatherSummary from './Weatherly.js'

const WeatherList = ({allTheWeather}) => {
  console.log(allTheWeather)
  if(!allTheWeather.length){
    return(
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }

  return(
    <section>
      {allTheWeather[0].forecast.simpleforecast.forecastday.map((weatherCard, index)=>{
        return(
          <section key = {index}>
            <p>Location: {weatherCard.location}</p>
            <p>High: {weatherCard.high.fahrenheit}</p>
            <p>Low: {weatherCard.low.fahrenheit}</p>
          </section>
        )
      })}
    </section>
  )
}
export default WeatherList
