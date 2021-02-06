import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import './style/inputfieldsstyle.css';

function App() {
    const [inputList, setInputList] = useState([{ WorkExperince: ""}]);

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
        setInputList([...inputList, {WorkExperince: ""}]);
    };

    return (
        <div className="App">
            {inputList.map((x, i) => {
                return (
                    <div className="AddQualificationSec">
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <input
                                    name="Work Experince"
                                    placeholder="Work Experince"
                                    value={x.DegreeName}
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