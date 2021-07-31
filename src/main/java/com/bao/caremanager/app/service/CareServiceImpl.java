package com.bao.caremanager.app.service;

import com.bao.caremanager.app.data.CareBaseMapper;
import com.bao.caremanager.app.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public class CareServiceImpl implements   CareService{

    @Autowired
    CareBaseMapper mapper;

    @Override
    public List<HashMap> getDoctor() {
        return mapper.getDoctor();
    }

    @Override
    public void InsertDoctor(Doctor doc) {
        System.out.print(doc.getName());
        mapper.insertDoctor(doc);
    }
}
