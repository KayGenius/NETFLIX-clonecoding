import React, { useState } from 'react'
import {getModal} from '../redux/movieSlice'
import { useSelector,useDispatch } from "react-redux"
import {getCurrentMovies} from '../redux/movieSlice'
import axios from 'axios'



const MovieCard = ({ movie, type }) => {

const {modal} = useSelector((state)=>state.movies)

  const dispatch =useDispatch()

  return (
    <>
    <div className='card-item' style={{
      backgroundImage:
        "url(" + `https://www.themoviedb.org/t/p/w342${movie.poster_path}` + ")"
    }}>
      <div className='overlay'>
        <h3>{movie.original_title}</h3>
        <p>{movie.vote_average}</p>{" "}

        {/**react-bootstrap badge */}
        {movie.adult == true ? <p>💕</p> : <p>전체관람가능</p>}
        <button className='card-item-btn' onClick={()=>{return(dispatch(getModal(1)),dispatch(getCurrentMovies(movie)))}}>자세히보기</button>
      </div>
    </div>

 </>

  )
}




export default MovieCard