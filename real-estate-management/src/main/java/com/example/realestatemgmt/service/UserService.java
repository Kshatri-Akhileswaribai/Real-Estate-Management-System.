//package com.example.realestatemgmt.service;
//
//import com.example.realestatemgmt.model.User;
//import com.example.realestatemgmt.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    public User saveUser(User user) {
//        return userRepository.save(user);
//    }
//
//    public Optional<User> findById(Long id) {
//        return userRepository.findById(id);
//    }
//
//    public Optional<User> findByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    public List<User> findAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public User updateUser(Long id, User userDetails) {
//        return userRepository.findById(id).map(user -> {
//            user.setFirstName(userDetails.getFirstName());
//            user.setLastName(userDetails.getLastName());
//            user.setEmail(userDetails.getEmail());
//            user.setPhoneNumber(userDetails.getPhoneNumber());
//            user.setPassword(userDetails.getPassword());
//            user.setRole(userDetails.getRole());
//            return userRepository.save(user);
//        }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
//    }
//
//    public User validateUser(String email, String password) {
//        Optional<User> userOpt = findByEmail(email);
//        if (userOpt.isPresent()) {
//            User user = userOpt.get();
//            if (user.getPassword().equals(password)) {
//                return user;
//            }
//        }
//        return null;
//    }
//    // Delete a user
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//}
package com.example.realestatemgmt.service;

import com.example.realestatemgmt.model.User;
import com.example.realestatemgmt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findByEmailAndRole(String email, String role) {
        return userRepository.findByEmailAndRole(email, role);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setEmail(userDetails.getEmail());
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setRole(userDetails.getRole());

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(user);
    }
}

