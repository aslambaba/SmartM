import React from 'react'
import './style/generalsettings.css'
import MainMenu from '../MainMenu';
import SettingTabs from './SettingTabs';
function UsersSettings() {
    return (
        <div>
            <MainMenu />
            <div className='GeneralSettings'>
            <h2>Settings</h2>
            <SettingTabs />
                <h4>Users Settings</h4>
            </div>
        </div>
    )
}
export default UsersSettings;