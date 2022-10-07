import React,{useEffect,useState} from 'react';
import "../App";
import axios from "axios"
import { API_URL} from '../API';
import {useAppContext} from "./context/appContext";
import { useNavigate } from 'react-router-dom';
const Books=()=> {
  const [books,setBooks] =useState([]);

  const{ReadingList,addToReadingList,removeFromReadingList}=useAppContext();

 const navigate=useNavigate();

 const ReadingListChecker=(id)=> {
  const boolean=ReadingList.some((book)=>book.id===id);
  return boolean;
 }

  useEffect(()=>{
    axios
    .get(API_URL)
    .then((response)=>{
      console.log(response.data);
      setBooks(response.data);
    })
    .catch((error)=>console.log(error));
    
   },[]);

 
   

 
  return (
    <div className='books'>
    
      {books.map((book)=>(
        <div key ={book.id}className="book-list">
          <div><h2>{book.title}</h2></div>
          <div>
            <img src ={book.image_url} 
            alt ="#"
            onClick={()=>navigate(`/books/${book.id}`)}
              />
              </div>
         
          <div>
            {ReadingListChecker(book.id) ? (
             <button onClick={()=>removeFromReadingList(book.id)}>
              Remove From My Reading List
              </button>
            ):( 
              <button onClick={()=>addToReadingList(book)}>
          Add To My Reading List
          </button> 
          )}
            
            </div>
    </div>
  ))}
  </div>
  )}

export default Books