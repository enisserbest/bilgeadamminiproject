package com.bilgeadam.miniproject.service;

import com.bilgeadam.miniproject.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

	User loginUser(User user);

	void addUser(User user);

}
