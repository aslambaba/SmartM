import React from 'react'
import MainMenu from '../components/MainMenu'
import './style/dashboard.css'
import { Container, Row, Col } from 'react-bootstrap';

//Import Components
import TimeTableSlider from '../components/TimeTableSlider';

// Import Icons
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Dashboard() {
    return (
        <div>
            <MainMenu />
            <div className='DashboardContainer'>
                <h1>Dashboard</h1>
                <Row className="DashboardFirstRow">
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <div className="QuantityRow">
                            <h4>Total Students</h4>
                            <GroupIcon />
                            <h3>1000</h3>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <div className="QuantityRow">
                            <h4>Total Teachers</h4>
                            <SupervisedUserCircleIcon />
                            <h3>1000</h3>

                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <div className="QuantityRow">
                            <h4>Total Parents</h4>
                            <SupervisedUserCircleIcon />
                            <h3>1000</h3>

                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <div className="QuantityRow">
                            <h4>Total Earnings</h4>
                            <SupervisedUserCircleIcon />
                            <h3>1000</h3>

                        </div>
                    </Col>
                </Row>
                <Row className="Dashboard2ndRow">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='FeesExpences'>

                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='TimeTable'>
                            <TimeTableSlider/>
                        </div>
                    </Col>
                </Row>
                <Row className="Dashboard3rdRow">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="EventCalender">

                        </div>
                    </Col>
                </Row>
                <Row className="Dashboard4thRow">
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="NotificationBoard">

                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="RecentActivites">

                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Dashboard;