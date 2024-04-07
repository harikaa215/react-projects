import React from 'react'

const Filter = ({restaurants, setRestaurants }) => {

  const handleClick = () => { 
    const filteredData = restaurants.filter((res) => res.info.avgRating > 4.2);
    console.log(filteredData)
    setRestaurants(filteredData)
  }

  return (
    <div>
        <button className='top_rated_btn' onClick={handleClick}>Top rated</button>
    </div>
  )
}

export default Filter