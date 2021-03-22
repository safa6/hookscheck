import React from 'react'

const StarRating = ({rating , handleRating}) => {
    const stars = (x) => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= x) {
            star.push(<span onClick={()=>handleRating(i)} style={{color:"gold" , fontSize:"20px" , cursor:"pointer"}}>★</span>)
            }
            else star.push(<span onClick={()=>handleRating(i)} style={{color:"black" , fontSize:"20px" , cursor:"pointer"}}>★</span>)
        }
        return star
    }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}
StarRating.defaultProps = {
    rating:1,
    handleRating : () => {}
};
export default StarRating
