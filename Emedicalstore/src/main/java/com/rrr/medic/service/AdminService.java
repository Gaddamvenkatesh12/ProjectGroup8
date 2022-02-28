package com.rrr.medic.service;

import java.util.List;

import com.rrr.medic.model.AdminLogin;
import com.rrr.medic.model.UserAuthenticationStatus;

public interface AdminService
{
	AdminLogin getAdminById(int id);
	List<AdminLogin> getAdminDetails();
	void insertAdminLogin (AdminLogin Al);
	UserAuthenticationStatus getStatus(String name , String password);
}
