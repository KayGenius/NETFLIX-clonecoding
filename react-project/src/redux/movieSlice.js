import { createSlice } from "@reduxjs/toolkit";


let movieSlice = createSlice({
  name: "movies", //state의 값
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    modal:0,
    currentMovies:[],
    movie:null,
    reviewMovie:[]
  }, //state의 value
  reducers: {
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    getModal:(state,action)=>{
      state.modal = action.payload
    },
    getCurrentMovies:(state,action)=>{
      state.currentMovies = action.payload
    },
    getMovie:(state,action)=>{
      state.movie = action.payload
    },
    getReviewMovie:(state,action)=>{
      state.reviewMovie = action.payload
    }
  },
});

export const {getMovie,getPopularMovies,getTopRatedMovies,getUpComingMovies,getReviewMovie,getModal,getCurrentMovies} = movieSlice.actions;
export default movieSlice.reducer;