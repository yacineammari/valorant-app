import React, { useEffect,useState } from 'react'
import AgentCard from '../Items/AgentCard';
export default function AgentsContainer() {
  
  const url = "https://valorant-api.com/v1/agents";

  function parseData(obj) {
    let data = []
    if (obj.status == 200) {

      for (let item of obj.data) {
        if (item.isPlayableCharacter) {
          let agent = {
            id: item.uuid,
            name : item.displayName,
            description : item.description,
            portrait : item.fullPortrait,
            background : item.background,
            colorList : item.backgroundGradientColors,
            role: {
              name: item.role.displayName,
              description: item.role.description,
              icon: item.role.displayIcon,
            },
            abilities: item.abilities.map(abilitie => {
              return {
                name: abilitie.displayName,
                description: abilitie.description,
                icon: abilitie.displayIcon,
              }
            })
          };     
          data.push(agent);
        }
      }    
    }
    return data;
  }

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAgents(parseData(data)));
  } , []);


  if (!(agents === undefined || agents.length === 0)) {
    return (
      <div className='agents-container'>
        { agents.map((agent) => 
          {
            return <AgentCard key={agent.id} {...agent}/>
          }
        )}
      </div>
  ) }
  

  
}
