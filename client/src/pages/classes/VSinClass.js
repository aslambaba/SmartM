import React,{useState} from 'react'
import '../style/studentmain.css'


import MainMenu from '../../components/MainMenu'
import StudentRow from '../../components/Students/StudentRow';
import { Row, Col } from 'react-bootstrap';


import {
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function VSinClass() {
    let { url } = useRouteMatch();
    const {ClassSection} = useParams();
    return (
        <div>
            <MainMenu />
            <div className='StudentsContainer'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Students of {ClassSection}</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}><Link to={`/students/addstudent`}><button className='AddNewBTN'>Add New</button></Link></Col>
                </Row>
                <StudentRow />
            </div>
        </div>
    )
}

export default VSinClass;