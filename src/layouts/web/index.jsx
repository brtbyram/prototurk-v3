import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Sidebar from './components/sidebar'

function WebLayout() {
  return (
    <>
        <Header/>
        <Sidebar/>
        <main className='p-6 ml-[250px]'>
        <Outlet/>
        </main>
    </>
  )
}

export default WebLayout