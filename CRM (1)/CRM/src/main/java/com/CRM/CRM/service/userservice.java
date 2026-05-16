package com.CRM.CRM.service;

import com.CRM.CRM.entity.User;
import com.CRM.CRM.repository.Userrepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class userservice {

    private final Userrepository userrepository;

    public User registerUser(User user) {
        return userrepository.save(user);
    }

    public User loginUser(User user) {
        return userrepository.findByEmailAndPassword(
                user.getEmail(),
                user.getPassword()
        );
    }
}