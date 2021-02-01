import React from 'react'
import './style/studentmain.css'


import MainMenu from '../components/MainMenu'
import StudentClassIndex from '../components/Students/StudentClassIndex';
import StudentRow from '../components/Students/StudentRow';
import { Container, Row, Col } from 'react-bootstrap';

function StudentMain() {
    return (
        <div>
            <MainMenu />
            <div className='StudentsContainer'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Students</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}><button className='AddNewBTN'>Add New</button></Col>
                </Row>
                <StudentClassIndex/>
                <StudentRow />
            </div>
        </div>
    )
}

export default StudentMain;