import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/mainmenu.css';

// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
    Link
} from "react-router-dom";

function MainMenu() {

    let [menuHidden, SetmenuHidden] = useState(true);

    let hiddenStyle;

    if (menuHidden) {
        hiddenStyle = {
            display: "none",
        }
    } else {
        hiddenStyle = {
            margin: "0",
            display: "inline-block",
            padding: "0px 5px",
        };
    }

    return (
        <div className='MainBar'>
            <Container fluid className='Bar'>
                <Row>
                    <Col lg="1" md="1" sm="1" xs="1"><MenuIcon /></Col>
                    <Col lg="10" md="10" sm="9" xs="9"><h2>School Managment System</h2></Col>
                    <Col lg="1" md="1" sm="2" xs="2"><AccountCircleIcon /></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg="1" md="1" sm="2" xs="2">

                    </Col>
                    <Col lg="11" md="11" sm="10" xs="10"></Col>
                </Row>
            </Container>
            <div className="Menu"

                onMouseEnter={() => SetmenuHidden(false)}
                onMouseLeave={() => SetmenuHidden(true)}

            >
                <ul>
                    <li>
                        <Link className="Linkk">
                            <MenuIcon />
                            <p style={hiddenStyle}>Menu</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/`}>
                            <DashboardIcon />
                            <p style={hiddenStyle}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/students`}>
                            <GroupIcon />
                            <p style={hiddenStyle}>Students</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/teachers`}>
                            <SupervisedUserCircleIcon />
                            <p style={hiddenStyle}>Teachers</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/classes`}>
                            <SupervisedUserCircleIcon />
                            <p style={hiddenStyle}>Classes</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/timetable`}>
                            <SupervisedUserCircleIcon />
                            <p style={hiddenStyle}>Time Table</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/payments`}>
                            <PaymentIcon />
                            <p style={hiddenStyle}>Payments</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="Linkk" to={`/settings`}>
                            <SettingsIcon />
                            <p style={hiddenStyle}>Settings</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu;