import React from 'react'
import StarRating from './StarRating'

function Serach({searchValue,searchRating,handleSearch,handleRating}) {
    return (
        <div className="header-container">
    <h1>Movie App</h1>
    <div className="search-container">

    <input className="inp"  type="search" placeholder="Enter a movie name ..." value={searchValue} onChange={handleSearch}/>
    
    
    <StarRating rating={searchRating} handleRating={handleRating} />
    </div>

        </div>
    )
}

export default Serach
