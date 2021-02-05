import React from 'react';
import SettingMain from '../../pages/SettingMain';
import './style/feeschallanstab.css';

import {
    Link,
    useRouteMatch
} from "react-router-dom";

function FeesChallansTab() {
    let { url } = useRouteMatch();
    return (
        <div className="FeesTab">
            <ul>
                <Link className="FeesTabLink" to={`/payments/students`}>
                    <li>
                        <p>Students</p>
                    </li>
                </Link>
                <Link className="FeesTabLink" to={`/payments/teachers`}>
                    <li>
                        <p>Teachers</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default FeesChallansTab;