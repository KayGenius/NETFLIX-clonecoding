import React from 'react'

const MovieCard = ({movie,type}) => {
  console.log(movie,type)
  return (
    
        <div className='card-item' style={{backgroundImage: 
            "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}`+")"
        }}>
          <div className='overlay'>
          <h1>제목</h1>
          <span>평점</span>{" "}
          <span>
            {/**react-bootstrap badge */}
            전체관람가능
          </span>
          </div>
        </div>
      
   
  )
}

export default MovieCard