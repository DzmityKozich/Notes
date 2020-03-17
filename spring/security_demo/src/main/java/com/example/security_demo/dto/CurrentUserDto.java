package com.example.security_demo.dto;

import com.example.security_demo.models.UserModel;

public class CurrentUserDto {

    private Long idUser;
    private String name;
    private String email;
    private Long idRole;

    public CurrentUserDto() {
    }

    public CurrentUserDto(Long idUser, String name, String email, Long idRole) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.idRole = idRole;
    }

    public CurrentUserDto(UserModel userModel){
        this.idUser = userModel.getIdUser();
        this.name = userModel.getName();
        this.email = userModel.getEmail();
        this.idRole = userModel.getRole().getIdRole();
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }
}
