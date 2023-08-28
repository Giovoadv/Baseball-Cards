import React from 'react';
import playerData from './playerData.js'
import { useState } from 'react';





function BaseballCard(props) {
  let [showPicture, setShowPicture] = useState(true);


  const toggleCards = ()=>{
    setShowPicture(!showPicture)
  }
  
  
  
  if(showPicture){
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img className='card-img'
        src={[props.imgUrl]}
        onClick={toggleCards}   
      />
    </div>
  );
  }else{
  let statsDisplay = Object.entries(props.stats).map(([statName,statValue])=>
    <p key={statName}>
      {statName}: {statValue}
    </p>
  )
  return(
    <div className='card' onClick={toggleCards} >
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
        {statsDisplay}
    </div>
  )
  }
}



function App() {
  let cards = playerData.map(player =>{
    return <BaseballCard
    name = {player.name} 
    team = {player.team} 
    position = {player.position} 
    stats = {player.stats} 
    imgUrl = {player.imgUrl} 
    key = {player.cardId} />;

  }) 
  
  return(
    <>
      {cards}
    </>
  )
  
}

export default App;
