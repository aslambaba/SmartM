import React from 'react'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import './style/viewstudent.css';
import StudentIcon from './images/studentIcon.jpg';

import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { getTeacher } from '../queries/teacherquery';


function ViewStudent() {

    const { teacherId } = useParams();
    let { loading, error, data } = useQuery(getTeacher, {
        variables: { teacherId }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let singleTeacher = data.getTeacher;

    return (
        <div>
            <MainMenu />
            <div className='ViewStudentMain'>
                <h2>{`${singleTeacher.firstName} ${singleTeacher.lastName}`}</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Teacher ID</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>#{singleTeacher.teacherID}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{`${singleTeacher.firstName} ${singleTeacher.lastName}`}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Father Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.fatherName}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Student CNIC</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.CNIC}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Age</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>18</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Date of Birth</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.DOB}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Gender</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.gender}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Religion</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.religion}</p>
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
                <h2>Contact Information</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Email</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.email}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Phone Number</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.phoneNumber}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Address</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{singleTeacher.address}</p>
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