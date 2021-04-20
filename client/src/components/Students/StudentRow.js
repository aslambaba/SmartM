import React from 'react'
import './style/studentrow.css'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link,
    useRouteMatch,
} from "react-router-dom";

// Apollo Client For Query Students Record
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GetStudents } from '../../queries/studentquery';
import {DeleteStudentRecord} from '../../mutations/studentmutation';
function StudentRow() {

    let { url } = useRouteMatch();
    let { loading, error, data } = useQuery(GetStudents);
    const [DeleteSTU] = useMutation(DeleteStudentRecord);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let studentRecords = data.students;

    function DeleteStuRecord(id) {
        DeleteSTU(
            {
                variables: {
                    stuID: id,
                },
                refetchQueries: [{query: GetStudents}],
            }
        );                
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='StudentRow'>
                            <Row>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Roll</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Name</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Gender</p></Col>
                                <Col lg={2} md={1} sm={1} xs={1}><p>Quardian Name</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Class</p></Col>
                                <Col lg={1} md={1} sm={1} xs={1}><p>Section</p></Col>
                                <Col lg={3} md={1} sm={1} xs={1}><p>Action</p></Col>
                            </Row>
                            {
                                studentRecords.map((a) => {
                                    return (
                                        <Row className="STDR">
                                            <Col lg={1} md={1} sm={1} xs={1}><p>#{a.rollNumber}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>Photo</p></Col>
                                            <Col lg={2} md={1} sm={1} xs={1}><p>{`${a.firstName} ${a.lastName}`}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>{a.gender}</p></Col>
                                            <Col lg={2} md={1} sm={1} xs={1}><p>{a.guardianName}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>{a.class}</p></Col>
                                            <Col lg={1} md={1} sm={1} xs={1}><p>{a.section}</p></Col>
                                            <Col lg={3} md={1} sm={1} xs={1}>
                                                <div className="ActionButton">
                                                    <Link to={`${url}/viewstudent/${a._id}`}>
                                                        <button>view</button>
                                                    </Link>
                                                    <Link to={`${url}/updatestudent/${a._id}`}>
                                                        <button>Update</button>
                                                    </Link>
                                                    <button onClick={()=>{DeleteStuRecord(a._id)}}>delete</button>
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

export default StudentRow;