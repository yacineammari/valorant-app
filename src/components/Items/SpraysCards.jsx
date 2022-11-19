import React from 'react';

function SpraysCards(props) {
  return (
    <div className='sprays-card'>
        <img src={props.icon} loading="lazy"></img>
        <span>{props.name}</span>
    </div>
  )
}

export default SpraysCards;