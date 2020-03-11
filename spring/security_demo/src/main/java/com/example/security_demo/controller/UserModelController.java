package com.example.security_demo.controller;

import com.example.security_demo.models.UserModel;
import com.example.security_demo.service.UserModelService;
import com.example.security_demo.service.ValidatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 5 * 3600)
@RequestMapping("/api/users")
@RestController
public class UserModelController {

    @Autowired
    private UserModelService userModelService;

    @Autowired
    private ValidatorService validatorService;

    @GetMapping("")
    private List<UserModel> getAllUsers(){
        return userModelService.getAllUsers();
    }

    @PostMapping("")
    private ResponseEntity saveUser(@RequestBody UserModel userModel){
        if(userModel != null && validatorService.validator(userModel, getAllUsers())) {
            return ResponseEntity.ok(userModelService.saveUser(userModel));
        }
        else return ResponseEntity.badRequest().body("this user is exist");
    }

    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable Long id){
        userModelService.deleteUserById(id);
    }

}

