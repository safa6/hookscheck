import React from 'react'
import data from '../data'
import StarRating from './StarRating'




const MovieCard = ({ fealm})=>{
    return (
        <div className="movie-card">
            <StarRating rating={fealm.Rating} />
<img  src={fealm.Img} alt="" /> 
<h3>{fealm.Title}</h3>
<h3>{fealm.Date}</h3>



        </div>
    )  
} 
    


export default MovieCard
