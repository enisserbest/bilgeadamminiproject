package com.bilgeadam.miniproject.service;

import com.bilgeadam.miniproject.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

	User loginUser(User user);

	void addUser(User user);

	List<User> getUser(String category);

}
