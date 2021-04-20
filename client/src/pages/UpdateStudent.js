import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import PreviousInstitute from '../components/Students/PreviousInstitute';


// Import for intraction with Database
import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UpdateStudentRecord } from '../mutations/studentmutation';
import { getsingleStudent } from '../queries/studentquery';

function AddStudent() {

    const { id } = useParams();
    const [prevInst, setPrevInst] = useState([{}]);
    const [savetype, setSavetype] = useState('')
    const [UPDATESTD] = useMutation(UpdateStudentRecord);

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

    let defaultlastnameInput;
    let defaultfirstnameInput;
    let defaultgenderInput;
    let defaultguardianInput;
    let defaultcnicInput;
    let defaultdobInput;
    let defaultrollnumberInput;
    let defaultadmissonnumberInput;
    let defaultadmissondateInput;
    let defaultreligionInput;
    let defaultcastInput;
    let defaultclassInput;
    let defaultsectionInput;
    let defaultclassshiftInput;
    let defaultfathernameInput;
    let defaultmothernameInput;
    let defaultfatheroccupInput;
    let defaultmotheroccupInput;
    let defaultfathercnicInput;
    let defaultmothercnicInput;
    let defaultphonenumberInput;
    let defaultnationalityInput;
    let defaultpressentaddressInput;
    let defaultparmanentaddressInput;
    let defaultPV;

    if (id) {
        ClassID();
        console.log('Update Student Section')
    }
    // Logic For Updating Particular Student Record
    function ClassID() {
        let { loading, error, data } = useQuery(getsingleStudent, {
            variables: { id }
        });
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        let stu = data.getStudents;
        console.log(stu);

        defaultfirstnameInput = stu.firstName;
        defaultlastnameInput = stu.lastName;
        defaultgenderInput = stu.gender;
        defaultguardianInput = stu.guardianName;
        defaultcnicInput = stu.CNIC;
        defaultdobInput = stu.DOB;
        defaultrollnumberInput = stu.rollNumber;
        defaultadmissonnumberInput = stu.admissonNumber;
        defaultadmissondateInput = stu.admissonNumber;
        defaultreligionInput = stu.religion;
        defaultcastInput = stu.cast;
        defaultclassInput = stu.class;
        defaultsectionInput = stu.section;
        defaultclassshiftInput = stu.classShift;
        defaultfathernameInput = stu.fatherName;
        defaultmothernameInput = stu.motherName;
        defaultfatheroccupInput = stu.fatherOccupation;
        defaultmotheroccupInput = stu.motherOccupation;
        defaultfathercnicInput = stu.fatherCNIC;
        defaultmothercnicInput = stu.motherCNIC;
        defaultphonenumberInput = stu.phoneNumber;
        defaultnationalityInput = stu.nationality;
        defaultpressentaddressInput = stu.presentAddress;
        defaultparmanentaddressInput = stu.parmanentAddress;
        defaultPV = stu.previousInstitute;
    }

    // Function is called when user Submit the Form
    function studentSubmit(event) {
        event.preventDefault();

        alert(firstnameInput.current.value);
        alert(defaultfirstnameInput);
        UPDATESTD(
            {
                variables: {
                    StuID: id,
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
                }
            }
        );
        defaultfirstnameInput = '';
        defaultlastnameInput = '';
        defaultgenderInput = 'Male';
        defaultguardianInput = '';
        defaultcnicInput = '';
        defaultdobInput = '';
        defaultrollnumberInput = '';
        defaultadmissonnumberInput = '';
        defaultadmissondateInput = '';
        defaultreligionInput = '';
        defaultcastInput = '';
        defaultclassInput = 'Class';
        defaultsectionInput = 'Section';
        defaultclassshiftInput = 'Class Shift';
        defaultfathernameInput = '';
        defaultmothernameInput = '';
        defaultfatheroccupInput = '';
        defaultmotheroccupInput = '';
        defaultfathercnicInput = '';
        defaultmothercnicInput = '';
        defaultphonenumberInput = '';
        defaultnationalityInput = '';
        defaultpressentaddressInput = '';
        defaultparmanentaddressInput = '';

        alert("Student Added Successfully");

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
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="First Name"
                                        defaultValue={defaultfirstnameInput}
                                        ref={firstnameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Last Name"
                                        defaultValue={defaultlastnameInput}
                                        ref={lastnameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <select
                                        defaultValue={defaultgenderInput}
                                        ref={genderInput}
                                    >
                                        <option>Male</option>
                                        <option>female</option>
                                        <option>Other</option>
                                    </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Guardian Name"
                                        defaultValue={defaultguardianInput}
                                        ref={guardianInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="CNIC/B-form"
                                        defaultValue={defaultcnicInput}
                                        ref={cnicInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Date Of Birth"
                                        defaultValue={defaultdobInput}
                                        ref={dobInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Roll No"
                                        defaultValue={defaultrollnumberInput}
                                        ref={rollnumberInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Admission No"
                                        defaultValue={defaultadmissonnumberInput}
                                        ref={admissonnumberInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Admisson Date"
                                        defaultValue={defaultadmissondateInput}
                                        ref={admissondateInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Religion"
                                        defaultValue={defaultreligionInput}
                                        ref={religionInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Cast"
                                        defaultValue={defaultcastInput}
                                        ref={castInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Photo"
                                        type='file'
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="AcademicInformation">
                            <h3>Academic Information</h3>
                            <Row>
                                <Col lg={4} md={4} sm={6} xs={12}>
                                    <select
                                        ref={classInput}
                                    >
                                        <option>Class</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select></Col>
                                <Col lg={4} md={4} sm={6} xs={12}>
                                    <select
                                        defaultValue={defaultsectionInput}
                                        ref={sectionInput}
                                    >
                                        <option>Section</option>
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>Blue</option>
                                    </select></Col>
                                <Col lg={4} md={4} sm={6} xs={12}><select
                                    defaultValue={defaultclassshiftInput}
                                    ref={classshiftInput}
                                >
                                    <option>Class Shift</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </select></Col>
                            </Row>
                            <PreviousInstitute spv={setPrevInst} dspv={defaultPV} />
                        </div>
                        <div className="FamilyInformation">
                            <h3>Parents Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Father Name"
                                        defaultValue={defaultfathernameInput}
                                        ref={fathernameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Mother Name"
                                        defaultValue={defaultmothernameInput}
                                        ref={mothernameInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Father Occupation"
                                        defaultValue={defaultfatheroccupInput}
                                        ref={fatheroccupInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Mother Occupation"
                                        defaultValue={defaultmotheroccupInput}
                                        ref={motheroccupInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Father CNIC"
                                        defaultValue={defaultfathercnicInput}
                                        ref={fathercnicInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Mother CNIC"
                                        defaultValue={defaultmothercnicInput}
                                        ref={mothercnicInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Phone Number"
                                        defaultValue={defaultphonenumberInput}
                                        ref={phonenumberInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Nationality"
                                        defaultValue={defaultnationalityInput}
                                        ref={nationalityInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Present Address"
                                        defaultValue={defaultpressentaddressInput}
                                        ref={pressentaddressInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <input
                                        placeholder="Parmanent Address"
                                        defaultValue={defaultparmanentaddressInput}
                                        ref={parmanentaddressInput}
                                    />
                                </Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div class="SaveBTN">
                            <button>Cancel</button>
                            <button type='submit' onClick={() => { setSavetype("Save") }}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;
