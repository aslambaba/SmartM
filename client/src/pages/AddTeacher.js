import React from 'react';
import './style/addstudent.css';
import StudentIcon from './images/studentIcon.jpg'
import MainMenu from '../components/MainMenu'
import { Row, Col } from 'react-bootstrap';
import AddQualificationField from '../components/Teachers/AddQualificationField';
import WorkExperince from '../components/Teachers/WorkExperince';


function AddStudent() {

    function LL() {
        for (let i = 0; i < 3; i++) {
            return <h1>{i}</h1>
        }
    }

    return (
        <div>
            <MainMenu />
            <div className='AddStudents'>
                <h3>Add Teacher</h3>
                <div className="FormBody">
                    <img src={StudentIcon} />
                    <form>
                        <div className='PersonalInfo'>
                            <h3>Teacher Information</h3>
                            <Row>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="First Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Last Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><select>
                                    <option>Male</option>
                                    <option>female</option>
                                    <option>Other</option>
                                </select></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Father Name" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="CNIC/B-form" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Date Of Birth" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Teacher ID" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Religion" /></Col>
                                <Col lg={3} md={4} sm={6} xs={12}><input placeholder="Photo" type='file' /></Col>
                            </Row>
                        </div>
                        <div className="QualificationInformation">
                            <h3>Qualifications</h3>
                                <AddQualificationField/>
                        </div>
                        <div className="WorkInformation">
                            <h3>Previous Work Experinces</h3>
                            <WorkExperince/>
                        </div>
                        <div class="SaveBTN">
                            <button>Cancel</button>
                            <button>Save</button>
                            <button>Save & Add New</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;