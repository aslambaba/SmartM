import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import AddQualificationField from '../components/Teachers/AddQualificationField';
import WorkExperince from '../components/Teachers/WorkExperince';

import { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AddNewTeacher } from '../mutations/teachermutation';

function AddStudent() {
    const [savetype, setSavetype] = useState('')

    let [AddStudent] = useMutation(AddNewTeacher);

    let firstNameInput = useRef();
    let lastNameInput = useRef();
    let genderInput = useRef();
    let fatherNameInput = useRef();
    let CNICInput = useRef();
    let DOBInput = useRef();
    let teacherIDInput = useRef();
    let religionInput = useRef();
    let emailInput = useRef();
    let phoneNumberInput = useRef();
    let addressInput = useRef();

    function SubmitTeacherRecord(event) {
        event.preventDefault();
        AddStudent(
            {
                variables: {
                    firstName: firstNameInput.current.value,
                    lastName: lastNameInput.current.value,
                    gender: genderInput.current.value,
                    fatherName: fatherNameInput.current.value,
                    CNIC: CNICInput.current.value,
                    DOB: parseInt(DOBInput.current.value),
                    teacherID: parseInt(teacherIDInput.current.value),
                    religion: religionInput.current.value,
                    email: emailInput.current.value,
                    phoneNumber: phoneNumberInput.current.value,
                    address: addressInput.current.value,
                }
            }
        );
        firstNameInput = '';
        lastNameInput = '';
        genderInput = '';
        fatherNameInput = '';
        CNICInput = '';
        DOBInput = '';
        teacherIDInput = '';
        religionInput = '';
        emailInput = '';
        phoneNumberInput = '';
        addressInput = '';
    }
    return (
        <div>
            <MainMenu />
            <div className='AddStudents'>
                <h3>Add Teacher</h3>
                <div className="FormBody">
                    <img src={StudentIcon} />
                    <form onSubmit={SubmitTeacherRecord}>
                        <div className='PersonalInfo'>
                            <h3>Teacher Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="First Name" ref={firstNameInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Last Name" ref={lastNameInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><select ref={genderInput}>
                                    <option>Male</option>
                                    <option>female</option>
                                    <option>Other</option>
                                </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Father Name" ref={fatherNameInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="CNIC Number" ref={CNICInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Date Of Birth" ref={DOBInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Teacher ID" ref={teacherIDInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Religion" ref={religionInput} /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className='PersonalInfo'>
                            <h3>Contact Information</h3>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12}><input placeholder="Email" ref={emailInput} /></Col>
                                <Col lg={6} md={6} sm={6} xs={12}><input placeholder="Phone Number" ref={phoneNumberInput} /></Col>
                                <Col lg={12} md={12} sm={12} xs={12}><input placeholder="Address" ref={addressInput} /></Col>
                            </Row>
                        </div>
                        <div className="QualificationInformation">
                            <h3>Qualifications</h3>
                            <AddQualificationField />
                        </div>
                        <div className="WorkInformation">
                            <h3>Previous Work Experinces</h3>
                            <WorkExperince />
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