package com.bilgeadam.miniproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bilgeadam.miniproject.controller.model.Product;
import com.bilgeadam.miniproject.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping
	public List<Product> getProducts(@RequestParam(required = false) Boolean complete) {
		if (null == complete) {
			return productService.getProducts();
		} else {
			return productService.getProducts(complete);
		}
	}

	@PostMapping
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}

	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable Integer id) {
		productService.deleteProduct(id);
	}

	@PostMapping("/product/id/{id}/status/{status}")
	public void changeProductStatus(@PathVariable Integer id, @PathVariable String status) {
		productService.changeProductStatus(id, status);
	}

}
