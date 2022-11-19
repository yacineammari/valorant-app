import React, { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import MapPopUp from '../PopUp/MapPopUp';

function MapCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = (e) => {
      setIsOpen((prev) => {
        return !prev;
      });
    }

    return (
    <>
      {isOpen ? <PopUp isOpen={isOpen} onClose={handleOnClick}> <MapPopUp {...props}/> </PopUp> : null }
      <div className='map-card' onClick={handleOnClick}>
          <img src={props.icon} loading="lazy"></img>
          <span>{props.name}</span>
      </div>
    </>
    
    );
}

export default MapCard;