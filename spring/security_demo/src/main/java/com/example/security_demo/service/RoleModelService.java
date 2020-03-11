package com.example.security_demo.service;

import com.example.security_demo.models.RoleModel;

import java.util.List;

public interface RoleModelService {
    List<RoleModel> getAllRoles();
    RoleModel getRoleById(Long id);
}
