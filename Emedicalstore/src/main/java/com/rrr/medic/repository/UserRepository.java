package com.rrr.medic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrr.medic.model.UserLogin;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Integer>
{
	UserLogin findByUserNameAndPassword(String userName , String password);

}
