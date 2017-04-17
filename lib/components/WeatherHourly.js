import React from 'react'
import Weathrly from './Weathrly'

const WeatherHourly = ({hourSummary}) => {
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
          <section key = {index} className = "hourly-detail">
            <h4>12:00 AM</h4>
            <img className = "hourly-img" src ={hourCard.icon_url} width ="75px"/>
            <p>{hourCard.condition}</p>
            <p className = "hour-temp">{hourCard.temp} ºf</p>
          </section>
        )
      } else if (hourCard.hour < 12) {
        return(
          <section key = {index} className = "hourly-detail">
            <h4>{hourCard.hour}:00</h4>
            <img className = "hourly-img" src ={hourCard.icon_url} width ="75px"/>
            <p>{hourCard.condition}</p>
            <p className = "hour-temp">{hourCard.temp} ºf</p>
          </section>
        )
      } else if (hourCard.hour >= 12) {
        return(
          <section key = {index} className = "hourly-detail">
            <h4>{hourCard.hour}:00</h4>
            <img className = "hourly-img" src ={hourCard.icon_url} width ="75px"/>
            <p>{hourCard.condition}</p>
            <p className = "hour-temp">{hourCard.temp} ºf</p>
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
