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
