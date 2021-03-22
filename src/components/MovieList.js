import React from 'react'
import MovieCard from './MovieCard'

  

function MovieList({film}) {
    
    return (
        <div className ="movie-list">
         {film.map((feelm)=>
         <MovieCard fealm={feelm}/>
         )}
        </div>
    )
}

export default MovieList
