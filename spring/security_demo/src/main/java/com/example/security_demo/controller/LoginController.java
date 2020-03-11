package com.example.security_demo.controller;

import com.example.security_demo.jwt.JwtTokenProvider;
import com.example.security_demo.models.UserLogin;
import com.example.security_demo.models.UserModel;
import com.example.security_demo.service.UserModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final UserModelService userModelService;

    private final JwtTokenProvider jwtTokenProvider;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserModelService userModelService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userModelService = userModelService;
    }

    @PostMapping
    private ResponseEntity login(@RequestBody UserLogin userLogin) {
        try {
            String username = userLogin.getEmail();
            UserModel userModel = userModelService.getUserByEmail(username);

            if (userModel == null) {
                throw new UsernameNotFoundException("User: " + username + " not found!");
            }

            Authentication authentication =  new UsernamePasswordAuthenticationToken(
                    username,
                    userLogin.getPassword()
            );
            authenticationManager.authenticate(authentication);

            String token = jwtTokenProvider.createToken(username, userModel.getRole());

            Map<Object, Object> response = new HashMap<>();
            response.put("email", username);
            response.put("token", token);

            return ResponseEntity.ok(response);

        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }

    @GetMapping("/get")
    private String Get(){
        return "GetMethod!";
    }

}
