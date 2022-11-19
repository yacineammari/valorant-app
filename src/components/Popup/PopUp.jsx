import React from 'react';
import ReactDom from 'react-dom';
import CloseIcon from '../../assets/Images/close.svg'

function PopUp(props) {
  if (props.isOpen === false) return null;
  return ReactDom.createPortal (
    <>
      <div onClick={props.onClose} className='overlay-styles' />
        <div className='modal-styles'>
            <img id='close' src={CloseIcon} onClick={props.onClose} />
            {props.children}
        </div>
    </> ,
    document.getElementById('portal')  
  );
}

export default PopUp;

