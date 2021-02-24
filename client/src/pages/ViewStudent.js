import React from 'react'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import './style/viewstudent.css';
import StudentIcon from './images/studentIcon.jpg';
import { useParams } from "react-router-dom";


import { useQuery } from '@apollo/client';
import { getsingleStudent } from '../queries/studentquery';

function ViewStudent() {

    const { id } = useParams();
    let { loading, error, data } = useQuery(getsingleStudent, {
        variables: { id }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    let stu = data.getStudents;
    return (

        <div>
            <MainMenu />
            <div className='ViewStudentMain'>
                <h2>{`${stu.firstName} ${stu.lastName}`}</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Roll No</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.rollNumber}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{`${stu.firstName} ${stu.lastName}`}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Guardian Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.guardianName}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Student CNIC/B-Form</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.CNIC}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Date of Birth</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.DOB}</p>
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
                                    <p>{stu.gender}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Religion</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.religion}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Cast</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.cast}</p>
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
                                    <p>{stu.rollNumber}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Admission No</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.admissonNumber}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Class</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.class}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Section</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.section}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Class Shift</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.classShift}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Admisson Date</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.admissonDate}</p>
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
                <h2>Parents Info</h2>
                <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <div className='StudentData'>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Father Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.fatherName}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Father CNIC</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.fatherCNIC}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Father Occupation</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.fatherOccupation}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Mother Name</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.motherName}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Mother CNIC</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.motherCNIC}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Mother Occupation</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.motherOccupation}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Phone Number</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.phoneNumber}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <h5>Nationality</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <p>{stu.nationality}</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className='StudentImageView'>
                            <img src={StudentIcon} />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2>Previous Schools</h2>
                        <div className='previousSchoolsSec'>
                            <h3>Allient School Bahawalpur</h3>
                            <h3>Superior College Bahawalpur</h3>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2>Address</h2>
                        <div className='addressSec'>
                            <h3>Present Address: {stu.presentAddress}</h3>
                            <h3>Permanent Address: {stu.parmanentAddress}</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ViewStudent;