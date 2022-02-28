package com.rrr.medic;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rrr.medic.model.Medicine;
import com.rrr.medic.model.UserLogin;
import com.rrr.medic.repository.UserRepository;
@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)

class SignUpTests {
	@Autowired
	UserRepository uRepo;

	@Test
	@Order(1)
	public void testCreate2() {
		
		UserLogin u = new UserLogin();
		u.setUserId(48);
		u.setUserName("rk");
		u.setPassword("lot");
		u.setEmail("e@r");
		u.setPhone("200");
		u.setAdress(null);
		UserLogin u1=uRepo.save(u);
		assertNotNull(u1);
		
	}
	@Test
	@Order(2)
	public void testReadAll2() {
		java.util.List<UserLogin> list =   uRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
		

	}
	@Test
	@Order(3)
	public void testUpdate2() {
		UserLogin u = uRepo.findById(37).get();
		u.setUserName("100");
		uRepo.save(u);
		assertNotEquals("200",uRepo.findById(37).get().getUserName());
		
	}
}
