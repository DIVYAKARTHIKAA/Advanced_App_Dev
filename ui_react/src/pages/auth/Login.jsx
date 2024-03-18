import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/user/dashboard')
    }

    return (
        <div className='p-0 m-0 h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
            <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-[30%] items-center justify-center' onSubmit={handleLogin}>
                <input type="email" name="" id="" placeholder='Email' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                <input type="password" name="" id="" placeholder='Password' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Login</button>
                <p className='text-gray-600'>Don't have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
            </form>
        </div>
    )
}

export default Login
