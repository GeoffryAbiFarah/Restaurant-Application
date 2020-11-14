package com.example.Resto.service;


import com.example.Resto.model.Restaurant;
import com.example.Resto.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    @Autowired
    RestaurantRepository restaurantRepository ;

    public List<Restaurant> getAllRestaurants (){
        return restaurantRepository.findAll();
    }
}
