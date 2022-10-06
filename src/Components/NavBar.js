import React from 'react';
import "../App";
import{Link} from'react-router-dom';

function NavBar() {
  return (
    <div className = "navbar">
    <div>
       <h1> My Reader </h1>
       </div>
    <div> 
      <Link to= "/ReadingList">
      <h3>My Reading List</h3>
      </Link>
       </div>
    </div>
    
  )
}

export default NavBar