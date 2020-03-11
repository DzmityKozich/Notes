package com.example.security_demo.service;

import com.example.security_demo.models.UserModel;

import java.util.List;

public interface ValidatorService {
    boolean validator(UserModel userModel, List<UserModel> userModelList);
}
