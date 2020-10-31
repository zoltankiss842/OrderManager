package com.zoltankiss842.CRUDApp.repository;

import com.zoltankiss842.CRUDApp.entity.ERole;
import com.zoltankiss842.CRUDApp.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
