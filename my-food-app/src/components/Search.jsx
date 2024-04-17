import React, { useState } from 'react';

const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const searchRes = restaurants.filter((res) => (res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
    setFilteredRestaurants(searchRes);
  };

  return (
    <div className="flex items-center mt-8">
      <div className="mr-4">
        <input type="text" placeholder='Search for Restaurant and food....' value={searchText} onChange={(e) => setSearchText(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <button onClick={handleSearch} className="px-4 py-2 bg-indigo-500 text-white rounded-md focus:outline-none hover:bg-indigo-600">Search</button>
    </div>
  );
};

export default Search;
