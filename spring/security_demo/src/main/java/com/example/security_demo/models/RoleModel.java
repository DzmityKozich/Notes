package com.example.security_demo.models;

public class RoleModel {

    private Long idRole;
    private String name;

    public RoleModel() {
    }

    public RoleModel(Long idRole, String name) {
        this.idRole = idRole;
        this.name = name;
    }

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
