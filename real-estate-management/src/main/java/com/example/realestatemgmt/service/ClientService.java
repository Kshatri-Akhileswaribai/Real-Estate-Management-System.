package com.example.realestatemgmt.service;

import com.example.realestatemgmt.model.Client;
import com.example.realestatemgmt.model.PurchaseHistory;
import com.example.realestatemgmt.model.SavedItem;
import com.example.realestatemgmt.repository.ClientRepository;
import com.example.realestatemgmt.repository.PurchaseHistoryRepository;
import com.example.realestatemgmt.repository.SavedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PurchaseHistoryRepository purchaseHistoryRepository;

    @Autowired
    private SavedItemRepository savedItemRepository;

    public Client getClientProfile(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Client updateClientProfile(Client client) {
        return clientRepository.save(client);
    }

    public List<PurchaseHistory> getPurchaseHistory(Long clientId) {
        return purchaseHistoryRepository.findByClientId(clientId);
    }

    public List<SavedItem> getSavedItems(Long clientId) {
        return savedItemRepository.findByClientId(clientId);
    }
}
