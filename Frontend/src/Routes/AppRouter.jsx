import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home, About, Login, Signup, Feature ,Pricing,Chat} from '../Pages'
import App from '../App'

const AppRouter = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                 element: <Home />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Feature',
                element: <Feature />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/Signup',
                element: <Signup />,
            },
            {
                path: '/Pricing',
                element: <Pricing />,
            },
            {
                path: '/Chat',
                element: <Chat />,
            },
        ]
    },

])


export default AppRouter