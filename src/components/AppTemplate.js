import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Navbar from './Navbar'

const AppTemplate = () => {
  return (
    <div className='flex  h-screen  bg-sky-500/100 text-white '>
        <div className='w-1/3 flex items-center justify-center '>
            <Sidebar/>
        </div>
        <div className='w-2/3 overflow-y-scroll p-8 '>
            <Navbar/>
            {/* <div className='overflow-y-scroll h-full'> */}
              <Outlet/>
            {/* </div> */}
        </div>
    </div>
  )
}

export default AppTemplate