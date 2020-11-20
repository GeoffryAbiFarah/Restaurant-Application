package com.example.Resto.api;

import com.example.Resto.model.Restaurant;
import com.example.Resto.model.VisitedRestaurant;
import com.example.Resto.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restoService;

    @GetMapping("/restaurants")
    public List<Restaurant> getRestaurants(){
        return restoService.getAllRestaurants();
    }

    @GetMapping("/restaurant-by-name-and-type")
    public List<Restaurant> getRestaurantByNameAndType(@RequestParam String name, @RequestParam String type){
        return restoService.getRestaurantByNameAndType(name,type);
    }

    @GetMapping("/restaurant-by-type")
    public List<Restaurant> getRestaurantByType(@RequestParam String type){
        return restoService.getRestaurantByType(type);
    }

    @GetMapping("/restaurant-by-name")
    public List<Restaurant> getRestaurantByName(@RequestParam String name){
        return restoService.getRestaurantByName(name);
    }

    @GetMapping("/visited-restaurants")
    public List<VisitedRestaurant> getVisitedRestaurants(){
        return restoService.getAllVisitedRestaurant();
    }

    @PostMapping("/add-visited-restaurant")
    public void postVisitedRestaurant(@RequestBody VisitedRestaurant visitedRestaurant){
        restoService.addVisitedRestaurant(visitedRestaurant);
    }
}



