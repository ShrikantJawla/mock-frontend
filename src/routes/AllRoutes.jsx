import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BugTracker from '../pages/BugTracker'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import PrivateRoute from './PrivateRoute'

const links = [
  { link: '/', element: <Login /> },
  { link: '/signup', element: <SignUp /> },
  {
    link: '/bugtracker',
    element: (
      <PrivateRoute>
        <BugTracker />
      </PrivateRoute>
    ),
  },
]

const AllRoutes = () => {
  return (
    <Routes>
      {links.map((ele, ind) => (
        <Route path={ele.link} element={ele.element} key={ind} />
      ))}
    </Routes>
  )
}

export default AllRoutes
