package com.bilgeadam.miniproject.service.impl;

import com.bilgeadam.miniproject.entity.User;
import com.bilgeadam.miniproject.repository.UserRepository;
import com.bilgeadam.miniproject.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserSeviceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public User loginUser(User user) {
        User userControl = userRepository.getByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (userControl != null) {
            return userControl;
        } else {
            return null;
        }
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getUser(String category) {
        return userRepository.findByCategory(category);
    }
}
