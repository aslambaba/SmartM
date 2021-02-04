import React, { useState } from 'react'
import './style/generalsettings.css'
import MainMenu from '../MainMenu';
import SettingTabs from './SettingTabs';

import { Container, Row, Col } from 'react-bootstrap';


import Switch from '@material-ui/core/Switch';

function GeneralSettings() {

    let [fieldstatus, Setfieldstatus] = useState(true);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div>
            <MainMenu />
            <div className='GeneralSettings'>
                <h2>Settings</h2>
                <SettingTabs />
                <h4>General Settings</h4>
                <div className='AccountInformation'>
                    <Row>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <p>Institue Name:</p>
                            <input disabled={fieldstatus} />
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <p>Institue Email:</p>
                            <input disabled={fieldstatus} />
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <p>Password:</p>
                            <input disabled={fieldstatus} />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="AccountInfoBTN">
                                <button onClick={() => Setfieldstatus(false)}>Edit</button>
                                <button>Save Changes</button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="GeneralFeatures">
                    <h3>Features</h3><br></br>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <p>Need a Earning Expenses Features</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <p>Need a Earning Expenses Features</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <p>Need a Earning Expenses Features</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='feature'>
                                <Switch
                                    checked={state.checkedC}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checkedC"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="AccountInfoBTN">
                                <button onClick={() => Setfieldstatus(false)}>Edit</button>
                                <button>Save Changes</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default GeneralSettings;