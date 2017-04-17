import React from 'react'
import Weathrly from './Weathrly.js'

const TenDayIndiv = ({ id, weekday, month, date, high, low, icon, summary }) =>{
  return (
    <section key = {id} className = "ten-day-item">
      <div className = "ten-date">
        <h3> {weekday}, {month} {date}  </h3>
      </div>
      <div className = "ten-text">
        <p> <span id ="high">{high}ºf</span>,  <span id = "low">{low}ºf</span></p>
      </div>
      <div className = "ten-img-cont">
        <img src = {icon} width = "40px" className = "ten-img"/>
      </div>
      <div className = "ten-summary">
        <p> {summary}</p>
      </div>
    </section>
  )
}

export default TenDayIndiv
