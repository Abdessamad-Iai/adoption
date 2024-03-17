import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Base = () => {
  return (
    <div className='container mx-auto'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Base