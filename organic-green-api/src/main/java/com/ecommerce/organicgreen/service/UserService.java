package com.ecommerce.organicgreen.service;
import com.ecommerce.organicgreen.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User createUser(User user);

    boolean deleteUser(Long id);

    User getUserById(Long id);

    User updateUser(Long id, User user);
}
