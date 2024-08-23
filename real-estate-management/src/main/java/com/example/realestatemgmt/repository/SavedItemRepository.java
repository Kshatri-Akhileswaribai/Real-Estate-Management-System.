package com.example.realestatemgmt.repository;

import com.example.realestatemgmt.model.SavedItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedItemRepository extends JpaRepository<SavedItem, Long> {
    List<SavedItem> findByClientId(Long clientId);
}
