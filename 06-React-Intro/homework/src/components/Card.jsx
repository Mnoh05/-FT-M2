import React from 'react';


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  
  return (
  <div>
    
    <button onClick={onClose}>x</button>
    <p>Temperatura Máxima: {max}</p>
    <p>Temperatura Minima: {min}</p>
    <h2>{name}</h2>
    <p>
    <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt ="icon" />
    </p>
    
   </div>
   
  )
};
