import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div >
      <div className="backdrop-blur-3xl z-10"></div>
      <div className="mt-28 w-full h-screen ">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="w-full max-w-sm p-6 bg-[#1f29377b] rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Create an account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email below to create your account
            </p>
            <div className="flex justify-between mt-6">
              <button className="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.49.5.092.683-.217.683-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.37-1.342-3.37-1.342-.454-1.155-1.11-1.463-1.11-1.463-.909-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.944 0-1.092.39-1.986 1.03-2.685-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.806a9.565 9.565 0 0 1 2.5.337c1.91-1.295 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.64.699 1.03 1.593 1.03 2.685 0 3.841-2.337 4.69-4.566 4.939.36.31.68.92.68 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.181.578.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                GitHub
              </button>
              <div className="w-4" />
              <button className="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 12.227c0-.637-.057-1.245-.164-1.824H12v3.448h5.377c-.232 1.243-.94 2.295-1.993 3.002v2.498h3.221c1.887-1.732 2.995-4.288 2.995-7.124z" />
                  <path d="M12 22c2.7 0 4.968-.896 6.625-2.423l-3.22-2.498c-.896.6-2.045.952-3.405.952-2.617 0-4.832-1.767-5.625-4.143H3.086v2.586C4.734 19.617 8.095 22 12 22z" />
                  <path d="M6.375 13.887c-.21-.6-.33-1.243-.33-1.887s.12-1.288.33-1.887V7.426H3.086C2.396 8.77 2 10.326 2 12s.396 3.23 1.086 4.574l3.289-2.687z" />
                  <path d="M12 5.435c1.47 0 2.792.508 3.834 1.505l2.865-2.865C16.962 2.698 14.695 2 12 2 8.095 2 4.734 4.383 3.086 7.426l3.289 2.587C7.168 7.203 9.383 5.435 12 5.435z" />
                </svg>

                Google
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 ">OR CONTINUE WITH</span>
              </div>
            </div>

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
              <Link to={"/Chat"}>
              <button
                type="submit"
                
                className="w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Create account
              </button></Link>
            </form>
            <h1 className='mt-2 text-sm'>already have an account? <Link to={"/Login"}><span className='underline'>Login</span></Link></h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup