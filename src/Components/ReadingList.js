import React from 'react'
import "../App";
import {useAppContext} from "./context/appContext";



function ReadingList() {
  const{ReadingList,addToReadingList,removeFromReadingList}=useAppContext();

 console.log("ReadingList are",ReadingList)

 const ReadingListChecker=(id)=> {
  const boolean=ReadingList.some((book)=>book.id===id);
  return boolean;
 };

 return (
    <div className = "reading">
      {ReadingList.length > 0 ? (
        ReadingList.map((book)=>(
        <div key ={book.id}className="book-list">
          <div><h2>{book.title}</h2></div>
          <div><img src ={book.image_url} alt ="#"/></div>
         
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
 ))
 ):(
 <h1 className='text'>You Have no books in your list.Kindly choose a book form the collection to add it here</h1>  
 ) } 
 </div>     
 )}          
      
    

export default ReadingList