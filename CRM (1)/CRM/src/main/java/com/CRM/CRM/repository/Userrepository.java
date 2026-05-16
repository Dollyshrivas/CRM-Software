package com.CRM.CRM.repository;

import com.CRM.CRM.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Userrepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);

}