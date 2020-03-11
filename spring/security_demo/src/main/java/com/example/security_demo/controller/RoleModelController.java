package com.example.security_demo.controller;

import com.example.security_demo.models.RoleModel;
import com.example.security_demo.service.impl.RoleModelServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleModelController {

    @Autowired
    private RoleModelServiceImpl roleModelService;

    @GetMapping("")
    private List<RoleModel> getAllRoles(){
        return roleModelService.getAllRoles();
    }

    @GetMapping("/{id}")
    private RoleModel getRoleById(@PathVariable Long id){
        return roleModelService.getRoleById(id);
    }
}
