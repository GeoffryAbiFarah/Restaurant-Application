package com.example.Resto.model;

import javax.persistence.*;
import java.util.UUID;


@Entity
//@Table(name = "restaurant")
public class Restaurant {
    @Id
    @Column(name = "id")
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(name = "restaurant_name")
    private String name;
    @Column(name = "restaurant_type")
    private String type;
    @Column(name = "restaurant_address")
    private String address;
    @Column(name = "phone")
    private int number;
    @Column(name = "average_cost")
    private double cost;
    @Column(name = "restaurant_image")
    private String image_path;
    @Column(name = "visited")
    private boolean visited;
    @Column(name = "visit_date")
    private String date;

    public Restaurant(UUID id, String name, String type, String address, int number, double cost, String image_path, boolean visited, String date) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.number = number;
        this.cost = cost;
        this.image_path = image_path;
        this.visited = visited;
        this.date = date;
    }

    public Restaurant(){}

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getAddress() {
        return address;
    }

    public int getNumber() {
        return number;
    }

    public double getCost() {
        return cost;
    }

    public String getImage_path() {
        return image_path;
    }

    public boolean isVisited() {
        return visited;
    }

    public String getDate() {
        return date;
    }
}
