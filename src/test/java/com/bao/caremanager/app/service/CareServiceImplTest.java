package com.bao.caremanager.app.service;

import com.bao.caremanager.app.model.Doctor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class CareServiceImplTest {
     CareService care = new CareServiceImpl();

    @Test
    void insertDoctor() {
    Doctor doc=new Doctor();
    doc.setDid(0);
    doc.setName("Ramesh");
    doc.setQualification("BL");
    doc.setMobile("9866");
    doc.setEmail("email@email.com");
    doc.setAddress("ramesh");
    doc.setReg("dddd");
    care.InsertDoctor(doc);
//        care.getExpriry();
    }
}