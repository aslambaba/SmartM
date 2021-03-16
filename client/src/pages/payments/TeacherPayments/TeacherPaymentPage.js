import React from 'react';
import MainMenu from '../../../components/MainMenu';
import PaymentProfile from '../../../components/Payments/PaymentProfile';
import './style/teacherpaymentpage.css';
import { Row, Col } from 'react-bootstrap';


function TeacherPaymentPage() {
    return (
        <div>
            <MainMenu />
            <div className='TPP_MainSection'>
                <h3>Teacher Payments</h3>
                <PaymentProfile/>
                <div className='PaymentSec'>
                    <div className='ActionBTN'>
                        <button>Edit</button>
                    </div>
                    <h4>2021</h4>
                    <Row>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jan</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Feb</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Mar</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Apr</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>May</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jun</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jul</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Aug</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Sep</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Oct</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Nov</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Dec</div>
                        </Col>
                    </Row>
                </div>
                <div className='PaymentSec'>
                    <h4>2020</h4>
                    <Row>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jan</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Feb</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Mar</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Apr</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>May</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jun</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jul</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Aug</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Sep</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Oct</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Nov</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Dec</div>
                        </Col>
                    </Row>
                </div>
                <div className='PaymentSec'>
                    <h4>2019</h4>
                    <Row>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jan</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Feb</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Mar</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Apr</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>May</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jun</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jul</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Aug</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Sep</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Oct</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Nov</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Dec</div>
                        </Col>
                    </Row>
                </div>
                <div className='PaymentSec'>
                    <h4>2018</h4>
                    <Row>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jan</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Feb</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Mar</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Apr</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>May</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jun</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Jul</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Aug</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Sep</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Oct</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Nov</div>
                        </Col>
                        <Col lg={1}>
                            <div className='MonthIcon'>Dec</div>
                        </Col>
                    </Row>
                    <div className='ActionBTN2'>
                        <button>Cancle</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherPaymentPage;