import React from 'react';
import "../App";
import{NavLink} from'react-router-dom';
import { logDOM } from '@testing-library/react';

function NavBar() {
  return (
    <>
    <div className='header'>
      <img className='logo' src="https://media.istockphoto.com/photos/book-icon-glossy-cyan-blue-round-button-picture-id506707908?k=20&m=506707908&s=612x612&w=0&h=HGo6JpWfDIBoHr3v-qqSTts-wprv9yDBpKY6-a_xGWg=" alt='logo' />
       <h1> BOOK !T </h1>
       </div>
    <div className = "navbar"> 
    <NavLink to = "/home">Home </NavLink>
    <NavLink to = "/books"> Books  </NavLink>
      <NavLink to= "/ReadingList"> My Reading List </NavLink>
      <NavLink to = "/about"> About</NavLink>
      
       </div>
       </>
    
  )
}

export default NavBar