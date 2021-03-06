package com.bilgeadam.miniproject.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.bilgeadam.miniproject.controller.model.Product;

@Service
public interface ProductService {

	List<Product> getProducts(String category);

	Product addProduct(Product product);

	void deleteProduct(Integer id);

	List<Product> getProducts(boolean complete);

	Boolean changeProductStatus(Integer id);

}
