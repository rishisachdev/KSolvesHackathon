package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;



    public User validateCredentials(String email, String password) {
        User user = userRepository.findByEmail(email);
        System.out.print(user.getEmail());
        if (user != null  &&  password.equals(user.getPassword())) {
            // Direct string comparison
           return user;
        }
        return null;
    }
}
