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
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;


    @RequestMapping("/getProducts")
    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @RequestMapping("/addProduct")
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @RequestMapping("/deleteProduct")
    @PostMapping
    public void deleteProduct(@RequestBody Product product) {
        productService.deleteProduct(product.getId());
    }

    @RequestMapping("/changeProductStatus")
    @PostMapping
    public void changeProductStatus(@RequestBody Integer id) {
        productService.changeProductStatus(id);
    }

}
