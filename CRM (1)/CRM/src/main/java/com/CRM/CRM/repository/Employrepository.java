package com.CRM.CRM.repository;

import com.CRM.CRM.entity.Employ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employrepository extends JpaRepository<Employ, Long> {
}
