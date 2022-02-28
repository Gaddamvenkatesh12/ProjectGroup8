package com.rrr.medic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrr.medic.model.AdminLogin;
import com.rrr.medic.model.UserAuthenticationStatus;
import com.rrr.medic.model.UserLogin;
import com.rrr.medic.service.AdminService;

@RestController
@RequestMapping("/api")
public class AdminController {
	@Autowired
	private AdminService adminservice;

	@PostMapping("/admins")
	public ResponseEntity insert(@RequestBody AdminLogin Al) {
		adminservice.insertAdminLogin(Al);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping("/admins")
	public ResponseEntity<List<AdminLogin>> getAdminDetails() {
		List<AdminLogin> Al = adminservice.getAdminDetails();
		return new ResponseEntity<List<AdminLogin>>(Al, HttpStatus.OK);

	}

	@GetMapping("/admins/{id}")
	public ResponseEntity<AdminLogin> getAdminById(@PathVariable("id") int id) {
		AdminLogin Al = adminservice.getAdminById(id);
		return ResponseEntity.ok(Al);

	}
	@PostMapping("/admins/logins")
	public ResponseEntity<UserAuthenticationStatus> authentacated(@RequestBody AdminLogin admin)
	{
		System.out.println(admin.getName() +"\t" +admin.getPassword());
		UserAuthenticationStatus status = adminservice.getStatus(admin.getName(), admin.getPassword());
		return  new ResponseEntity<UserAuthenticationStatus>(status , HttpStatus.ACCEPTED);
		
	}

}
