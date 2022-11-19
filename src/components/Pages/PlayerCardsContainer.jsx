import { useState,useEffect } from "react";
import React from 'react';
import PlayerCardsCard from '../Items/PlayerCardsCard';

export default function PlayerCardsContainer() {

  const url = "https://valorant-api.com/v1/playercards";
  
  function parseData(obj) {
    let data = []

    if (obj.status == 200) {
      for (let elem of obj.data) {
        let card = {
          id: elem.uuid,
          name: elem.displayName,
          icon: elem.largeArt,
        }
        data.push(card);
      }
    }
    return data
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setCards(parseData(data))); 
  }, []);

  if (!(cards === undefined || cards.length === 0)) {
    return (
      <div className='player-cards-container'>
        { cards.map((card) => 
          {
            return <PlayerCardsCard key={card.id} {...card} />
          }
        )}
      </div>
  ) }
}
