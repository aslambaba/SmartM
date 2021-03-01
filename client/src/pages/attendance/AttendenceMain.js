import React,{useState} from 'react';
import './style/attendencemain.css';

import MainMenu from '../../components/MainMenu';
import ClassIndex from '../../components/ClassIndex';
import { Row, Col } from 'react-bootstrap';


import {
    Link,
    useRouteMatch
} from "react-router-dom";

function AttendenceMain() {
    let [currentClass,setClass] = useState('all');
    let [editmode,setEditmode] = useState(false);
    return (
        <div>
            <MainMenu />
            <div className='AttendenceContainer'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Attendences {currentClass}</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}><button className='AddNewBTN' onClick={()=>(setEditmode(true))}>Update Attendence</button></Col>
                </Row>
                <ClassIndex class={setClass} />
            </div>
        </div>
    )
}

export default AttendenceMain;