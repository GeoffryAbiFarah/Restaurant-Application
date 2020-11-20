package com.example.Resto.service;


import com.example.Resto.model.Restaurant;
import com.example.Resto.model.VisitedRestaurant;
import com.example.Resto.repositories.RestaurantRepository;
import com.example.Resto.repositories.VisitedRestaurantRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository ;

    @Autowired
    private VisitedRestaurantRepositary visitedRestaurantRepositary;

    public List<Restaurant> getAllRestaurants (){
        return restaurantRepository.findAll();
    }

    public List<Restaurant> getRestaurantByNameAndType (String name, String type){
        return restaurantRepository.findByNameIgnoreCaseAndTypeIgnoreCase(name,type);
    }

    public List<Restaurant> getRestaurantByType (String type){
        return restaurantRepository.findRestaurantByTypeIgnoreCase(type);
    }

    public List<Restaurant> getRestaurantByName (String name){
        return restaurantRepository.findRestaurantByNameIgnoreCase(name);
    }

    public List<VisitedRestaurant> getAllVisitedRestaurant (){
        return visitedRestaurantRepositary.findAll();
    }

    public void addVisitedRestaurant (VisitedRestaurant visitedResto) {
        visitedRestaurantRepositary.save(visitedResto);
    }
}
