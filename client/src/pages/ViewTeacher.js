import React from 'react'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import './style/viewstudent.css';
import StudentIcon from './images/studentIcon.jpg';


function ViewStudent() {
    return (
        <div>
            <MainMenu />
            <div className='ViewStudentMain'>
                <h2>Aslam Sarfraz</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Roll No</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>#1897</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>Aslam Sarfraz</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Guardian Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>Allama Iqbal</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Student CNIC/B-Form</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>35202-3876948-9</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Age</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>18</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Gender</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>Male</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Religion</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>Islam</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className='StudentImageView'>
                            <img src={StudentIcon} />
                        </div>
                    </Col>
                </Row>
                <h2>Academic Record</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Roll No</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>#1897</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Admission No</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>#126332</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Class</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>10th</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Section</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>Blue</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='studentPerformanceRecord'>

                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='studentDuesRecord'>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2>Qualifucations</h2>
                        <div className='previousSchoolsSec'>
                            <h3>Allient School Bahawalpur</h3>
                            <h3>Superior College Bahawalpur</h3>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2>Previous Experince</h2>
                        <div className='addressSec'>
                            <h3>Present Address: Lahore Gulburg Pahse II</h3>
                            <h3>Permanent Address: Karachi Shahdra Pahse II</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ViewStudent;