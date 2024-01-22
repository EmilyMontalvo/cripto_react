import React from 'react'
import '../src/styles/Spinner.css'

const Spinner = () => {

    // Lo obtuve de  https://tobiasahlin.com/spinkit/
  return (
    <div className="sk-chase">
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
  </div>
  )
}

export default Spinner
