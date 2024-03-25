import React from 'react'
import {Outlet} from 'react-router-dom'
import App from './App'


export default function Layout() {
  return (
    <div className='flex'>
        <div className='w-1/5'>
            <App /> 
        </div>
        <div  className='w-4/5'>
             <Outlet/>
        </div>
    
    </div>
  )
}
