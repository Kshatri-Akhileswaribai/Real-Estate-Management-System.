package com.example.realestatemgmt.repository;


import com.example.realestatemgmt.model.PurchaseHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseHistoryRepository extends JpaRepository<PurchaseHistory, Long> {
    List<PurchaseHistory> findByClientId(Long clientId);
}
