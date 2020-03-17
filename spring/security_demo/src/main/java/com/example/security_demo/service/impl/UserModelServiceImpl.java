package com.example.security_demo.service.impl;

import com.example.security_demo.auth.AuthUser;
import com.example.security_demo.models.UserModel;
import com.example.security_demo.service.UserModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("userModelServiceImpl")
public class UserModelServiceImpl implements UserModelService, UserDetailsService{

    @Value("${backend.server.url}")
    private String backend;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public List<UserModel> getAllUsers() {
        RestTemplate restTemplate = new RestTemplate();
        UserModel[] userModels = restTemplate.getForObject(backend + "/users/", UserModel[].class);
        return userModels == null ? Collections.emptyList() : Arrays.asList(userModels);
    }

    @Override
    public UserModel saveUser(UserModel userModel) {
        userModel.setPassword(bCryptPasswordEncoder.encode(userModel.getPassword()));
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backend + "/users/", userModel, UserModel.class).getBody();
    }

    @Override
    public void deleteUserById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backend  + "/users/" + id);
    }

    @Override
    public UserModel getUserByEmail(String email) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backend + "/users/" + email, UserModel.class);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = getUserByEmail(username);
        if (userModel == null) {
            throw new UsernameNotFoundException("User with username: " + username + " not found");
        }
        AuthUser authUser = new AuthUser(userModel);
        System.out.println(authUser.getAuthorities());
        return authUser;
    }

}
