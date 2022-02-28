package com.rrr.medic.service;

import java.util.List;

import com.rrr.medic.model.UserAuthenticationStatus;
import com.rrr.medic.model.UserLogin;

public interface UserService
{
	UserLogin getuserById(int userId);
	List<UserLogin> getUserLogin();
	void insertUserLogin(UserLogin ul);
	UserAuthenticationStatus getStatus(String userName , String password);
	

}

