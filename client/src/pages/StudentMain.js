import React from 'react'
import './style/studentmain.css'


import MainMenu from '../components/MainMenu'
import StudentClassIndex from '../components/Students/StudentClassIndex';

function StudentMain() {
    return (
        <div>
            <MainMenu />
            <div className='StudentsContainer'>
                <h1>Students</h1>
                <StudentClassIndex/>
            </div>
        </div>
    )
}

export default StudentMain;