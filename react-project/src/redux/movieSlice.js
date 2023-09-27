import { createSlice } from "@reduxjs/toolkit";


let movieSlice = createSlice({
  name: "movies", //state의 값
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
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
  },
});

export const {getPopularMovies,getTopRatedMovies,getUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;