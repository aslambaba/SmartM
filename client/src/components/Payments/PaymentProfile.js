import React from 'react';
import './style/paymentprofile.css'
import StudentIcon from './images/studentIcon.jpg';
import { Row, Col } from 'react-bootstrap';

function PaymentProfile() {
    return (
        <div>
            <div className='ProfileBody'>
                <Row>
                    <Col lg={1} md={2} sm={6} xs={6}>
                        <img src={StudentIcon} />
                    </Col>
                    <Col lg={3} md={2} sm={6} xs={6}>
                        <h4>Aslam Sarfraz</h4>
                        <p>Join on : 12-May-2015</p>
                        <button>View Profile</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PaymentProfile;