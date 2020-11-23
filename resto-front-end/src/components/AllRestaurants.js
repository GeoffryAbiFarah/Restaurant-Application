import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {requestAll} from '../actions/restaurantsAction';
import Restaurant from './Restaurant';
// import {SHOW_ALL_RESTAURANTS} from '../types'


function AllRestaurants() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestAll())
        // dispatch({type: SHOW_ALL_RESTAURANTS});
    }, [])

  return (
    <div>
        <Restaurant/>
    </div>
  );
}

export default AllRestaurants;

