package com.example.contactapi.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Objects;

@Entity
@Table(name = "contacts")
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class Contact {

    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    private String id;

    private String name;
    private String title;
    private String phone;
    private String email;
    private String address;
    private String photo;

    public Contact() {
        // Default constructor
    }

    public Contact(String id, String name, String title, String phone, String email, String address, String photo) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.photo = photo;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    // Override equals and hashCode for proper comparison
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contact contact = (Contact) o;
        return Objects.equals(id, contact.id) &&
                Objects.equals(name, contact.name) &&
                Objects.equals(title, contact.title) &&
                Objects.equals(phone, contact.phone) &&
                Objects.equals(email, contact.email) &&
                Objects.equals(address, contact.address) &&
                Objects.equals(photo, contact.photo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, title, phone, email, address, photo);
    }
}