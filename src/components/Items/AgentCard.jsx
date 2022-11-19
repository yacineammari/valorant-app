import React, { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import AgentPopUp from '../PopUp/AgentPopUp';

export default function AgentCard(props) {
  let color = '#'+props.colorList[0];

  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = (e) => {
    setIsOpen((prev) => {
      return !prev;
    });
  }

  return (
    <>
    {isOpen ? <PopUp isOpen={isOpen} onClose={handleOnClick}> <AgentPopUp {...props}/> </PopUp> : null }
    <div 
      className='agent-card' 
      style={{'--bgcolor': color}}
      onClick={handleOnClick}
    >
      <div className='agent-image-container'>
        <img className='agent-background' src={props.background} loading="lazy"></img>
        <img className='agent-portrait' src={props.portrait} loading="lazy"></img>
        <div className='abilities'>
          {props.abilities.map(abilitie => {
            return abilitie.icon!== null ? <img className='abilitie' key={abilitie.name} src={abilitie.icon} title={abilitie.name}></img> : null
            })}
        </div>
      </div>
      <span>{props.name}</span>
    </div>
    </>
  );
}





