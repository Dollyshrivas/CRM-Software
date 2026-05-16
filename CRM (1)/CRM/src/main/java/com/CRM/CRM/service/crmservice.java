package com.CRM.CRM.service;

import com.CRM.CRM.entity.Employ;
import com.CRM.CRM.repository.Employrepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class crmservice {

    private final Employrepository employrepository;

    // CREATE
    public Employ postEmploy(Employ employ) {
        return employrepository.save(employ);
    }

    // READ
    public List<Employ> getAllEmploy() {
        return employrepository.findAll();
    }

    // UPDATE
    public Employ updateEmploy(Long id, Employ employ) {
        Employ existing = employrepository.findById(id).orElseThrow();

        existing.setName(employ.getName());
        existing.setEmail(employ.getEmail());

        return employrepository.save(existing);
    }

    // DELETE
    public void deleteEmploy(Long id) {
        employrepository.deleteById(id);
    }
}