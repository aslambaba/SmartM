import React from 'react'
import './style/studentfees.css';
import MainMenu from '../MainMenu';
import FeesChallansTab from './PaymentTabs';

function StudentFees(){
    return(
        <div>
            <MainMenu />
            <div className='StudentFeesMain'>
                <h2>Student Dues Records</h2>
                <FeesChallansTab/>
            </div>
        </div>
    )
}

export default StudentFees;