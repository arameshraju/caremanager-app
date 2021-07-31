package com.bao.caremanager.app.data;

import com.bao.caremanager.app.model.Doctor;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface CareBaseMapper {
    List<HashMap> getDoctor();
    void insertDoctor(Doctor doc);
}
