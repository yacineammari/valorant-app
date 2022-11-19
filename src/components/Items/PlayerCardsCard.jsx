import React from 'react'

function PlayerCardsCard(props) {
  return (
    <div className='player-card'>
        <img src={props.icon} loading="lazy"></img>
        <span>{props.name}</span>
    </div>
  )
}

export default PlayerCardsCard


