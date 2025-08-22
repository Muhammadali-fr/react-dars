import React from 'react'
import Image from '../assets/bg.jpg'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[50%'>
                <Outlet />
            </div>
            <img className='w-[50%' src={Image} alt="car" />
        </div>
    )
}

export default AuthLayout