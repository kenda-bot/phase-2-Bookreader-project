import React from 'react';
import "../App";
import{NavLink} from'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='header'>
       <h1> My Reader </h1>
       </div>
    <div className = "navbar"> 
    <NavLink to = "/">Home </NavLink>
    <NavLink to = "/books"> Books  </NavLink>
      <NavLink to= "/ReadingList"> My Reading List </NavLink>
      <NavLink to = "/about"> About</NavLink>
      
       </div>
       </>
    
  )
}

export default NavBar