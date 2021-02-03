import React from 'react'
import './style/settingmain.css'

import MainMenu from '../components/MainMenu'
import SettingTabs from '../components/Settings/SettingTabs';

function SettingMain() {
    return (
        <div>
            <MainMenu />
            <div className="SettingMain">
                <h2>Settings</h2>
                <SettingTabs />
                <p>Note: This Software come with some default settings.</p>
            </div>
        </div>
    )
}

export default SettingMain;