import React, {useEffect} from 'react';
import {REQUEST_ALL_RESTOS} from '../types';
import {useSelector, useDispatch} from 'react-redux';

function AllRestaurants() {

    const allRestaurants = useSelector((state) => state.allRestoReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_ALL_RESTOS})
    })

  return (
    <div>
        {allRestaurants.map(resto => (
            <div key={resto.id}>
                <h1>{resto.name}</h1>
                <p>{resto.type }</p>
            </div>
        ))}
        
    </div>
  );
}

export default AllRestaurants;