import React from 'react';
import './style/teacherrow.css'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link,
    useRouteMatch,
} from "react-router-dom";


function TeacherRow() {
    let { url } = useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='TeacherRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>ID</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Name</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Gender</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>CNIC</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>Action</p></Col>
                            </Row>
                            <Row className="STDR">
                                <Col lg={1} md={1} sm={1} xs={1}><p>#1029</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Aslam Sarfraz</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Male</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>35202-3596398-9</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <Link to={`${url}/viewteacher`}>
                                            <button>view</button>
                                        </Link>
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
                                <Col lg={3} md={1} sm={1} xs={1}><p>35202-3596398-9</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <Link to={`${url}/viewteacher`}>
                                            <button>view</button>
                                        </Link>
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
                                <Col lg={3} md={1} sm={1} xs={1}><p>35202-3596398-9</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <Link to={`${url}/viewteacher`}>
                                            <button>view</button>
                                        </Link>
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
                                <Col lg={3} md={1} sm={1} xs={1}><p>35202-3596398-9</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}>
                                    <div className="ActionButton">
                                        <Link to={`${url}/viewteacher`}>
                                            <button>view</button>
                                        </Link>
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

export default TeacherRow;