
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList';
import Search from "./components/Search"
import {dataArray} from './data'

function App() {
  const [movies,setMovies] = useState(dataArray)
  const [searchValue, setSearchValue] = useState("")
  const [searchRating, setSearchRating] = useState(1)
  // adding movie to the list 
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])
  // handle searching by name
  const handleSearch = (e) => setSearchValue(e.target.value)
  // handle searching by rating
  const handleRating = (rating) => setSearchRating(rating)
  return (
    <div className="App">
      <Search searchValue={searchValue} handleSearch={handleSearch} searchRating={searchRating} handleRating={handleRating}    />
      <MovieList film = {movies.filter((movie)=>
        movie.Title.toLowerCase().includes(searchValue.toLowerCase().trim())
        && searchRating <= movie.Rating
        )}/>
<AddMovie  handleAdd={handleAdd} />
       
    
   </div>
  )
}

export default App;
