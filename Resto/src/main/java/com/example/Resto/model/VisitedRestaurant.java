package com.example.Resto.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.util.UUID;

@Entity
public class VisitedRestaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    @CreatedDate
    private Date date;

    public VisitedRestaurant(UUID id, String name, Date date) {
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

    public Date getDate(){return date;}

}
