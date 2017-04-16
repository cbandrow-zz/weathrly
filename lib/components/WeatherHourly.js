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
      if (hourCard.hour == 0 && hourCard.hour < 12){
        return(
          <section key = {index}>
            <h4>12:00 AM</h4>
            <p>Condition: {hourCard.condition}</p>
            <p>Temp: {hourCard.temp}</p>
          </section>
        )
      } else if (hourCard.hour < 12) {
        return(
          <section key = {index}>
            <h4>{hourCard.hour}:00</h4>
            <p>Condition: {hourCard.condition}</p>
            <p>Temp: {hourCard.temp}</p>
          </section>
        )
      } else if (hourCard.hour > 12) {
        return(
          <section key = {index}>
            <h4>{hourCard.hour}:00</h4>
            <p>Condition: {hourCard.condition}</p>
            <p>Temp: {hourCard.temp}</p>
          </section>
        )
      }
    })}
    </div>
    )
  }

export default WeatherHourly




// {if (hourCard.hour == 0){
//   return(
//     <h4> 12:00 </h4>
//   )
// } else {
//   return(
//     <h4>{hourCard.hour}:00</h4>
//   )
// }}
