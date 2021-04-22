import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import AddQualificationField from '../components/Teachers/AddQualificationField';
import WorkExperince from '../components/Teachers/WorkExperince';

import { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UpdateTeacherRecord } from '../mutations/teachermutation';

import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { getTeacher } from '../queries/teacherquery';

function UpdateTeacher() {

    const [savetype, setSavetype] = useState('')
    const [qualificationInfo, SetqualificationInfo] = useState([{}]);
    const [workEx, SetWorkEx] = useState([{}]);

    const { teacherId } = useParams();

    let [UpdateTeacher] = useMutation(UpdateTeacherRecord);

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

    let defaultfirstNameInput = '';
    let defaultlastNameInput = '';
    let defaultgenderInput = '';
    let defaultfatherNameInput = '';
    let defaultCNICInput = '';
    let defaultDOBInput = '';
    let defaultteacherIDInput = '';
    let defaultreligionInput = '';
    let defaultemailInput = '';
    let defaultphoneNumberInput = '';
    let defaultaddressInput = '';

    if (teacherId) {
        GetTeacher();
        console.log('Update Teacher Section')
    }
    // Logic For Updating Particular Student Record
    function GetTeacher() {
        let { loading, error, data } = useQuery(getTeacher, {
            variables: { teacherId }
        });
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        let singleTeacher = data.getTeacher;
        console.log(singleTeacher);


        defaultfirstNameInput = singleTeacher.firstName;
        defaultlastNameInput = singleTeacher.lastName;
        defaultgenderInput = singleTeacher.gender;
        defaultfatherNameInput = singleTeacher.fatherName;
        defaultCNICInput = singleTeacher.CNIC;
        defaultDOBInput = singleTeacher.DOB;
        defaultteacherIDInput = singleTeacher.teacherID;
        defaultreligionInput = singleTeacher.religion;
        defaultemailInput = singleTeacher.email;
        defaultphoneNumberInput = singleTeacher.phoneNumber;
        defaultaddressInput = singleTeacher.address;

    }

    function SubmitTeacherRecord(event) {
        event.preventDefault();
        UpdateTeacher(
            {
                variables: {
                    tchID: teacherId,
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
                    // qualificationsInput: qualificationInfo,
                    // WorkExperinceInput: workEx,
                }
            }
        );
        firstNameInput.current.value = '';
        lastNameInput.current.value = '';
        genderInput.current.value = '';
        fatherNameInput.current.value = '';
        CNICInput.current.value = '';
        DOBInput.current.value = '';
        teacherIDInput.current.value = '';
        religionInput.current.value = '';
        emailInput.current.value = '';
        phoneNumberInput.current.value = '';
        addressInput.current.value = '';
        if (savetype == 'Save') {
            window.location.replace("/students");
        }
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
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="First Name"
                                        ref={firstNameInput}
                                        defaultValue={defaultfirstNameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Last Name"
                                        ref={lastNameInput}
                                        defaultValue={defaultlastNameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}><select ref={genderInput}>
                                    <option>Male</option>
                                    <option>female</option>
                                    <option>Other</option>
                                </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Father Name"
                                        ref={fatherNameInput}
                                        defaultValue={defaultfatherNameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="CNIC Number"
                                        ref={CNICInput}
                                        defaultValue={defaultCNICInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Date Of Birth"
                                        ref={DOBInput}
                                        defaultValue={defaultDOBInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Teacher ID"
                                        ref={teacherIDInput}
                                        defaultValue={defaultteacherIDInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Religion"
                                        ref={religionInput}
                                        defaultValue={defaultreligionInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className='PersonalInfo'>
                            <h3>Contact Information</h3>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12}>
                                    <input
                                        placeholder="Email"
                                        ref={emailInput}
                                        defaultValue={defaultemailInput}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={12}>
                                    <input
                                        placeholder="Phone Number"
                                        ref={phoneNumberInput}
                                        defaultValue={defaultphoneNumberInput}
                                    />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <input
                                        placeholder="Address"
                                        ref={addressInput}
                                        defaultValue={defaultaddressInput}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="QualificationInformation">
                            <h3>Qualifications</h3>
                            <AddQualificationField sqi={SetqualificationInfo} />
                        </div>
                        <div className="WorkInformation">
                            <h3>Previous Work Experinces</h3>
                            <WorkExperince swe={SetWorkEx} />
                        </div>
                        <div class="SaveBTN">
                            <button>Cancel</button>
                            <button type='submit'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateTeacher;