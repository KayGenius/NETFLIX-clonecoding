import React,{useState,useEffect} from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
import {useSelector,useDispatch } from 'react-redux';
import { getMovie,getReviewMovie } from '../redux/movieSlice';
import FadeLoader from "react-spinners/FadeLoader";
import { Badge} from "react-bootstrap";
import axios from '../axios'
const MovieDetail = () => {
   const {id} =  useParams();
   const[searchParams] = useSearchParams();
   const type =searchParams.get('type');
   const dispatch = useDispatch()
   console.log(id,type)
   let {popularMovies,topRatedMovies,upComingMovies,movie,reviewMovie} = useSelector((state)=>state.movies)

useEffect(()=>{
    if(movie){
      //movie 라는 state에 새로운 값이 들어가면, 그 값을 sessionstorage 안에 저장하겠다
      sessionStorage.setItem('movie',JSON.stringify(movie))
    }
},[movie])


   /**내가 가져올 영화에 대한 데이터를 추출하는 함수 */
const GetMovieData = ()=>{
      if(type == 'popularMovies'){
       movie = popularMovies.results.find((x)=> x.id == id)
       console.log(movie)
       dispatch(getMovie(movie))
      

      }else if(type =='topRatedMovies'){
       movie = topRatedMovies.results.find((x)=> x.id == id)
       console.log(movie)
       dispatch(getMovie(movie))
     
   
      }else if(type =='upComingMovies'){
       movie = upComingMovies.results.find((x)=> x.id == id)
       console.log(movie)
       dispatch(getMovie(movie))
  

      }
   }


   
//redux의 값이 가지고 와졌을 때

useEffect(()=>{

  const getReviewData = () =>{
    //     /{movie_id}/reviews
    axios.get(`/${sessionMovie.id}/reviews`).then(res=>{dispatch(getReviewMovie(res.data.results));console.log(res.data.results)})
  }

  //세션 안에 값이 존재하면 세션안에 있는 값을 movie셋팅
  const sessionMovie= JSON.parse(sessionStorage.getItem('movie'))
  if(sessionMovie){
    dispatch(getMovie(sessionMovie))
    getReviewData()
  }else{
    GetMovieData()
 
  }
  //세션 안에 값이 없다면(최초크릭) redux로 가서 movie 셋팅
  },[popularMovies.results,topRatedMovies.results,upComingMovies.results,id,type])




  return (
    
    <div className='movieDetail'>
      {movie &&
      <div className='movieDetail-box'>
              <div className='movieDetail-poster'
      style={{  backgroundImage : "url("+
      `https://www.themoviedb.org/t/p/w1280${movie.backdrop_path}`
   +")"
}}
      
      ></div>
    <div className='movieDetail-item'>
    {movie.adult == true ? <Badge bg="danger">청소년관람불가</Badge> : <Badge bg="success" style={{margin:'10px'}}>전체이용가</Badge>}
            <h1>{movie.title}</h1>
            
            <div>
                <span>평점 : {movie.vote_average}점</span>{" "}
                <span>개봉일 : {movie.release_date}</span>
            </div>
            <div>소개글 {movie.overview}</div>
            <h2>Review</h2>
              {reviewMovie.length ==0 ? 
              <p>등록된 리뷰가 없습니다.</p>:
              (reviewMovie.map((item)=>{return(
                  <div key={item.id}>
                    <p>작성자:{item.author}|작성일:{item.content}</p>

                  </div>


              )}))}
           

            </div>
            
  
        </div>}


    </div>
  )
}

export default MovieDetail