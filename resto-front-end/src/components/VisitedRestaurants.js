import React, {useEffect} from 'react';
import {requestVisited} from '../actions/visitedAction';
import {REQUEST_VISITED_RESTOS} from '../types';
import {useSelector, useDispatch} from 'react-redux';

function VisitedRestaurants() {

    const visited = useSelector((state) => state.visitedRestaurantsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_VISITED_RESTOS})
    })

  return (
    <div>
        {visited.map(resto => (
            <div key={resto.id}>
                <h1>{resto.name}</h1>
                <p>{resto.type }</p>
            </div>
            
        ))}
    </div>
  );
}

export default VisitedRestaurants;