import React from 'react';
//import { css } from "glamor";


const Card = ({card}) => {
  return (
    <li>
      <h1>{card.title}</h1>
      <h4>Aviation Explorer</h4>
      <img src={card.img.mainImg}  alt=''/>
      <div className="inline-thumbs">
        <img src={card.img.thumb1} alt=''/>
        <img src={card.img.thumb2} alt=''/>
        <img src={card.img.thumb3} alt=''/>
      </div>
      <p>pins: {card.pins}</p>
      <button>Follow</button>
    </li>
  )
}
export default Card;
