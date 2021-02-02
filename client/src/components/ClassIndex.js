import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/studentclassindex.css';

function StudentClassIndex(){
    return (
        <Container fluid>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='ClassesIndex'>
                        <h2>Classes</h2>
                        <Row>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>All</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>1</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>2</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>3</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>4</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>5</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>6</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>7</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>8</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>9</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3>10</h3></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StudentClassIndex;