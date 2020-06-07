package com.bilgeadam.miniproject.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bilgeadam.miniproject.entity.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

	List<ProductEntity> findByComplete(boolean complete);

	ProductEntity getById(Integer id);

}
