import React from 'react'
import Weathrly from './Weathrly.js'

const TenDay = ({allTheWeather, weatherLocation}) => {
  console.log("ALL THE WEATHER ", allTheWeather)
  console.log("WEATHERLOCATION ", weatherLocation)
  if(!allTheWeather.length){
    return(
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }
  //Put this on line 23
  // <TenDayIndiv weatherProp = {weatherCard}
  //   weatherIndex = {index}/>

  return(
    <section>
      <p>Forecast for {weatherLocation}</p>
      {allTheWeather[0].forecast.simpleforecast.forecastday.map((weatherCard, index)=>{
        return(
          <section key = {index}>
            <p>High: {weatherCard.high.fahrenheit}</p>
            <p>Low: {weatherCard.low.fahrenheit}</p>
          </section>
        )
      })}
    </section>
  )
}
export default WeatherList
