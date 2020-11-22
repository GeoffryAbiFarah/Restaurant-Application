import React from 'react';
import SearchBar from './SearchBar';
import AllRestaurants from './AllRestaurants';
import SearchedRestaurants from './SearchedRestaurants'

function Page1() {
  return (
    <div>
      <SearchBar/>
      PAGE1
      <AllRestaurants/>
      <hr/>
      <SearchedRestaurants/>
      
    </div>
  );
}

export default Page1;
