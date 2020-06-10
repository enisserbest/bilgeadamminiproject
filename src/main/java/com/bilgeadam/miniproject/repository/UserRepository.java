package com.bilgeadam.miniproject.repository;

import com.bilgeadam.miniproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User getByUsernameAndPassword(String userName,String password);


	List<User> findByCategory(String category);

}
