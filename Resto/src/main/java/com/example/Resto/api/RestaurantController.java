package com.example.Resto.api;

import com.example.Resto.model.Restaurant;
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

    @GetMapping("/restaurantByNameAndType")
    public List<Restaurant> getRestaurantByNameAndType(@RequestParam String name, @RequestParam String type){
        return restoService.getRestaurantByNameAndType(name,type);
    }

    @GetMapping("/restaurantByType")
    public List<Restaurant> getRestaurantByType(@RequestParam String type){
        return restoService.getRestaurantByType(type);
    }

    @GetMapping("/restaurantVisited")
    public List<Restaurant> getVisitedRestaurants(@RequestParam boolean visited){
        return restoService.getVisitedRestaurants(visited);
    }

    @PutMapping("/restaurantVisitStatus")
    public void updateVisitStatus(@RequestBody Restaurant newResto){
        restoService.updateVisitStatus(newResto);
    }

//    @GetMapping("/restaurantSearch")
//    public List<Restaurant> searchRestaurants(@RequestParam String name, @RequestParam String type){
//        return restoService.searchRestaurant(name,type);
//    }
//
//    @PostMapping("/restaurants")
//    public String addRestaurant (@RequestBody Restaurant newResto){
//        restoService.addRestaurant(newResto);
//        return "Added the restaurant";
//    }
//
//    @PutMapping("/restaurants")
//    public String updateRestaurant (@RequestBody Restaurant newResto){
//        restoService.updateRestaurant(newResto);
//        return "Updated the restaurant";
//    }


//    @GetMapping("/restaurant/{id}") // /restaurant/{id}
//    public Restaurant getRestaurantById(@PathVariable UUID id){
//        return restoService.getRestaurantById(id);
//    }

//    @DeleteMapping("/restaurant")
//    public String deleteRestoById(@RequestBody Restaurant resto){
//        restoService.deleteResto(resto);
//        return "Deleted Succesfully";
//    }

    //    @GetMapping("/restaurant/{id}")
//    public Restaurant getRestaurantById(@PathVariable UUID id){
//        return restoService.getRestaurantById(id);
//    }

//    @GetMapping("/restaurants")
//    public String getAllRestaurants(){
//        return "Yellow";
//    }

//    @GetMapping("/restaurants")
//    public List<Restaurant> getAllRestaurants (){
//        List<Restaurant> restos = new ArrayList<Restaurant>();
//
//        restos.add(new Restaurant(UUID.randomUUID(),"Murray","chinese", "Zalka",71907259,
//                30, "image-path",true,"visit date"));
//
//        restos.add(new Restaurant(UUID.randomUUID(),"imara","lebanese", "Ain saadeh",
//                71907259, 40, "image-path",false,"visit date"));
//
//        return restos;
//    }
    
//    @GetMapping("/hello")
//    public String  sayHello(@RequestParam String name ,@RequestParam long id){
//        return " Hello World " + name + "With id= "+id;
//    }
//
//    @GetMapping("/welcome")
//    public String  sayWelcome(@RequestParam String name ,@RequestParam long id){
//        return " Welcome " + name + "With id= "+id;
//    }

}
