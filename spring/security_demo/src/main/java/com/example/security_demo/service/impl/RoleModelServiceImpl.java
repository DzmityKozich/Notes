package com.example.security_demo.service.impl;

import com.example.security_demo.models.RoleModel;
import com.example.security_demo.service.RoleModelService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class RoleModelServiceImpl  implements RoleModelService {

    @Value("${backend.server.url}")
    private String backend;

    @Override
    public List<RoleModel> getAllRoles() {
        RestTemplate restTemplate = new RestTemplate();
        RoleModel[] roleModels = restTemplate.getForObject(backend + "/roles", RoleModel[].class);
        return roleModels == null ? Collections.emptyList() : Arrays.asList(roleModels);
    }

    @Override
    public RoleModel getRoleById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backend + "/roles" + id, RoleModel.class);
    }
}
