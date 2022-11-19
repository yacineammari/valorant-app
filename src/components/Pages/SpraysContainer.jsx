import { useState,useEffect } from "react";
import React from 'react';
import SpraysCards from '../Items/SpraysCards';


export default function SpraysContainer() {

  const url = "https://valorant-api.com/v1/sprays";
  
  function parseData(obj) {
    let data = []

    if (obj.status == 200) {
      for (let elem of obj.data) {
        let spray = {
          id: elem.uuid,
          name: elem.displayName,
        }
        if (elem.animationPng == null) {
          if (elem.fullTransparentIcon == null) {
            spray.icon = elem.displayIcon;
          } else {
            spray.icon = elem.fullTransparentIcon;
          }
        } else {
          spray.icon = elem.animationPng;

        }
        data.push(spray);
      }
    }
    return data
  }

  const [sprays, setSprays] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setSprays(parseData(data))); 
  }, []);

  if (!(sprays === undefined || sprays.length === 0)) {
    return (
      <div className='sprays-container'>
        { sprays.map((sprays) => 
          {
            return <SpraysCards key={sprays.id} {...sprays} />
          }
        )}
      </div>
  ) }
}
