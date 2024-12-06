import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div >
    <div className="backdrop-blur-3xl z-10"></div>
    <div className="mt-28 w-full h-screen ">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm p-6 bg-[#1f29377b] rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white">Login to create report</h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email and password below
          </p>
         


          <form>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 mt-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="m@example.com"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 mt-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <h1 className='mt-2 text-sm'>Dont't have an account? <Link to={"/Signup"}><span className='underline'>Login</span></Link></h1>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Login