import React from 'react'
import MainMenu from '../../components/MainMenu';
import { Row, Col } from 'react-bootstrap';
import AddClass from '../../components/Classes/Addclass';
import ClassComponent from '../../components/Classes/ClassComponent';

import './style/classesstyle.css';

import {
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function SingleClass() {
    const { classNo } = useParams();
    let { url } = useRouteMatch();
    return (
        <div>
            <MainMenu />
            <div className='ClassesConatiner'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Class {classNo}</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}>
                        <AddClass />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <Link to={`${url}/pb1`}>
                            <ClassComponent name='PB1'/>
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <Link to={`${url}/pb2`}>
                            <ClassComponent name='PB2'/>
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <Link to={`${url}/pb3`}>
                            <ClassComponent name='PB3'/>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SingleClass