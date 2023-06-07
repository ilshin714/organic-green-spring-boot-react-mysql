package com.ecommerce.organicgreen.controller;

import com.ecommerce.organicgreen.model.User;
import com.ecommerce.organicgreen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New Student is added";
    }

    @GetMapping("/getAll")
    public List<User> getAllusers(){
        return userService.getAllUsers();
    }
}
