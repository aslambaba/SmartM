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
            </div>
        </div>
    )
}

export default FeesChallans;