package com.bao.caremanager.app.service;

import com.bao.caremanager.app.model.Doctor;
import com.bao.caremanager.app.model.Patient;
import org.jvnet.hk2.annotations.Service;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public interface CareService {
    List<HashMap>  getDoctor();
    void InsertDoctor(Doctor doc);
    void insertPatient(Patient patient);
}
