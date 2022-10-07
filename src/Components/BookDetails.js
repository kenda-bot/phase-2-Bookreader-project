import React,{useState,useEffect} from 'react'
import "../App";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOk_DETAILS_URL } from '../API';

const BookDetails=()=> {

  const[book,setBook]=useState({});

  const {id}= useParams();

useEffect(()=>{
  axios.get(`${BOOk_DETAILS_URL}/${id}`)
  .then(res=>{
    setBook(res.data)
  }).catch(err=> console.log(err))

},[id])
 
  return (
    <div className='book-details'>
      <div>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#"/>
      </div><br/>
      <div>
        <h2>Description</h2>
        <p>{book?.description}</p><br/>
        <h2>Authors</h2>
        <p>{book?.authors}</p><br/>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
        <h2>Pages</h2>
        <p>{book?.num_pages}</p>
      </div>
      </div>
  )
}

export default BookDetails