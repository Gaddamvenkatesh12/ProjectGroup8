package com.rrr.medic;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rrr.medic.model.Medicine;
import com.rrr.medic.model.UserLogin;
import com.rrr.medic.repository.MedicineRepository;
import com.rrr.medic.repository.UserRepository;



//import antlr.collections.List;



@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class EmedicalstoreApplicationTests {

	
	@Autowired
	MedicineRepository mRepo;
	@Autowired
	UserRepository uRepo;
	

	@Test
	@Order(1)
	public void testCreate() {
		
		Medicine m = new Medicine();
		m.setId(null);
		m.setName("rk");
		m.setCompany("lot");
		m.setPrice("200");
		m.setPicByte(null);
		Medicine m1=mRepo.save(m);
		assertNotNull(m1);
		
	}
	
		@Test
		@Order(2)
		public void testReadAll() {
    		java.util.List<Medicine> list =   mRepo.findAll();
    		assertThat(list).size().isGreaterThan(0);
    		

    	}
		
		@Test
		@Order(3)
		public void testSingleProduct () {
			Medicine medicine = mRepo.findById(37L).get();
			assertEquals("200",medicine.getPrice());
		}
		
		@Test
		@Order(4)
		public void testUpdate() {
			Medicine m = mRepo.findById(37L).get();
			m.setPrice("100");
			mRepo.save(m);
			assertNotEquals("200",mRepo.findById(37L).get().getPrice());
			
		}
		
		@Test
		@Order(5)
		public void testDelete() {
			mRepo.deleteById(37L);
			assertThat(mRepo.existsById(37L)).isFalse();
		}
		@Test
		@Order(6)
		public void testCreate1() {
			
			UserLogin u = new UserLogin();
			u.setUserId(45);
			u.setUserName("rk");
			u.setPassword("lot");
			u.setEmail("e@r");
			u.setPhone("200");
			u.setAdress(null);
			UserLogin u1=uRepo.save(u);
			assertNotNull(u1);
			
		}
		@Test
		@Order(7)
		public void testReadAll1() {
    		java.util.List<UserLogin> list =   uRepo.findAll();
    		assertThat(list).size().isGreaterThan(0);
    		

    	}
		
		
		
	
}
















