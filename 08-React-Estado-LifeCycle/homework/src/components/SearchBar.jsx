import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(' ');

  function handleChange(e){
    setCity(estado => e.target.value)
    console.log(city);
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
