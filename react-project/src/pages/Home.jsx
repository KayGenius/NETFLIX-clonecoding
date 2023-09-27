import React, { useEffect,useState, CSSProperties  } from "react";
import axios from "../axios";
import { useSelector,useDispatch } from "react-redux"
import {getPopularMovies,getTopRatedMovies,getUpComingMovies} from '../redux/movieSlice'
import Banner from '../components/Banner'
import FadeLoader from "react-spinners/FadeLoader";
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  /**화면이 랜더링 되지마자, api를 가져올 것 */
  const dispatch = useDispatch()
  const {popularMovies,topRatedMovies,upComingMovies }= useSelector((state)=>state.movies)
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
      <p>popular movies</p>
      <MovieSlide movies={popularMovies} type='popularMovies'/>
      <p>TopRated movies</p>
      <MovieSlide movies={topRatedMovies} type='topRatedMovies'/>
      <p>upcoming movies</p>
      <MovieSlide movies={upComingMovies} type='upComingMovies'/>
    </div>
  );
};

export default Home;
