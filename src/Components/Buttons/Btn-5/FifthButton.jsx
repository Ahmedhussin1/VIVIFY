import React from 'react'
import './FifthButton.scss'
import { Link } from 'react-router-dom'
function FifthButton({title,link}) {
  return (
    <Link to={link}><button className="fifth-button">{title}</button></Link>
  )
}

export default FifthButton
