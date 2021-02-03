import React from 'react';
import SettingMain from '../../pages/SettingMain';
import './style/settingtabs.css';

import {
    Link,
    useRouteMatch
} from "react-router-dom";

function SettingTabs() {
    let { url } = useRouteMatch();
    return (
        <div className="SettingTab">
            <ul>
                <Link className="SettingTabLink" to={`/settings/general`}>
                    <li>
                        <p>General</p>
                    </li>
                </Link>
                <Link className="SettingTabLink" to={`/settings/users`}>
                    <li>
                        <p>Users</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SettingTabs;