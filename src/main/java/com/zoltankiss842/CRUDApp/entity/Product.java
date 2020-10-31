package com.zoltankiss842.CRUDApp.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(
        name = "products",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "productName")
        })
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 80)
    private String productName;

    @NotBlank
    private int price;

    @NotBlank
    @Size(max = 20)
    private String unit;

    @NotBlank
    @Size(max = 255)
    private String description;

    public Product() {
    }

    public Product(@NotBlank @Size(max = 80) String productName, @NotBlank int price, @NotBlank @Size(max = 20) String unit, @NotBlank @Size(max = 255) String description) {
        this.productName = productName;
        this.price = price;
        this.unit = unit;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
