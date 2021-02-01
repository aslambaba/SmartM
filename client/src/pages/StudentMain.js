import React from 'react'
import './style/studentmain.css'


import MainMenu from '../components/MainMenu'
import StudentClassIndex from '../components/Students/StudentClassIndex';
import StudentRow from '../components/Students/StudentRow';
import { Container, Row, Col } from 'react-bootstrap';


import {
    Link,
    useRouteMatch
} from "react-router-dom";

function StudentMain() {
    let { url } = useRouteMatch();
    return (
        <div>
            <MainMenu />
            <div className='StudentsContainer'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Students</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}><Link to={`${url}/addstudent`}><button className='AddNewBTN'>Add New</button></Link></Col>
                </Row>
                <StudentClassIndex/>
                <StudentRow />
            </div>
        </div>
    )
}

export default StudentMain;