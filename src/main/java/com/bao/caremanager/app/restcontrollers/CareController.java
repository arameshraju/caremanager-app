package com.bao.caremanager.app.restcontrollers;


import com.bao.caremanager.app.model.Doctor;
import com.bao.caremanager.app.model.Patient;
import com.bao.caremanager.app.service.CareService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CareController {

     @Autowired
     CareService care;

    @RequestMapping("/getdoctors")
    public ResponseEntity<Object> getSample()
    {
//        return care.getSample();
        return  new ResponseEntity<>(care.getDoctor(), HttpStatus.OK);

    }
    @RequestMapping("/searchpatient")
    public ResponseEntity<Object> searchPatient(@RequestBody String search)
    {
        System.out.println(search);
        return  new ResponseEntity<>(care.getDoctor(), HttpStatus.OK);

    }

    @PostMapping("/doctor")
    public ResponseEntity<?> addDoctor(@RequestBody Doctor doctor)
    {
        System.out.println("data " + doctor.getName());
        care.InsertDoctor(doctor);
        return  new ResponseEntity<>(doctor, HttpStatus.OK);
    }
    @PostMapping("/patient")
    public ResponseEntity<?> addDoctor(@RequestBody Patient patient)
    {
        System.out.println("data " + patient.getName());
        care.insertPatient(patient);
        return  new ResponseEntity<>(patient, HttpStatus.OK);
    }
}
