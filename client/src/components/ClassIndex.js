import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/studentclassindex.css';

function StudentClassIndex(props){
    return (
        <Container fluid>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='ClassesIndex'>
                        <h2>Classes</h2>
                        <Row>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('all')}>All</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('1')}>1</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('2')}>2</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('3')}>3</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('4')}>4</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('5')}>5</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('6')}>6</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('7')}>7</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('8')}>8</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('9')}>9</h3></Col>
                            <Col lg={1} md={2} sm={3} xs={4}><h3 onClick={()=>props.class('10')}>10</h3></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StudentClassIndex;