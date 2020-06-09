package com.bilgeadam.miniproject.controller;

import com.bilgeadam.miniproject.entity.User;

import com.bilgeadam.miniproject.service.impl.UserSeviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class userController {

    @Autowired
    UserSeviceImpl userSevice;

    @RequestMapping("/loginUser")
    @PostMapping
    public boolean loginUser(@RequestBody User user) {
        return userSevice.loginUser(user);
    }


    @RequestMapping("/saveUser")
    @PostMapping
    public void saveUser(@RequestBody User user) {
        userSevice.addUser(user);
    }

}
