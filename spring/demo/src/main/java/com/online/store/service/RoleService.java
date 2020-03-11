package com.online.store.service;

import com.online.store.entity.Role;

import java.util.Optional;

public interface RoleService {
    Iterable<Role> getAllRoles();
    Optional<Role> getRoleById(Long id);
}
