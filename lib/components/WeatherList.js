import React from 'react'

const WeatherList = ({allTheWeather}) => {
  if(!allTheWeather.length){
    return(
      <div>
        Welcome to Weathrly. Pls add location
      </div>
    )
  }

  return(
    <section>
      {allTheWeather.map((weatherCard, index)=>{
        return(
          <section key = {index}>
            <p>Location: {weatherCard.location}</p>
            <p>High: {weatherCard.temp.high}</p>
            <p>Low: {weatherCard.temp.low}</p>
          </section>
        )
      })}
    </section>
  )
}
export default WeatherList
