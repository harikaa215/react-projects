import React from 'react'

const Filter = ({ restaurants, setRestaurants }) => {

  const handleClick = () => {
    const filteredData = restaurants.filter((res) => res.info.avgRating > 4.2);
    console.log(filteredData)
    setRestaurants(filteredData)
  }

  return (
    <div>
      <button className='mt-6 mr-10 top-rated-btn bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded' 
      onClick={handleClick}>Top rated</button>
    </div>
  )
}

export default Filter
