package com.example.security_demo.service.impl;

import com.example.security_demo.models.UserModel;
import com.example.security_demo.service.ValidatorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValidatorServiceImpl implements ValidatorService {

    @Override
    public boolean validator(UserModel userModel, List<UserModel> userModelList) {
        for(UserModel user : userModelList){
            if(userModel.getEmail().equals(user.getEmail())){
                return false;
            }
        }
        return true;
    }
}
