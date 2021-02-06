import React from 'react';
import './style/feeschallans.css';

import MainMenu from '../components/MainMenu'
import PaymentsTab from '../components/Payments/PaymentTabs';

function FeesChallans() {
    return (
        <div>
            <MainMenu />
            <div className='FeesChallansMain'>
                <h2>Payments</h2>
                <PaymentsTab/>
                <p>Note: There You Can track a record of Student Dues and Teachers Salaries</p>
            </div>
        </div>
    )
}

export default FeesChallans;