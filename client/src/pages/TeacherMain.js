import React from 'react'
import './style/studentmain.css'


import MainMenu from '../components/MainMenu'
import ClassIndex from '../components/ClassIndex';
import TeacherRow from '../components/Teachers/TeacherRow';
import { Container, Row, Col } from 'react-bootstrap';


import {
    Link,
    useRouteMatch
} from "react-router-dom";

function TeacherMain() {
    let { url } = useRouteMatch();
    return (
        <div>
            <MainMenu />
            <div className='StudentsContainer'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Teachers</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}><Link to={`${url}/addteacher`}><button className='AddNewBTN'>Add New</button></Link></Col>
                </Row>
                <ClassIndex/>
                <TeacherRow/>
            </div>
        </div>
    )
}

export default TeacherMain;