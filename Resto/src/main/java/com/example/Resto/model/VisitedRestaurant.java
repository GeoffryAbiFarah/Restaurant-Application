package com.example.Resto.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class VisitedRestaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String date;

    public VisitedRestaurant(UUID id, String name, String date) {
        this.id = id;
        this.name = name;
        this.date=date;
    }

    public VisitedRestaurant(){}

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDate(){return date;}

}
