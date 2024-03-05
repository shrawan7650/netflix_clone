import React from 'react'
import "./Home.css";


export const Card = ({ img }) => {

  return (
    <img className="card" src={img} alt="cover" />
  )
}

export default Card;