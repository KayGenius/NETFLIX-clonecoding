import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies/:id' element={<MovieDetail></MovieDetail>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
