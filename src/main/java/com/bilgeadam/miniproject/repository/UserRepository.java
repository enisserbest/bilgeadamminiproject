package com.bilgeadam.miniproject.repository;

import com.bilgeadam.miniproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Integer> {


    User getByUsername(String userName);
}
