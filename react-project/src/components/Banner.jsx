import React from "react";

const Banner = (props) => {

  
  console.log(props)
    // console.log('나오냐',props.popularMovies.overview)
  return (
    <div className="banner">
 
      <div
        className="banner-img"
        style={{  backgroundImage : "url("+
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props.popularMovies.results[7].poster_path}`
     +")"
}}
      ></div>


    
      
      <div className="banner-item">
        <p className='banner-title'>{props.popularMovies.results[7].title}</p>
        <p className='banner-content'>{props.popularMovies.results[7].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
