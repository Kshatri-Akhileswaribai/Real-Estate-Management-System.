package com.example.realestatemgmt.repository;

import com.example.realestatemgmt.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}