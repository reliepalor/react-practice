import React from 'react'
import {
    Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    )
)

const Start = () => {

  return <RouterProvider router={router}/>
    
}

export default Start
