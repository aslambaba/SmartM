import React from 'react'
import './style/teacherssalary.css';
import MainMenu from '../MainMenu';
import FeesChallansTab from './PaymentTabs';
import ClassIndex from '../ClassIndex';
import TeacherSalaryRow from './TeacherSalaryRow';


function TeachersSalary(){
    return(
        <div>
            <MainMenu />
            <div className='TeacherSalary'>
                <h2>Teachers Salary Records</h2>
                <FeesChallansTab/>
                <ClassIndex/>
                <TeacherSalaryRow/>
            </div>
        </div>
    )
}

export default TeachersSalary;