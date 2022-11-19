import React from 'react';

function MapPopUp(props) {
  return (
  <div className='map-data'>
    <h3>{props.name}</h3>
    <div className='cover' style={{backgroundImage:`url(${props.icon})`}}>
      <h4>{props.coordinates}</h4>
      <div className='bg' ></div>
    </div>
    <div className='info'>
      {props.map && <img className='map' src={props.map}/>}
      { props.callouts== null? <h1>No data is apparently available for {props.name}</h1> : 
        <table className='info-table'>
          <thead>
            <tr>
              <th>region Name</th>
              <th>super Region Name</th>
              <th>location X</th>
              <th>location Y</th>
            </tr>
          </thead>
          <tbody>
          {props.callouts.map((item,indx) => {
            return (
              <tr key={indx}>
                <td>{item.regionName}</td>
                <td>{item.superRegionName}</td>
                <td>{item.location.x}</td>
                <td>{item.location.y}</td>
              </tr>
            );
          })}
          </tbody>
        </table>    
      }
    </div>
  </div>
  );  
}

export default MapPopUp;

