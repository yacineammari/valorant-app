import React from 'react';

function AgentPopUp(props) {
  return (        
    <div className='info-container'>
      <div className='agent-info'>
        <h4>{props.name}</h4>
        <img src={props.portrait} className='agent-pt' loading="lazy"></img>
        <p>{props.description}</p>
      </div>
      <div className='agent-abilites'>
        {props.abilities.map(abilitie => {
          return (
            <div key={abilitie.name} className='abilite'>
              {abilitie.icon && <img src={abilitie.icon}></img>}
              <div >
                <h5>{abilitie.name}</h5>
                <p>{abilitie.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div> 
  );  
}

export default AgentPopUp;

