package org.example.models;

import java.sql.Timestamp;

public class Company {
    private int id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String webSite;
    private Timestamp createdAt;

    public Company() {}

    public Company(int id, String name, String email, String phone, String address, String webSite, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.webSite = webSite;
        this.createdAt = createdAt;
    }

    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getWebSite() { return webSite; }
    public void setWebSite(String webSite) { this.webSite = webSite; }
    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}