import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props)
  return (
  <div>
    {
      props.cities.map(
        city =>
        <Card 
          max={city.main.temp.max}
          min = {city.main.temp.min}
          name = {city.name}
          img = {city.weather[0].icon}
          onClose = {()=> alert(city.name)}
          key = {city.id}
        />)
    }
  </div>)
};