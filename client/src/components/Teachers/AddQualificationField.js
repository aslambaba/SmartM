import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import './style/inputfieldsstyle.css';

function App() {
    const [inputList, setInputList] = useState([{ DegreeName: "", InstituteName: "", CompletedYear: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { DegreeName: "", InstituteName: "", CompletedYear: "" }]);
    };

    return (
        <div className="App">
            {inputList.map((x, i) => {
                return (
                    <div className="AddQualificationSec">
                        <Row>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    name="DegreeName"
                                    placeholder="Degree Name"
                                    value={x.DegreeName}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    className="ml10"
                                    name="InstituteName"
                                    placeholder="Institute Name"
                                    value={x.InstituteName}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    className="ml10"
                                    name="CompletedYear"
                                    placeholder="Completed Year"
                                    value={x.CompletedYear}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <div className="btn-box">
                                    {inputList.length !== 1 && <button
                                        className="mr10 REMBtn"
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {inputList.length - 1 === i && <button className='ADDBtn'onClick={handleAddClick}>ADD</button>}
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
}

export default App;