import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='container'>
      <img className= 'imagen' src= {Logo} alt= "icon"/>    
      
        <p> Henry-Weather</p>
        <div className='buscador'>
        <SearchBar onSearch={onSearch} />
        </div>
       

    </div>
  );
};

export default Nav;
