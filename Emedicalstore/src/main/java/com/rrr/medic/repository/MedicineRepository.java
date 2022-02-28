package com.rrr.medic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrr.medic.model.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
