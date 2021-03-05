import React from 'react';
import './style/teacherrow.css'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link,
    useRouteMatch,
} from "react-router-dom";

// Apollo Client For Query Students Record
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GetTeachers } from '../../queries/teacherquery';
import { DeleteTeacherRecord } from '../../mutations/teachermutation';

function TeacherRow() {

    

    let { url } = useRouteMatch();
    let { loading, error, data } = useQuery(GetTeachers);
    const [DeleteTeacher] = useMutation(DeleteTeacherRecord);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let teacherRecords = data.teachers;
    
    function DeleteTCHRecord(id){
        DeleteTeacher(
            {
                variables: {
                    teacherid: id
                },
                refetchQueries: [{query: GetTeachers}]
            }
        );
    }
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
                                <Col lg={3} md={1} sm={1} xs={1}><p>Email</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>Action</p></Col>
                            </Row>
                            {
                                teacherRecords.map((a) => {
                                    return (
                                        <Row className="STDR">
                                            <Col lg={1} md={1} sm={1} xs={1}><p>{a.teacherID}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                            <Col lg={2} md={1} sm={1} xs={1}><p>{`${a.firstName} ${a.lastName}`}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>{a.gender}</p></Col>
                                            <Col lg={3} md={1} sm={1} xs={1}><p>{a.email}</p></Col>
                                            <Col lg={3} md={1} sm={1} xs={1}>
                                                <div className="ActionButton">
                                                    <Link to={`${url}/viewteacher/${a._id}`}>
                                                        <button>view</button>
                                                    </Link>
                                                    <button>update</button>
                                                    <button onClick={()=>{DeleteTCHRecord(a._id)}}>delete</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeacherRow;