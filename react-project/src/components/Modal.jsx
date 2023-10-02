import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getModal } from '../redux/movieSlice'
import axios from '../axios'
const Modal = () => {
    const [video,setVideo] = useState('')
    const dispatch = useDispatch()
    const { modal, currentMovies } = useSelector((state) => state.movies)
        console.log('모달영화',currentMovies)
            axios.get(`/${currentMovies.id}/videos?language=en-US`).then((res) => setVideo(res.data.results[0].key) ).catch((error)=>{console.log(videoref.current.innerHtml)})

const videoref = useRef()


return (
    <div className='modal-movie'>
        <div className='modal-movie-left'>
            <img className='modal-movie-left-img' src={`https://www.themoviedb.org/t/p/w1280${currentMovies.backdrop_path}`}></img>
        </div>
        <div className='modal-movie-right'>
            <button className='modal-movie-btn' onClick={() => dispatch(getModal(0))}>X</button>
            <h1 className='modal-movie-title'>{currentMovies.original_title}</h1>
            <h3 className='modal-movie-date'>{currentMovies.release_date}</h3>
            <p className='modal-movie-overview'>{overview(currentMovies.overview)}. . .</p>
           
            <div className='video'>
            <iframe ref={videoref}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video}?controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                allowFullScreen
              
            ></iframe>
            </div>

        </div>



    </div>
)
}

const overview = (data) => {
    if (data !== undefined) {
      return data.slice(0, 150);
    }
  };

export default Modal