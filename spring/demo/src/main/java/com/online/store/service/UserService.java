package com.online.store.service;

import com.online.store.entity.User;

public interface UserService {
    Iterable<User> getAllUsers();
    User saveUser(User user);
    User getByEmail(String email);
    void deleteUserById(Long id);
}
