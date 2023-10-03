import React, { useEffect,useState, CSSProperties  } from "react";
import axios from "../axios";
import { useSelector,useDispatch } from "react-redux"
import {getPopularMovies,getTopRatedMovies,getUpComingMovies} from '../redux/movieSlice'
import Banner from '../components/Banner'
import FadeLoader from "react-spinners/FadeLoader";
import MovieSlide from '../components/MovieSlide';
import Modal from "../components/Modal";

const Home = () => {
  /**화면이 랜더링 되지마자, api를 가져올 것 */
  const dispatch = useDispatch()
  const {popularMovies,topRatedMovies,upComingMovies,modal }= useSelector((state)=>state.movies)
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const popularApi = axios.get("/popular?language=en-US&page=1");
    const topratedApi = axios.get("/top_rated?language=en-US&page=1");
    const upComingApi = axios.get("/upcoming?language=en-US&page=1");
    Promise.all([popularApi, topratedApi, upComingApi])
    .then((res) => {
      dispatch(getPopularMovies(res[0].data))
      dispatch(getTopRatedMovies(res[1].data))
      dispatch(getUpComingMovies(res[2].data))
    })
    .then(()=>{setLoading(false)})
    ;
  }, []);

//store에 값이 잘 들어갔는지 확인해보는 용도    
useEffect(()=>{console.log('store의 상태',popularMovies,topRatedMovies,upComingMovies)},[popularMovies,topRatedMovies,upComingMovies])

if(loading){
  return(<FadeLoader color='#d63636' loading={loading} size={5}></FadeLoader>)
}
  return (
    <div>
      {/* {popularMovies.results &&  */}
      <Banner popularMovies={popularMovies}></Banner>
    {/* } */}
      <p style={{fontSize:'30px',marginLeft:'15px'}}>popular movies</p>
      <MovieSlide movies={popularMovies} type='popularMovies'/>
      <p  style={{fontSize:'30px',marginLeft:'15px'}}>TopRated movies</p>
      <MovieSlide movies={topRatedMovies} type='topRatedMovies'/>
      <p  style={{fontSize:'30px',marginLeft:'15px'}}>upcoming movies</p>
      <MovieSlide movies={upComingMovies} type='upComingMovies'/>
      {modal ==0 ?
      null
      :
      <>
      <Modal></Modal> 
      <div className="backdrop"></div>
      </>}
    </div>
  );
};

export default Home;
