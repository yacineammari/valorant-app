import React from 'react'

function WeaponsGearPopUp(props) {  
  if (props.type == 'Gear') {
    return (
      <div className='gear-data'>
        <img src={props.icon}/>
        <div className='gear-data-text'>
        <span>Name: <strong>{props.name}</strong></span>
        <span>Category: <strong>{props.category}</strong></span>
        <span>Description: <strong>{props.description}</strong></span>
        <span>Cost: <strong>{props.cost}</strong></span>
        </div>
      </div>      
    );
  } else { 
    return (
      <div className='weapons-data'>
        <span>Name: <strong>{props.name}</strong></span>
        <img src={props.icon}/>
        <div className='weapons-data-text'>
          <div className='weaponStats'>
            {Object.keys(props.weaponStats).map((key) => {
              return (props.weaponStats[key] && <div className='weaponStat' key={key}>
                <h4>{key}</h4>
                <span>{props.weaponStats[key].toString().replace('EWallPenetrationDisplayType::','')}</span>
              </div>);
            })}
          </div>
          {props.damageRanges && <table className='damageranges-info-table'>
          <thead>
            <tr>
              <th>Range</th>
              <th>Head Damage</th>
              <th>Body Damage</th>
              <th>Leg Damage</th>              
            </tr>
          </thead>
          <tbody>
          {props.damageRanges?.map((item,indx) => {
            return (
              <tr key={indx}>
                <td>{item.range}</td>
                <td>{item.headDamage}</td>
                <td>{item.bodyDamage}</td>
                <td>{item.legDamage}</td>
              </tr>
            );
          })}
          </tbody>
        </table>}
        </div>
      </div> 
      
      );
  }
}

export default WeaponsGearPopUp