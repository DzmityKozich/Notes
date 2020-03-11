package com.online.store.controller;

import com.online.store.entity.User;
import com.online.store.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/{email}", method = RequestMethod.GET)
    private User getUserByEmail(@PathVariable String email){
        return userService.getByEmail(email);
    }

    @RequestMapping(method = RequestMethod.POST)
    private User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void deleteUser(@PathVariable Long id){
        userService.deleteUserById(id);
    }
}
