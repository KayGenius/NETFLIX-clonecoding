import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <p>1</p>
      </Routes>
    </div>
  );
}

export default App;
