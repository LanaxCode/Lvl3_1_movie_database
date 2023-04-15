
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<MovieList />} />
        <Route path={"/:movieid"} element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
