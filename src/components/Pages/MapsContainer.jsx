import React,{useEffect,useState} from 'react'
import MapCard from '../Items/MapCard';

export default function MapsContainer() {
  const url = "https://valorant-api.com/v1/maps";

  function parseData(obj) {
    let data = []

    if (obj.status == 200) {
      for (let elem of obj.data) {
        let map = {
          id: elem.uuid,
          name: elem.displayName,
          coordinates: elem.coordinates,
          plan: elem.listViewIcon,
          icon: elem.splash,
          callouts : elem.callouts,
          map: elem.displayIcon
        }
        data.push(map);
      }
    }
    return data
  }

  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setMaps(parseData(data))); 
  } , []);

  if (!(maps === undefined || maps.length === 0)) {
    return (
      <div className='maps-container'>
        { maps.map((map) => 
          {
            return <MapCard key={map.id} {...map} />
          }
        )}
      </div>
  ) }
}
