package com.example.Resto.repositories;


import com.example.Resto.model.Restaurant;
import com.example.Resto.model.VisitedRestaurant;
import org.hibernate.annotations.SQLInsert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface VisitedRestaurantRepositary extends JpaRepository<VisitedRestaurant, UUID> {}

