import React from 'react'
import { Dashboard,Sales,Orders,Analytics,Schedules,Expenses,Patients } from '../Screens'

function MainAppPage() {
  return (
    <div className='bg-white w-full'>
      <Patients/>
    </div>
  )
}

export default MainAppPage