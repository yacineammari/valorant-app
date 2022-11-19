import React from 'react';
import { useState,useEffect } from "react";
import WeaponsGearCard from '../Items/WeaponsGearCard';

export default function WeaponsGearContainer() {
  const url_gears = "https://valorant-api.com/v1/gear";
  const url_weapons = "https://valorant-api.com/v1/weapons";

  function parseData(obj) {
    let data = []

    for (let item of obj) {
      if (item.status == 200) {
        for (let elem of item.data) {
          let card = {}
          if (elem.hasOwnProperty('weaponStats')) {
            card = {              
              id: elem.uuid,
              name: elem.displayName,
              icon: elem.displayIcon,
              weaponStats: {
                fireRate: elem.weaponStats?.fireRate || null,
                magazineSize: elem.weaponStats?.magazineSize || null,
                equipTimeSeconds: elem.weaponStats?.equipTimeSeconds || null,
                reloadTimeSeconds: elem.weaponStats?.reloadTimeSeconds || null,
                wallPenetration: elem.weaponStats?.wallPenetration || null,
                category: elem.shopData?.category || null,
                cost: elem.shopData?.cost || null,
                zoomMultiplier: elem.weaponStats?.adsStats?.zoomMultiplier || null,
              },
              damageRanges:
                elem.weaponStats?.damageRanges.map((rang) => {
                  return {
                    range: `[${rang?.rangeStartMeters || 0} - ${rang?.rangeEndMeters || null}]`,
                    headDamage: rang?.headDamage || null,
                    bodyDamage: rang?.bodyDamage || null,
                    legDamage: rang?.legDamage || null
                  }
                }),
              type: 'Weapon'
            }
          } else {
            card = {
              id: elem.uuid,
              name: elem.displayName,
              icon: elem.displayIcon,
              description: elem.description,
              cost: elem.shopData.cost,
              category: elem.shopData.category,
              type: 'Gear'
            }
          }          
          data.push(card);
        }
      }
    }
    return data
  }

  const [weaponsgear, setWeaponsGear] = useState([]);

  useEffect(() => {

    Promise.all([
      fetch(url_gears).then(gears => gears.json()),
      fetch(url_weapons).then(weapons => weapons.json())
      ])
      .then( data => {
        setWeaponsGear(parseData(data));
      })
      .catch((err) => {
          console.log(err);
      });

  } , []);

  if (!(weaponsgear === undefined || weaponsgear.length === 0)) {
    return (
      <div className='WeaponsGear-container'>
        <h1>Gear</h1>
        <div className='Gear-container'>
          { weaponsgear.filter((item)=> item.type == 'Gear').map((item) => 
            {
              return <WeaponsGearCard key={item.id} {...item} />
            }
            )}
        </div>
        <h1>Weapons</h1>
        <div className='Weapons-container'>
          { weaponsgear.filter((item)=> item.type == 'Weapon').map((item) => 
            {
              return <WeaponsGearCard key={item.id} {...item} />
            }
          )}
        </div>
      </div>
  ) }
}

