package com.online.store.repository;

import com.online.store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByIdUser(Long id);
    User findByEmail(String  email);
}
