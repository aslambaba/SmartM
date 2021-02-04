import React from 'react'
import './style/userssettings.css'
import MainMenu from '../MainMenu';
import SettingTabs from './SettingTabs';

import AddUser from './Users/AddUser';
import CreateUser from './Users/CreateRole';

import { Row, Col } from 'react-bootstrap';

function UsersSettings() {
    return (
        <div>
            <MainMenu />
            <div className='GeneralSettings'>
                <h2>Settings</h2>
                <SettingTabs />
                <h4>Users Settings</h4>
                <div className='AddNewUsers'>
                    <AddUser className='AddNewBTN'/>
                    <CreateUser className='AddNewBTN'/>
                </div>
                <div className='UserRoleHeading'>
                    <Row>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <p>UserName</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <p>Role</p>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4}>
                            <p>Password</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <p>Action</p>
                        </Col>
                    </Row>
                </div>
                <div className='UserRoleRows'>
                    <div className="UserRoleRow">
                        <Row>
                            <Col lg={2} md={2} sm={2} xs={2}>
                                <p>Aslam Baba</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <select>
                                    <option>Administrator</option>
                                    <option>Morderator</option>
                                    <option>Viewer</option>
                                </select>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>Password123@</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <button>Delete</button>
                                <button>Save Changes</button>
                            </Col>
                        </Row>
                    </div>
                    <div className="UserRoleRow">
                        <Row>
                            <Col lg={2} md={2} sm={2} xs={2}>
                                <p>Aslam Baba</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <select>
                                    <option>Administrator</option>
                                    <option>Morderator</option>
                                    <option>Viewer</option>
                                </select>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>Password123@</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <button>Delete</button>
                                <button>Save Changes</button>
                            </Col>
                        </Row>
                    </div>
                    <div className="UserRoleRow">
                        <Row>
                            <Col lg={2} md={2} sm={2} xs={2}>
                                <p>Aslam Baba</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <select>
                                    <option>Administrator</option>
                                    <option>Morderator</option>
                                    <option>Viewer</option>
                                </select>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <p>Password123@</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <button>Delete</button>
                                <button>Save Changes</button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsersSettings;