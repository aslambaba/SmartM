import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import PreviousInstitute from '../components/Students/PreviousInstitute';


// Import for intraction with Database
import { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AddNewStudent } from '../mutations/studentmutation';

function AddStudent() {

    const [prevInst, setPrevInst] = useState([{}]);
    const [savetype, setSavetype] = useState('')
    const [AddNewSTD] = useMutation(AddNewStudent);

    // Use UseRef Hook to get values from form
    let firstnameInput = useRef();
    let lastnameInput = useRef();
    let genderInput = useRef();
    let guardianInput = useRef();
    let cnicInput = useRef();
    let dobInput = useRef();
    let rollnumberInput = useRef();
    let admissonnumberInput = useRef();
    let admissondateInput = useRef();
    let religionInput = useRef();
    let castInput = useRef();
    let classInput = useRef();
    let sectionInput = useRef();
    let classshiftInput = useRef();
    let fathernameInput = useRef();
    let mothernameInput = useRef();
    let fatheroccupInput = useRef();
    let motheroccupInput = useRef();
    let fathercnicInput = useRef();
    let mothercnicInput = useRef();
    let phonenumberInput = useRef();
    let nationalityInput = useRef();
    let pressentaddressInput = useRef();
    let parmanentaddressInput = useRef();

    // Function is called when user Submit the Form
    function studentSubmit(event) {
        event.preventDefault();
        AddNewSTD(
            {
                variables: {
                    firstName: firstnameInput.current.value,
                    lastName: lastnameInput.current.value,
                    gender: genderInput.current.value,
                    guardianName: guardianInput.current.value,
                    cnic: cnicInput.current.value,
                    dob: parseInt(dobInput.current.value),
                    rollNumber: parseInt(rollnumberInput.current.value),
                    admissonNumber: parseInt(admissonnumberInput.current.value),
                    admissonDate: parseInt(admissondateInput.current.value),
                    religion: religionInput.current.value,
                    cast: castInput.current.value,
                    class: classInput.current.value,
                    section: sectionInput.current.value,
                    classShift: classshiftInput.current.value,
                    fatherName: fathernameInput.current.value,
                    motherName: mothernameInput.current.value,
                    fatherOccupation: fatheroccupInput.current.value,
                    motherOccupation: motheroccupInput.current.value,
                    fatherCNIC: fathercnicInput.current.value,
                    motherCNIC: mothercnicInput.current.value,
                    phoneNumber: phonenumberInput.current.value,
                    nationality: nationalityInput.current.value,
                    presentAddress: pressentaddressInput.current.value,
                    parmanentAddress: parmanentaddressInput.current.value,
                    previousInstitute: prevInst,
                }
            }
        );
        firstnameInput.current.value = '';
        lastnameInput.current.value = '';
        genderInput.current.value = 'Male';
        guardianInput.current.value = '';
        cnicInput.current.value = '';
        dobInput.current.value = '';
        rollnumberInput.current.value = '';
        admissonnumberInput.current.value = '';
        admissondateInput.current.value = '';
        religionInput.current.value = '';
        castInput.current.value = '';
        classInput.current.value = 'Class';
        sectionInput.current.value = 'Section';
        classshiftInput.current.value = 'Class Shift';
        fathernameInput.current.value = '';
        mothernameInput.current.value = '';
        fatheroccupInput.current.value = '';
        motheroccupInput.current.value = '';
        fathercnicInput.current.value = '';
        mothercnicInput.current.value = '';
        phonenumberInput.current.value = '';
        nationalityInput.current.value = '';
        pressentaddressInput.current.value = '';
        parmanentaddressInput.current.value = '';

        alert("Student Added Successfully");
        // if (savetype == 'Save') {
        //     window.location.replace("/students");
        // }

    }
    return (
        <div>
            <MainMenu />
            <div className='AddStudents'>
                <h3>Add Student</h3>
                <div className="FormBody">
                    <img src={StudentIcon} />
                    <form onSubmit={studentSubmit}>
                        <div className='PersonalInfo'>
                            <h3>Student Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={firstnameInput} placeholder="First Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={lastnameInput} placeholder="Last Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><select ref={genderInput}>
                                    <option>Male</option>
                                    <option>female</option>
                                    <option>Other</option>
                                </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={guardianInput} placeholder="Guardian Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={cnicInput} placeholder="CNIC/B-form" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={dobInput} placeholder="Date Of Birth" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={rollnumberInput} placeholder="Roll No" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={admissonnumberInput} placeholder="Admission No" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={admissondateInput} placeholder="Admisson Date" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={religionInput} placeholder="Religion" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={castInput} placeholder="Cast" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className="AcademicInformation">
                            <h3>Academic Information</h3>
                            <Row>
                                <Col lg={4} md={4} sm={6} xs={12}><select ref={classInput}>
                                    <option>Class</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></Col>
                                <Col lg={4} md={4} sm={6} xs={12}><select ref={sectionInput}>
                                    <option>Section</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                    <option>Blue</option>
                                </select></Col>
                                <Col lg={4} md={4} sm={6} xs={12}><select ref={classshiftInput}>
                                    <option>Class Shift</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </select></Col>
                            </Row>
                            <PreviousInstitute spv={setPrevInst} />
                        </div>
                        <div className="FamilyInformation">
                            <h3>Parents Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={fathernameInput} placeholder="Father Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={mothernameInput} placeholder="Mother Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={fatheroccupInput} placeholder="Father Occupation" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={motheroccupInput} placeholder="Mother Occupation" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={fathercnicInput} placeholder="Father CNIC" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={mothercnicInput} placeholder="Mother CNIC" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={phonenumberInput} placeholder="Phone Number" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={nationalityInput} placeholder="Nationality" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={pressentaddressInput} placeholder="Present Address" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input ref={parmanentaddressInput} placeholder="Parmanent Address" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div class="SaveBTN">
                            <button>Cancel</button>
                            <button type='submit' onClick={() => { setSavetype("Save") }}>Save</button>
                            <button type='submit' onClick={() => { setSavetype("SaveandAdd") }}>Save & Add New</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;