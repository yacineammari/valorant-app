import React, { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import WeaponsGearPopUp from '../PopUp/WeaponsGearPopUp';

function WeaponsGearCard(props) {
  const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = (e) => {
      setIsOpen((prev) => {
        return !prev;
      });
    }
  return (
    <>
    {isOpen ? <PopUp isOpen={isOpen} onClose={handleOnClick}> <WeaponsGearPopUp {...props}/> </PopUp> : null }
    <div className='WeaponsGear-card' data-type={props.type} onClick={handleOnClick}>
        <img src={props.icon} loading="lazy"></img>
        <span>{props.name}</span>
    </div>
    </>
  );
}

export default WeaponsGearCard;