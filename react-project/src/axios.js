import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY3MzVkMjg1ODQ3NWU4MGFiMTMzODk1Y2VlZTlkMyIsInN1YiI6IjY0ZjMxNDViNzdkMjNiMDBjYjg3MTA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-E0Cizv8nDJJccSkhgLqH0Fy9V_FxCLHaLvFz_m9Jk'
      }
})

export default instance 