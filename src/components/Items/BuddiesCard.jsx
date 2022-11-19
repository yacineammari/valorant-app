import React from 'react';

function BuddiesCard(props) {
  return (
    <div className='buddies-card'>
        <img src={props.icon} loading="lazy"></img>
        <span>{props.name}</span>
    </div>
  )
}

export default BuddiesCard;