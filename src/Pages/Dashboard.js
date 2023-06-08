import React from 'react'
import { TopBar,SideBar } from '../Components'
import MainAppPage from './MainAppPage'
function Dashboard() {
  return (
    <>
    <div  className="topbar">
    <TopBar/>
    </div>
    {/* This is where the bottom sheet begins */}
    <div className='flex bg-yellow-200 h-screen'>
    <SideBar/>
    <MainAppPage/>
    </div>
    </>
  )
}

export default Dashboard