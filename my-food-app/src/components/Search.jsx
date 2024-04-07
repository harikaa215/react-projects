import React, { useState } from 'react'

const Search = ({restaurants, setFilteredRestaurants}) => {

  const [searchText, setSearchText] = useState('')
  
 
  const handleSearch = () => {
    const searchRes = restaurants.filter((res) => (res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
    setFilteredRestaurants(searchRes)
  }


  return (
    <div className='search_menu'>
        <input type="text" className="search" placeholder='Search for Restaurant and food....' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search