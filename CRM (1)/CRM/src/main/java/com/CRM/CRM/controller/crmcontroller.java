package com.CRM.CRM.controller;

import com.CRM.CRM.entity.Employ;
import com.CRM.CRM.service.crmservice;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employ")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class crmcontroller {

    private final crmservice crmservice;

    @PostMapping
    public Employ postEmploy(@RequestBody Employ employ) {
        return crmservice.postEmploy(employ);
    }

    @GetMapping
    public List<Employ> getAllEmploy() {
        return crmservice.getAllEmploy();
    }

    @PutMapping("/{id}")
    public Employ updateEmploy(@PathVariable Long id, @RequestBody Employ employ) {
        return crmservice.updateEmploy(id, employ);
    }

    @DeleteMapping("/{id}")
    public String deleteEmploy(@PathVariable Long id) {
        crmservice.deleteEmploy(id);
        return "Deleted Successfully";
    }
}