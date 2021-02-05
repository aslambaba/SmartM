import React from 'react'
import './style/teacherssalary.css';
import MainMenu from '../MainMenu';
import FeesChallansTab from './PaymentTabs';

function TeachersSalary(){
    return(
        <div>
            <MainMenu />
            <div className='TeacherSalary'>
                <h2>Teachers Salary Records</h2>
                <FeesChallansTab/>
            </div>
        </div>
    )
}

export default TeachersSalary;