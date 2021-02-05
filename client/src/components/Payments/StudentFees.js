import React,{useState} from 'react'
import './style/studentfees.css';
import MainMenu from '../MainMenu';
import FeesChallansTab from './PaymentTabs';
import ClassIndex from '../ClassIndex';
import StudentFeeRow from './StudentFeeRow';

function StudentFees(){
    
    let [currentClass,setClass] = useState('all');
    return(
        <div>
            <MainMenu />
            <div className='StudentFeesMain'>
                <h2>Student Dues Records</h2>
                <FeesChallansTab/>
                <ClassIndex class={setClass}/>
                <StudentFeeRow/>
            </div>
        </div>
    )
}

export default StudentFees;