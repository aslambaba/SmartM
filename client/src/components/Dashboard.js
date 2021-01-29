import React from 'react'
import MainMenu from './MainMenu'
import './style/mainmenu.css'
function Dashboard() {
    return (
        <div>
            <MainMenu />
            <div className='DashboardContainer'>
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard;