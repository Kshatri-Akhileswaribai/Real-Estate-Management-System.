package com.example.realestatemgmt.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Property name is required")
    @Size(min = 2, max = 100, message = "Property name should be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Dimension is required")
    @Pattern(regexp = "^\\d+\\s*(sq ft|sq m|acres)$", message = "Dimension should be a valid format like 1000 sqft")
    private String dimension;

    @NotNull(message = "Number of beds is required")
    @Min(value = 1, message = "Property must have at least 1 bed")
    @Max(value = 20, message = "Number of beds must be 20 or less")
    private Integer numberOfBeds;

    @NotNull(message = "Number of baths is required")
    @Min(value = 1, message = "Property must have at least 1 bath")
    @Max(value = 20, message = "Number of baths must be 20 or less")
    private Integer numberOfBaths;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    private Double price;

    @NotBlank(message = "Location is required")
    @Size(min = 2, max = 100, message = "Location should be between 2 and 100 characters")
    private String location;

    @NotBlank(message = "Address is required")
    @Size(min = 5, max = 200, message = "Address should be between 5 and 200 characters")
    private String address;

    @Size(max = 1000, message = "Description should not exceed 1000 characters")
    private String description;

    @NotBlank(message = "Property type is required")
    @Size(min = 2, max = 50, message = "Type should be between 2 and 50 characters")
    private String type;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] image;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDimension() { return dimension; }
    public void setDimension(String dimension) { this.dimension = dimension; }

    public Integer getNumberOfBeds() { return numberOfBeds; }
    public void setNumberOfBeds(Integer numberOfBeds) { this.numberOfBeds = numberOfBeds; }

    public Integer getNumberOfBaths() { return numberOfBaths; }
    public void setNumberOfBaths(Integer numberOfBaths) { this.numberOfBaths = numberOfBaths; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public byte[] getImage() { return image; }
    public void setImage(byte[] image) { this.image = image; }
}
