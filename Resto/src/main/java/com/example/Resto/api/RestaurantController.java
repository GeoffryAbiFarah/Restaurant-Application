package com.example.Resto.api;

import com.example.Resto.model.Restaurant;
import com.example.Resto.model.VisitedRestaurant;
import com.example.Resto.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    @GetMapping("/visited-restaurants")
    public List<VisitedRestaurant> getVisitedRestaurants(){
        return restoService.getAllVisitedRestaurant();
    }

}



