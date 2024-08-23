package com.example.realestatemgmt.controller;

import com.example.realestatemgmt.model.Client;
import com.example.realestatemgmt.model.PurchaseHistory;
import com.example.realestatemgmt.model.SavedItem;
import com.example.realestatemgmt.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/{id}")
    public Client getClientProfile(@PathVariable Long id) {
        return clientService.getClientProfile(id);
    }

    @PutMapping("/{id}")
    public Client updateClientProfile(@RequestBody Client client, @PathVariable Long id) {
        client.setId(id);
        return clientService.updateClientProfile(client);
    }

    @GetMapping("/{id}/purchase-history")
    public List<PurchaseHistory> getPurchaseHistory(@PathVariable Long id) {
        return clientService.getPurchaseHistory(id);
    }

    @GetMapping("/{id}/saved-items")
    public List<SavedItem> getSavedItems(@PathVariable Long id) {
        return clientService.getSavedItems(id);
    }
}
