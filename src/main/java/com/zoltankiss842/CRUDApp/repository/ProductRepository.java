package com.zoltankiss842.CRUDApp.repository;

import com.zoltankiss842.CRUDApp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
