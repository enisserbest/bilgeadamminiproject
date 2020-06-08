package com.bilgeadam.miniproject.service.impl;

import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bilgeadam.miniproject.controller.model.Product;
import com.bilgeadam.miniproject.entity.ProductEntity;
import com.bilgeadam.miniproject.repository.ProductRepository;
import com.bilgeadam.miniproject.service.ProductService;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Product> getProducts() {
        List<ProductEntity> list = productRepository.findAll().stream().filter(p -> p.getStatus() == 1).collect(Collectors.toList());
        Type type = new TypeToken<List<Product>>() {
        }.getType();
        return modelMapper.map(list, type);
    }

    @Override
    public Product addProduct(Product product) {
        product.setStasus(1);
        return modelMapper.map(productRepository.save(modelMapper.map(product, ProductEntity.class)), Product.class);
    }

    @Override
    public void deleteProduct(Integer id) {
        ProductEntity product = productRepository.getById(id);
        product.setStatus(0);
        productRepository.save(product);
    }

    @Override
    public List<Product> getProducts(boolean complete) {
        List<ProductEntity> list = productRepository.findByComplete(complete);
        Type type = new TypeToken<List<Product>>() {
        }.getType();
        return modelMapper.map(list, type);
    }

    @Override
    public void changeProductStatus(Integer id) {
        ProductEntity productEntity = productRepository.getById(id);
        productRepository.save(productEntity);

    }

}
