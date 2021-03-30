import React from 'react'
import MainMenu from '../../components/MainMenu';
import { Row, Col } from 'react-bootstrap';
import AddSection from '../../components/Classes/AddSection';
import ClassComponent from '../../components/Classes/ClassComponent';

import './style/classesstyle.css';

import {
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


import { useQuery } from '@apollo/client';
import { GetSections } from '../../queries/classquery';

function SingleClass() {

    const { classNo } = useParams();
    let { url } = useRouteMatch();
    console.log(classNo);


    const { loading, error, data } = useQuery(GetSections, {
        variables: { classNo },
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const sections = data.getSection;
    return (
        <div>
            <MainMenu />
            <div className='ClassesConatiner'>
                <Row>
                    <Col lg={10} md={10} sm={8} xs={8}><h1>Class {classNo}</h1></Col>
                    <Col lg={2} md={2} sm={4} xs={4}>
                        <AddSection cn={classNo} />
                    </Col>
                </Row>
                <Row>
                    {
                        sections.map((sec) => {
                            console.log(sec);
                            return (
                                <Col lg={4} md={4} sm={6} xs={6}>
                                    <Link to={`${url}/${sec}`}>
                                        <ClassComponent name={sec} />
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default SingleClass