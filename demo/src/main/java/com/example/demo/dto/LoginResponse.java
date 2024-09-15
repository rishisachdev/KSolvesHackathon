package com.example.demo.dto;

import com.example.demo.entity.User;

public class LoginResponse {
    private User email;

    public LoginResponse(User email) {
        
        this.email = email;
    }

    // Getters and setters

    public User getUser() { return email; }
    public void setUser(User user) { this.email = email; }
}
