package com.ecommerce.organicgreen.service;

import com.ecommerce.organicgreen.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();
}
