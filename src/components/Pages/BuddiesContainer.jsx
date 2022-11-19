import React from 'react';
import { useState,useEffect } from "react";
import BuddiesCard from '../Items/BuddiesCard';

export default function BuddiesContainer() {

  const url = "https://valorant-api.com/v1/buddies";

  function parseData(obj) {
    let data = []

    if (obj.status == 200) {
      for (let elem of obj.data) {
        let card = {
          id: elem.uuid,
          name: elem.displayName,
          icon: elem.displayIcon,
        }
        data.push(card);
      }
    }
    return data
  }

  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setBuddies(parseData(data))); 
  } , []);

  if (!(buddies === undefined || buddies.length === 0)) {
    return (
      <div className='buddies-container'>
        { buddies.map((buddie) => 
          {
            return <BuddiesCard key={buddie.id} {...buddie} />
          }
        )}
      </div>
  ) }
}
