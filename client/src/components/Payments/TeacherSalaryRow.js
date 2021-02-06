import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './style/teacherssalary.css';

function TeacherSalaryRow() {
    return (
        <div>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='TeacherSalaryRow'>
                        <Row>
                            <Col lg={1} md={1} sm={1} xs={1}><p>Roll</p></Col>
                            <Col lg={2} md={1} sm={1} xs={1}><p>Name</p></Col>
                            <Col lg={1} md={1} sm={1} xs={1}><p>Class</p></Col>
                            <Col lg={1} md={1} sm={1} xs={1}><p>Section</p></Col>
                            <Col lg={4} md={1} sm={1} xs={1}><p>Last 6 Month Dues</p></Col>
                            <Col lg={3} md={1} sm={1} xs={1}><p>Action</p></Col>
                        </Row>
                    </div>
                    <div className='TeacherSalaryRowData'>
                        <div className='TCHRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1874</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Abdul Mateen</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>A</p></Col>
                                <Col lg={4} md={1} sm={1} xs={1}>
                                    <div className='LastSixMonth'>
                                        <p>Jan</p>
                                        <p>Feb</p>
                                        <p>Mar</p>
                                        <p>Apr</p>
                                        <p>May</p>
                                        <p>Jun</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='TCHRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1874</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Abdul Mateen</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>A</p></Col>
                                <Col lg={4} md={1} sm={1} xs={1}>
                                    <div className='LastSixMonth'>
                                        <p>Jan</p>
                                        <p>Feb</p>
                                        <p>Mar</p>
                                        <p>Apr</p>
                                        <p>May</p>
                                        <p>Jun</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='TCHRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1874</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Abdul Mateen</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>A</p></Col>
                                <Col lg={4} md={1} sm={1} xs={1}>
                                    <div className='LastSixMonth'>
                                        <p>Jan</p>
                                        <p>Feb</p>
                                        <p>Mar</p>
                                        <p>Apr</p>
                                        <p>May</p>
                                        <p>Jun</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TeacherSalaryRow;