package com.example.Resto.api;

import com.example.Resto.model.Restaurant;
import com.example.Resto.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restoService;

    @GetMapping("/restaurants")
    public List<Restaurant> getRestaurants(){
        return restoService.getAllRestaurants();
    }

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
