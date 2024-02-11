import React from 'react'
import './FifthButton.scss'
function FifthButton({title,link}) {
  return (
    <a href={link}><button className="fifth-button">{title}</button></a>
  )
}

export default FifthButton
