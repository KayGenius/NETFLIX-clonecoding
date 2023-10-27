import React from 'react'
import {getModal} from '../redux/movieSlice'
import {useDispatch } from "react-redux"
import {getCurrentMovies} from '../redux/movieSlice'
import { Badge} from "react-bootstrap";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, type }) => {


  const dispatch =useDispatch()

  return (
    <>
    <div className='card-item' style={{
      backgroundImage:
        "url(" + `https://www.themoviedb.org/t/p/w342${movie.poster_path}` + ")"
    }}>

      <Link to={`/movies/${movie.id}?type=${type}`}>
      <div className='overlay'>
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}</p>{" "}

        {/**react-bootstrap badge */}
        <span className='overlay-badge'>
        {movie.adult == true ? <Badge bg="danger">청소년관람불가</Badge> : <Badge bg="success" style={{margin:'10px'}}>전체이용가</Badge>}
        </span>
        <button className='card-item-btn' onClick={()=>{return(dispatch(getModal(1)),dispatch(getCurrentMovies(movie)))}}>자세히보기</button>
      </div>
      </Link>
    </div>

 </>

  )
}




export default MovieCard