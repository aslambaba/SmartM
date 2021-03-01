import React from 'react'
import './style/classcomponent.css';

function ClassComponent(props){
    return(
        <div className='MainSection'>
            <h3>Class {props.name}</h3>
        </div>
    )
}

export default ClassComponent;