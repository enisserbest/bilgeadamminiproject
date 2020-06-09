package com.bilgeadam.miniproject.service.impl;

import com.bilgeadam.miniproject.entity.User;
import com.bilgeadam.miniproject.repository.UserRepository;
import com.bilgeadam.miniproject.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class UserSeviceImpl implements UserService {

    @Autowired
    UserRepository userRepository;


    @Autowired
    private ModelMapper modelMapper;

    @Override
    public boolean loginUser(User user) {
        User userControl = userRepository.getByUsername(user.getUsername());
        if(userControl!= null){
            return true;
        }else{
            return false;
        }


    }

    @Override
    public void addUser(User user) {

    }
}
