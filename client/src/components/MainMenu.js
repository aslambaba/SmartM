import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/mainmenu.css';

// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
    Link
} from "react-router-dom";

function MainMenu() {

    let [menuHidden, SetmenuHidden] = useState(true);

    let hiddenStyle, submenuHeading;

    if (menuHidden) {
        hiddenStyle = {
            display: "none",
        };
        submenuHeading = {
            display: "none",
        }
    } else {
        hiddenStyle = {
            margin: "0",
            display: "inline-block",
            padding: "0px 5px",
        };
        submenuHeading = {
            margin: "10px 0",
            display: "inline",
            fontSize: "10px",
        }
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
                        <DashboardIcon />
                        <Link style={hiddenStyle} className="Linkk  " to={`/`}>Dashboard</Link>
                    </li>
                    <li>
                        <GroupIcon />
                        <Link style={hiddenStyle} className="Linkk  " to={`/students`}>Students</Link>
                    </li>
                    <li>
                        <SupervisedUserCircleIcon />
                        <Link style={hiddenStyle} className="Linkk  " to={`/teachers`}>Teachers</Link>
                    </li>
                    <li>
                        <SettingsIcon />
                        <Link style={hiddenStyle} className="Linkk  " to={`/settings`}>Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu;