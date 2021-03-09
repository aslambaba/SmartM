import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import './style/inputfieldsstyle.css';

function App(props) {
    const [inputList, setInputList] = useState([{ degreeName: "", instituteName: "", completedYear: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        props.sqi(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { degreeName: "", instituteName: "", completedYear: "" }]);
    };

    return (
        <div className="App">
            {inputList.map((x, i) => {
                return (
                    <div className="AddQualificationSec">
                        <Row>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    name="degreeName"
                                    placeholder="Degree Name"
                                    value={x.DegreeName}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    className="ml10"
                                    name="instituteName"
                                    placeholder="Institute Name"
                                    value={x.InstituteName}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <input
                                    className="ml10"
                                    name="completedYear"
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