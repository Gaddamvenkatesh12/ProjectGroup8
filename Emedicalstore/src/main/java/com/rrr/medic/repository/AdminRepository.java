package com.rrr.medic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrr.medic.model.AdminLogin;


@Repository
public interface AdminRepository extends JpaRepository<AdminLogin, Integer>
{
	AdminLogin findByNameAndPassword(String name , String password);

}
