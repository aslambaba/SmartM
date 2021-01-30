import React from 'react'
import MainMenu from '../components/MainMenu'

function StudentMain(){
    return(
        <div>
            <MainMenu/>
            <div className='StudentsContainer'>
                <h1>Students</h1>
            </div>
        </div>
    )
}

export default StudentMain;