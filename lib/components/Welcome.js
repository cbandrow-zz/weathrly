import React from 'react'
import Weathrly from './Weathrly.js'

const Welcome = ({summary}) => {
  if (!summary.length) {
    return (
      <div>
        Welcome to Weathrly
      </div>
    )
  }
  return(
    null
  )
}
export default Welcome
