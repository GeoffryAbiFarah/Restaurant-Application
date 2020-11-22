import React from 'react';
import SearchBar from './SearchBar';
import AllRestaurants from './AllRestaurants';
import SearchedRestaurants from './SearchedRestaurants'


function Page1() {
  return (
    <div>
      <SearchBar/>
      <br/>
      <AllRestaurants/>
      <hr/>
      <SearchedRestaurants/>
      <hr/>
      
    </div>
  );
}

export default Page1;
