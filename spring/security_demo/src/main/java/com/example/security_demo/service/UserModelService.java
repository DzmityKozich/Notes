package com.example.security_demo.service;

import com.example.security_demo.models.UserModel;

import java.util.List;

public interface UserModelService {
    List<UserModel> getAllUsers();
    UserModel saveUser(UserModel userModel);
    UserModel getUserByEmail(String email);
    void deleteUserById(Long id);
}
