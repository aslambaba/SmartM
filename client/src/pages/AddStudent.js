import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Container, Row, Col } from 'react-bootstrap';

function AddStudent() {
    return (
        <div>
            <MainMenu />
            <div className='AddStudents'>
                <h3>Add Student</h3>
                <div className="FormBody">
                    <img src={StudentIcon} />
                    <form>
                        <div className='PersonalInfo'>
                            <h3>Student Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="First Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Last Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><select>
                                    <option>Male</option>
                                    <option>female</option>
                                    <option>Other</option>
                                </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Guardian Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="CNIC/B-form" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Date Of Birth" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Roll No" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Admission No" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Religion" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className="FamilyInformation">
                            <h3>Parents Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Father Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Mother Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Father Occupation" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Mother Occupation" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Father CNIC" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Mother CNIC" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Phone Number" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Nationality" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Present Address" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Parmanent Address" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className="AcademicInformation">
                            <h3>Academic Information</h3>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}><input placeholder="1) Previous School" /></Col>
                                <Col lg={12} md={12} sm={12} xs={12}><input placeholder="2) Previous School" /></Col>
                            </Row>
                        </div>
                        <div class="SaveBTN">
                            <button>Cancel</button>
                            <button>Save</button>
                            <button>Save & Add New</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;