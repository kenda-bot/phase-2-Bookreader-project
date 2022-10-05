import React,{useEffect,useState} from 'react'
import "../App";
import{API_url} from "../API";

const Books=()=> {
  const [books,setBooks] =useState([]);
  
  useEffect(()=>{
    fetch("https://example-data.draftbit.com/books?_limit=10")
    .then((response)=>response.json())
    .then((data)=>setBooks(data))
   },[]);


  return (
    <div className='books'>
      {books.map((book)=>(
        <div key ={book.id}className="book-list">
          <div><h2>{book.title}</h2></div>
          <div><img src ={book.image_url} alt ="#"/></div>
          <div>
            <button>Add to My Reading List</button>
            </div>
    </div>
  ))}
  </div>
  )}

export default Books