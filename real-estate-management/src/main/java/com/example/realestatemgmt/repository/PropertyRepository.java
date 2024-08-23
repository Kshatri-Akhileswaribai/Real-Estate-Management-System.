package com.example.realestatemgmt.repository;

import com.example.realestatemgmt.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByType(String type);
}