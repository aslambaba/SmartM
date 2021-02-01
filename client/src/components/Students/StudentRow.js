import React from 'react'
import './style/studentrow.css'
import { Container, Row, Col } from 'react-bootstrap';

function StudentRow(){
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='StudentRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Roll</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Name</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Gender</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Quardian Name</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Class</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Section</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>Action</p></Col>
                            </Row>
                            <Row className="STDR">
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1029</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Aslam Sarfraz</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Male</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Shama Zia</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Blue</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="STDR">
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1029</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Aslam Sarfraz</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Male</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Shama Zia</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Blue</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="STDR">
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1029</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Aslam Sarfraz</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Male</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Shama Zia</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>10th</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Blue</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <button>view</button>
                                        <button>update</button>
                                        <button>delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default StudentRow;