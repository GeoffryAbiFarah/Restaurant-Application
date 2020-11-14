package com.example.Resto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.Resto.model.Restaurant;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, UUID> {

    public List<Restaurant> findByNameIgnoreCaseAndTypeIgnoreCase (String name, String type);

    public List<Restaurant> findRestaurantByTypeIgnoreCase (String type);

    @Query("SELECT resto FROM Restaurant resto WHERE resto.visited= :visitedBind")
    public List<Restaurant> visitedSearch (@Param("visitedBind") boolean visited);

}



//    @Query("select resto from Restaurant resto where resto.name = :nameBind and resto.type = :typeBind")
//    public List<Restaurant> restoSearch(@Param("nameBind") String name, @Param("typeBind") String type);
